<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
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

    public function store(Request $request)
    {
        $request->validate([
            'name'=>['required'],
            'slug'=>['required','unique:videos,slug'],
            'thumbnail'=>['required','url'],
            'length'=>['required','integer'],
            'url'=>['required','url'],
        ]);
        Video::create($request->all());

        return redirect()->route('index')->with('alert','عملایت با موفقیت انجام شد.');
    }
}
