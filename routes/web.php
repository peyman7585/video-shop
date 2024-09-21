<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\ProfileController;

use App\Mail\VerfiyEmail;
use App\Models\Video;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;

Route::get('/',[\App\Http\Controllers\IndexController::class,'index'])->name('index');

Route::get('/videos/create',[\App\Http\Controllers\VideoController::class,'create'])->name('videos.create');

Route::post('/video',[\App\Http\Controllers\VideoController::class,'store'])->name('videos.store');

Route::get('/videos/{video}',[\App\Http\Controllers\VideoController::class,'show'])->name('videos.show');

Route::get('/videos/{video}/edit',[\App\Http\Controllers\VideoController::class,'edit'])->name('videos.edit');

Route::post('/videos/{video}',[\App\Http\Controllers\VideoController::class,'update'])->name('videos.update');

Route::get('/categories/{category:slug}/videos',[\App\Http\Controllers\CategoryVideoController::class,'index'])->name('categories.videos.index');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

Route::get('/email',function (){

    $user= \App\Models\User::find(8);
  return new VerfiyEmail($user);

});

Route::get('/verfiy' , function (){
    if(request()->hasValidSignature()){
        echo 'verfiy';
    }


})->name('verfiy');

Route::get('/generate', function (){
    echo URL::temporarySignedRoute('verfiy',now()->addSecond(20),['value'=>123456]);
});


