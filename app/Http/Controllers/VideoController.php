<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\storeVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{

    public function index()
    {
        $videos=Video::all();
        return $videos;
    }
    public function create()
    {
        return view('videos.create');
    }

    public function store(storeVideoRequest $request)
    {

        Video::create($request->all());

        return redirect()->route('index')->with('alert','عملایت با موفقیت انجام شد.');
    }

    public function show(Request $request,Video $video){

        return view('videos.video-show',compact('video'));
    }

    public function edit(Video $video){
        return view('videos.edit',compact('video'));
    }

    public function update(UpdateVideoRequest $request,Video $video){

        $video->update($request->all());

        return redirect()->route('videos.show',$video->slug)->with('alert','ویدیو شما با موفقیت اپدیت شد.');
    }
}
