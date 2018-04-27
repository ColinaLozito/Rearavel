@extends('layouts.app')

@section('content')


    <div class="col-lg-12">

		<div>
			<h2>ADD TXT FILE</h2>
			{!! Form::open(['action'=>'FileController@upload', 'method'=>'POST', 'enctype'=>'multipart/form-data']) !!}
				<div class="form-group col-md-12">
					{{ Form::file('text_file', ['class'=>'form-control col-md-4'] ) }}
					{{Form::submit('Submit File', ['class'=>'btn btn-primary col-md-3'])}}
				</div>
				<br>
				<br>
				{!! $errors->first('text_file', '<span class="help-block">:message</span>') !!}
				<br>
				<br>

				<a href="{{ route('fileList') }}" class="btn btn-primary col-md-4">Watch File Records</a>
			{!! Form::close() !!}
		</div>

		</div>

    <hr>

    <div id="app" class="col-lg-12"></div>


@endsection