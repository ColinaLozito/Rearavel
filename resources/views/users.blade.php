@extends('layouts.app')

@section('content')


    <div class="col-lg-12">

		<div>
			<h2>ADD TXT FILE</h2>
			{!! Form::open(['action'=>'FileController@upload', 'method'=>'POST', 'enctype'=>'multipart/form-data']) !!}
				<div class="form-group col-md-4">
					{{ Form::file('text_file', ['class'=>'form-control'] ) }}
				</div>
				{!! $errors->first('text_file', '<span class="help-block">:message</span>') !!}
				{{Form::submit('Submit', ['class'=>'btn btn-primary col-md-4'])}}
			{!! Form::close() !!}
		</div>

		</div>

    <hr>

    <div id="app" class="col-lg-12"></div>


@endsection