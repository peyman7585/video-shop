<?php

use Illuminate\Support\Facades\Route;

Route::get('/',[\App\Http\Controllers\IndexController::class,'index'])->name('index');

Route::get('/videos/create',[\App\Http\Controllers\VideoController::class,'create'])->name('videos.create');

Route::post('/video',[\App\Http\Controllers\VideoController::class,'store'])->name('videos.store');

Route::get('/videos/{video}',[\App\Http\Controllers\VideoController::class,'show'])->name('videos.show');

Route::get('/videos/{video}/edit',[\App\Http\Controllers\VideoController::class,'edit'])->name('videos.edit');

Route::post('/videos/{video}',[\App\Http\Controllers\VideoController::class,'update'])->name('videos.update');
