<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Video;
use Illuminate\Http\Request;

class IndexController extends Controller
{

    public function index(){
//        $videos=Video::latest()->take(6)->get();
        $mostPopularVideos=Video::with('user')->get()->random(6);
        $mostViewedVideos=Video::with('user')->get()->random(6);
        return view('index',compact('mostPopularVideos','mostViewedVideos'));

    }
}
