<?php

namespace App\Listeners;

use App\Events\VideoCreate;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Queue;

class ProcessVideo implements ShouldQueue
{
//    public $queue="low";
    /**
     * Create the event listener.
     */
    public function __construct(  )
    {

    }

    /**
     * Handle the event.
     */
    public function handle(VideoCreate $event): void
    {
        dump($event->video);
        dump('this method process video');
    }
}
