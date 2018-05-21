@extends('layouts.app')

@section('content')
	<div class="col-lg-12">

		<div class="file-container">
			<h2>ADD TXT FILE</h2>
			{!! Form::open(['action'=>'FileController@upload', 'method'=>'POST', 'enctype'=>'multipart/form-data']) !!}
				<div class="form-group col-md-12">
					{{ Form::file('text_file', ['class'=>'form-control col-md-4 file-input'] ) }}
					{{Form::submit('Submit File', ['class'=>'btn btn-primary col-md-3'])}}
				</div>
				<br>
				<br>
				{!! $errors->first('text_file', '<span class="help-block">:message</span>') !!}
				<br>
				<br>

			{!! Form::close() !!}
			<a href="{{ route('fileList') }}" class="btn col-md-4 file-records-btn">Watch File Records</a>

			<br>
			<hr>
			<div class="file-p-container">
				<p>In this secction you will be able to load a TXT file</p>
				<p>and the system will identify wich row have</p>
				<p>more capital letters and it will select</p>
				<p>only the capital letters present in that row</p>
				<p>and store them in the Data Base with your User name</p>
			</div>
		</div>

	</div>
@endsection

