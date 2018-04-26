@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1 class="panel-title">acceso a la palicion</h1>
                    
                </div>
                <div class="panel-body">
                    <form method="POST" action="{{ route('login') }}">
                        {{csrf_field()}}
                        <div class="form-group {{ $errors->has('email') ? 'has-error' : '' }}">
                            <label for="email" ></label>
                            <input class="form-control"
                                    type="email" 
                                   name="email"
                                   placeholder="Email">
                            
                        </div>

                        {!! $errors->first('email', '<span class="help-block">:message</span>') !!}

                        <div class="form-group {{ $errors->has('password ') ? 'has-error' : '' }}">
                            <label for="password"></label>
                            <input class="form-control" type="password" name="password" name="password" placeholder="password">
                        </div>

                        {!! $errors->first('password', '<span class="help-block">:message</span>') !!}

                        <button class="btn btn-primary btn-block">Login</button>
                    </form>
                    
                </div>

                
            </div>
            
        </div>
        
    </div>
</div>
@endsection
