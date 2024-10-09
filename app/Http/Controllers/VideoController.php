<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Middleware\ChechVerifyEmail;
use App\Http\Requests\storeVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use App\Models\Category;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;


class VideoController extends Controller
{


    public function index()
    {

        $videos=Video::all();
        return $videos;
    }
    public function create()
    {
        $categories=Category::all();

        return view('videos.create',compact('categories'));
    }

    public function store(storeVideoRequest $request)
    {

       $path =Storage::putFile('videos',$request->file);
        $request->merge([
            'path'=>$path
        ]);

        $request->user()->videos()->create($request->all());
        return redirect()->route('index')->with('alert','عملایت با موفقیت انجام شد.');
    }

    public function show(Request $request,Video $video){
//        Gate::authorize('update', $video);
        $video->load('comments.user');
        return view('videos.video-show',compact('video'));
    }

    public function edit(Video $video){

        Gate::authorize('update', $video);
        $categories=Category::all();
        return view('videos.edit',compact('video','categories'));
    }

    public function update(UpdateVideoRequest $request,Video $video){
        Gate::authorize('update', $video);
        if($request->hasFile('file')){
            $path =Storage::putFile('videos',$request->file);
            $request->merge([
                'path'=>$path
            ]);
        }


        $video->update($request->all());

        return redirect()->route('videos.show',$video->slug)->with('alert','ویدیو شما با موفقیت اپدیت شد.');
    }




}
