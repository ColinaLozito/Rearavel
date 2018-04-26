@extends('layouts.app')

@section('content')


    <div class="col-lg-12">

		<div>
			<h2>ADD TXT FILE</h2>
			<form class="form-horizontal" method="GET" action="{{ route('fileUpload') }}">

				<div class="form-group">
					<label class="control-label col-sm-2" htmlFor="name">Txt File:</label>
						<div class="col-sm-10">
							<input type="file" class="form-control" id="file" name="file"/>
						</div>
					</div>
				<button class="btn " type="submit">Upload</button>
			</form>
		</div>

		</div>

    <hr>

    <div id="app" class="col-lg-12"></div>


@endsection