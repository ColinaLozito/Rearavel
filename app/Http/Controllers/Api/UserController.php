<?php

namespace App\Http\Controllers\Api;

use Validator;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $users = User::orderBy("id", "DESC")->paginate(5);

        return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $email = $request->email;
        $email = User::where('email',$email)->first();

        if ($email) {
            return response()->json(['msj'=>'The user already exist']);
        }
        if ($request->name == '') {
            return response()->json(['msj'=>'The name cant be empty']);
        }
        if ($request->email == '') {
            return response()->json(['msj'=>'The email cant be empty']);
        }
        if ($request->password == '') {
            return response()->json(['msj'=>'The password can be empty']);
        }


        $user = new User;

        $user->dni_type = $request->dni_type;
        $user->dni = $request->dni;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);


        $user->save();

        return response()->json(['msj'=>'user created successfully']);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);

        return response()->json($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {


        $user = User::findOrFail($id);
        $email = $request->email;
        $currentEmail = $user->email;

        if ($currentEmail !== $email) {
            $newEmail = User::where('email',$email)->first();
            if ($newEmail) {
                return response()->json(['msj'=>'The user already exist']);
            }
        }

        if ($request->name == '') {
            return response()->json(['msj'=>'The name cant be empty']);
        }
        if ($request->email == '') {
            return response()->json(['msj'=>'The email cant be empty']);
        }
        if ($request->password == '') {
            return response()->json(['msj'=>'The password can be empty']);
        }



        $user->dni_type = $request->dni_type;
        $user->dni = $request->dni;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);


        $user->update();

        return response()->json(['msj'=>$request->dni_type]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);

        $user->delete();

        return response()->json('User delete successfully');
    }
}
