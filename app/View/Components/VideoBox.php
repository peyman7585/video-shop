<?php

namespace App\View\Components;

use Closure;
use Illuminate\View\Component;
use Illuminate\Contracts\View\View;

class VideoBox extends Component
{
    public $video;
    /**
     * Create a new component instance.
     */
    public function __construct($video)
    {
        $this->video=$video;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.video-box');
    }
}
