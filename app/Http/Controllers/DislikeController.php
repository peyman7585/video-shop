<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DislikeController extends Controller
{
    public function store(Request $request ,string $likeable_type,string $likeable_id )
    {
        $model_name='App\\Models\\'.ucfirst($likeable_type);
        $routeKey=(new $model_name)->getRouteKeyName();

        $likeable =$model_name::where($routeKey,$likeable_id)->firstOrFail();

        $likeable->dislikeby(auth()->user());

        return back();
    }
}
