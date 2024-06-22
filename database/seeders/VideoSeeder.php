<?php

namespace Database\Seeders;

use App\Models\Video;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // you should use this command line for run *php artisan db:seed VideoSeeder* or you can call this class in databaseSeeder//
        Video::factory()->count(15)->create();
    }
}
