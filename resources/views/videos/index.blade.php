@extends('layouts')
@section('content')
    <form action="#" method="get" class="mt-5">
        <div class="row">
            <div class="form-group col-md-3">
                <label for="inputCity">ترتیب بر اساس</label>
                <select name="sortBy" class="form-control" id="inputCity">
                    <option {{ request()->query('sortBy') == 'created_at' ? 'selected' : ''}} value="created_at">جدیدترین</option>
                    <option {{ request()->query('sortBy') == 'like' ? 'selected' : ''}} value="like">محبوب ترین</option>
                    <option {{ request()->query('sortBy') == 'length' ? 'selected' : ''}} value="length">مدت زمان ویدیو</option>
                </select>
            </div>
            <div class="form-group col-md-3">
                <label for="inputState">مدت زمان</label>
                <select name="length" class="form-control" id="inputState">
                    <option {{request()->query('length') == null ? 'selected' : ''}} value="0">همه</option>
                    <option {{request()->query('length') == 1 ? 'selected' : ''}} value="1">کمتر از یک دقیقه</option>
                    <option {{request()->query('length') == 2 ? 'selected' : ''}} value="2">بین یک تا پنج دقیقه</option>
                    <option {{request()->query('length') == 3 ? 'selected' : ''}} value="3">بیشتر از پنج دقیقه</option>
                </select>
            </div>
            <div class="form-group col-md-3" style="margin-top: 29px">
                <button type="submit" class="btn btn-primary">فیلتر</button>
            </div>
        </div>
    </form>

    <h1 class="new-video-title"><i class="fa fa-bolt"></i>{{$title}}</h1>
    <div class="row">

        <!-- video-item -->
        @foreach($videos as $video)
            <x-video-box :video="$video"></x-video-box>
        @endforeach
    </div>
    <div class="text-center" dir="ltr">
        {{ $videos->links() }}
    </div>
@endsection
