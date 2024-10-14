<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\storeVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use App\Http\Resources\VideoResource;
use App\Models\User;
use App\Models\Video;
use App\Services\VideoService;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function show(Video $video)
    {
       return new VideoResource($video);
    }

    public function index(Request $request){
        $videos=Video::filter($request->all())->paginate();
        return VideoResource::collection($videos);
    }

    public function store (storeVideoRequest $request )
    {
        (new VideoService)->create(User::first(),$request->all());

        return response()->json([
            'message'=>'your video created'
        ],201);
    }

    public function update (UpdateVideoRequest $request , Video $video)
    {
        (new VideoService)->update($video,$request->all());

        return response()->json([
            'message'=>'your video updated'
        ],200);
    }

    public function destroy(Video $video)
    {
        $video->delete();
        return response()->json([
            'message'=>'video deleted'
        ],200);
    }
}
