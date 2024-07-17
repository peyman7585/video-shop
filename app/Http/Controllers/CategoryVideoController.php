<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Video;
use Illuminate\Http\Request;

class CategoryVideoController extends Controller
{
    public function index(Category $category)
    {
        $videos=$category->videos()->paginate(12);
        $title=$category->name;
            return view('videos.index',compact('videos','title'));
    }
}
