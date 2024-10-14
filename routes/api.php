<?php

use App\Http\Controllers\Api\V1\VideoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1/')->group(function (){
    Route::get('videos/{video:slug}',[VideoController::class ,'show']);
    Route::get('videos',[VideoController::class ,'index']);
    Route::post('videos',[VideoController::class,'store']);
    Route::put('videos/{video:slug}',[VideoController::class,'update']);
    Route::delete('videos/{video:slug}',[VideoController::class,'destroy']);
});


