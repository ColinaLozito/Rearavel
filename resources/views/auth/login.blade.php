@extends('layouts.app')

@section('content')

    <div id="login" class="col-lg-12" data-id={!! csrf_token() !!}></div>

    <div class="{{ $errors->has('email') ? 'has-error' : '' }}">
        {!! $errors->first('email', '<span class="help-block">:message</span>') !!}
    </div>
@endsection
