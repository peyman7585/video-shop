<?php
namespace App\Services;

use App\Models\User;
use App\Models\Video;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\File\File;

class VideoService
{
    public function create(User $user ,array $data)
    {
        $data= $this->putFile($data);
        return $user->videos()->create($data);
    }

    public function update (Video $video ,array $data)
    {
        if(isset($data['file']) && $data['file'] instanceof File)
        {
            $data= $this->putFile($data);
        }
       return $video->update($data);
    }

    private function putFile(array $data)
    {
        $path =Storage::putFile('videos',$data['file']);
        $data['path']=$path;
        return $data;
    }
}
