<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Video;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class VideoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model=Video::class;
    public function definition(): array
    {
        // also we can change config file for set persian \\ you should find faker in config file
        $persianFaker= \Faker\Factory::create('fa_IR');
        return [
           'name'=>$persianFaker->name(),
            'path'=>$this->faker->imageUrl(640, 480, 'animals', true),
            'length'=>$this->faker->unixTime(),
            'slug'=>$this->faker->slug(),
            'description'=>$persianFaker->text(),
            'thumbnail'=>'https://loremflickr.com/446/240/world?random='.rand(1,999),
            'category_id'=>Category::first() ?? Category::factory()
        ];
    }
}
