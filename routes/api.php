<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\VideoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1/')->group(function (){
    Route::get('videos/{video:slug}',[VideoController::class ,'show']);
    Route::get('videos',[VideoController::class ,'index']);
    Route::post('videos',[VideoController::class,'store'])->middleware('auth:sanctum');
    Route::put('videos/{video:slug}',[VideoController::class,'update'])->middleware('auth:sanctum');
    Route::delete('videos/{video:slug}',[VideoController::class,'destroy'])->middleware('auth:sanctum');
    Route::get('auth/me',[AuthController::class,'me'])->middleware('auth:sanctum');
    Route::get('auth/logout',[AuthController::class,'logout'])->middleware('auth:sanctum');
});


Route::post('/v1/auth/login',[AuthController::class,'login']);

