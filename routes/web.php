<?php

use Illuminate\Support\Facades\Route;

Route::get('/',[\App\Http\Controllers\IndexController::class,'index'])->name('index');

Route::get('/videos/create',[\App\Http\Controllers\VideoController::class,'create'])->name('videos.create');

Route::post('/video',[\App\Http\Controllers\VideoController::class,'store'])->name('videos.store');

Route::get('/videos/{id}',[\App\Http\Controllers\VideoController::class,'show'])->name('videos.show');
