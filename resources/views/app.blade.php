@extends('layouts.app')

@section('content')
	<div class="app-content">
		
	    <div class="col-md-12">
	    	<div class="col-md-12 link-container">
	    		
	    		<a class="btn btn-primary" href="{{ url('/users') }}">Users List</a>
	    	</div>
			<div class="col-md-12 link-container">
	    		<a class="btn btn-primary" href="{{ url('/todo') }}">To buy listing app</a>

			</div>
			<div class="col-md-12 link-container">
	    		<a class="btn btn-primary" href="{{ url('/file') }}">File catcher app</a>

			</div>
	    </div>

	</div>
@endsection