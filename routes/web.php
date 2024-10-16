<?php

use App\Exceptions\InvalidTypeException;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ProfileController;

use App\Http\Middleware\ChechVerifyEmail;
use App\Mail\VerfiyEmail;
use App\Models\Video;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

Route::get('/',[\App\Http\Controllers\IndexController::class,'index'])->name('index');

Route::get('/videos/create',[\App\Http\Controllers\VideoController::class,'create'])->middleware(ChechVerifyEmail::class)->name('videos.create');

Route::post('/video',[\App\Http\Controllers\VideoController::class,'store'])->name('videos.store');

Route::get('/videos/{video}',[\App\Http\Controllers\VideoController::class,'show'])->name('videos.show');

Route::get('/videos/{video}/edit',[\App\Http\Controllers\VideoController::class,'edit'])->name('videos.edit');

Route::post('/videos/{video}',[\App\Http\Controllers\VideoController::class,'update'])->name('videos.update');

Route::get('/categories/{category:slug}/videos',[\App\Http\Controllers\CategoryVideoController::class,'index'])->name('categories.videos.index');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

Route::get('/email',function (){

    $user= \App\Models\User::find(8);
 Mail::to('abbaszadeh.85@gmail.com')->send(new VerfiyEmail($user));

});

Route::get('/verfiy' , function (){
    if(request()->hasValidSignature()){
        echo 'verfiy';
    }


})->name('verfiy');

Route::get('/generate', function (){
    echo URL::temporarySignedRoute('verfiy',now()->addSecond(20),['value'=>123456]);
});

Route::get('/jobs',function (){
    \App\Jobs\ProcessVideo::dispatch();
});

Route::get('/event', function (){
    $video=Video::first();
   \App\Events\VideoCreate::dispatch($video);

});

Route::get('/notification', function (){
    $user=\App\Models\User::first();
    $video=Video::first();
    $user->notify(new \App\Notifications\VideoProcessed($video));
});

Route::post('/videos/{video}/comments',[\App\Http\Controllers\CommentController::class,'store'])->name('comment.store');

Route::get('{likeable_type}/{likeable_id}/like',[\App\Http\Controllers\LikeController::class,'store'])->name('like.store');

Route::get('{likeable_type}/{likeable_id}/dislike',[\App\Http\Controllers\DislikeController::class,'store'])->name('dislike.store');

Route::get('/file',function (){
   return Storage::download('contracts/test3.jpg');
//    return response()->file(storage_path('app/contracts/test.jpg'));
//    $contents = Storage::get('contracts/test2.jpg');
//     return Response::make($contents)->header('content-type','image/jpeg');

});

Route::get('gate-test',function (){

    Gate::allows('test');
   dd('hi');
});

Route::get('/cache',function (){
    $value = Cache::remember('video_count', 10, function () {
        sleep(3);
        return Video::all()->count();

    });
});
Route::get('log',function (){
  throw new InvalidTypeException('this is textssws');
});
