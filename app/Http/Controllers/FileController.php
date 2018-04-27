<?php

namespace App\Http\Controllers;

use App\Uppercase;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class FileController extends Controller
{
    public function index(){

    	
    
    }

    public function upload(Request $request){

        // file upload
        if ($request->hasFile('text_file')) {
            

            $file = $request->file('text_file');

            $fileExtension = $file->getClientOriginalExtension();

            if ($fileExtension !== 'txt') {
                return back()->withErrors(['text_file'=>'wrong file']);
            }

            $contents = File::get($file);

            $lines = preg_split('/\n|\r\n?/', $contents);

            $upperCases = [];

            foreach ($lines as $key => $line) {
                preg_match_all("/[A-Z]/", $line, $caps_match); 

                $caps = $caps_match [0];

                $upperCases[] = $caps;

            }

            $upperCase = new Uppercase();
            $upperCase->user_id = \Auth::user()->id;
            $upperCase->uppercase_str = implode(max($upperCases));
            $upperCase->save();




            return back()->withErrors(['text_file'=>'File operation doned!!']);
        }else {
            return back()->withErrors(['text_file'=>'Text file error']);
        }

    }

    public function list(){

    	return view("recordList");
    
    }

    public function getRecords() {

        $response = Uppercase::get()->all();


        $newRecords = [];

        foreach ($response as $key => $record) {
            $key = [
                'id'=> $record->id,
                'user_id'=> $record->user_id,
                'user_email'=> User::where('id',$record->user_id)->first()->email,
                'uppercase_str'=> $record->uppercase_str,
                'created_at'=>$record->created_at
            ];

            $newRecords[] = $key;
        }


        return response()->json($newRecords);

    }

}
