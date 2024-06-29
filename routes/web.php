<?php

use Illuminate\Support\Facades\Route;

Route::get('/',[\App\Http\Controllers\IndexController::class,'index'])->name('index');

Route::get('/upload',function (){
    return view('videos.create');
});
