<?php

namespace App\Listeners;

use App\Events\VideoCreate;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendEmail implements ShouldQueue
{
//    public $queue="high";
    /**
     * Create the event listener.
     */
    public function __construct()
    {

    }

    /**
     * Handle the event.
     */
    public function handle(VideoCreate $event): void
    {
      dump('this method send email');
    }
}
