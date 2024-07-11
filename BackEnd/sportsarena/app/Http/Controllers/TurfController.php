<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TurfController extends Controller
{
    public function register(Request $request)
    {
        DB::beginTransaction();

        try {
            $userId = DB::table('users')->insertGetId([

                'email' => $request->input('email'),
                'password' => $request->input('password'),
                'usertype' => $request->input('usertype'),

                'created_at' => now(),
                'updated_at' => now(),
            ]);

            DB::table('turfdetails')->insert([
                'userid' => $userId,
                'name' => $request->input('name'),
                'address' => $request->input('address'),
                'contact' => $request->input('contact'),
                'certificate' => $request->input('certificate'),
                'image' => $request->input('image'),
                'amount' => $request->input('amount'),
                'startingtime' => $request->input('startingtime'),
                'endingtime' => $request->input('endingtime'),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            DB::commit();

            return response()->json(['message' => 'User registered successfully'], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json(['message' => 'Registration failed', 'error' => $e->getMessage()], 500);
        }
    }

    // public function fileUpload(Request $request)
    // {
    //     if ($request->hasFile('file')) {
    //         $file = $request->file('file');
    //         $filename = time() . '_' . $file->getClientOriginalName();
    //         $file->move(public_path('images'), $filename);
    //         return response()->json(['filepath' => 'images/' . $filename]);
    //     }
    //     return response()->json(['message' => 'No file uploaded'], 400);
    // }

    public function fileUpload(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('images'), $filename);
            return response()->json(['filepath' => 'images/' . $filename]);
        }
        return response()->json(['message' => 'No file uploaded'], 400);
    }

    // public function login(Request $request)
    // {
       
    //     $email = $request->input('email');
    //     $password = $request->input('password');
        
    //     $user = DB::table('users')
    //     ->where('email', $email)
    //     ->where('password',$password)
    //     // ->join('turfdetails','user.id','=','turfdetails.userid')
    //     ->first();

    //     if ($user && $user->type==0) {
    //         $turfdetails = DB::table('turfdetails')->where('userid', $user->id)->first();

    //         if ($turfdetails) {
    //             $turfData = array_merge((array)$user, (array)$turfdetails);
    //             return response()->json($turfData);
    //         } else {
    //             return response()->json('invalid');
    //         }
    //     }
    //     elseif($user && $user->type==1){
    //         $turfdetails = DB::table('tournament')->where('userid', $user->id)->first();

    //         if ($turfdetails) {
    //             $turfData = array_merge((array)$user, (array)$turfdetails);
    //             return response()->json($turfData);
    //         } else {
    //             return response()->json('invalid');
    //         }
    //     }
        
    //     else {
    //         return response()->json('invalid');
    //     }
    // }





    
    public function updateprofile(Request $request)
    {
        // Begin transaction to ensure atomicity
        DB::beginTransaction();
    
        try {
            // Get the user ID from the request
            $userId = $request->id;
            // Update user details in 'users' table
            DB::table('users')
                ->where('id', $userId)
                ->update([
                    'email' => $request->input('email'),
                    'updated_at' => now(),
                ]);
    
            // Update user details in 'turfdetails' table
            DB::table('turfdetails')
                ->where('userid', $userId)
                ->update([
                    'name' => $request->input('name'),
                    'address' => $request->input('address'),
                    'contact' => $request->input('contact'),
                    'certificate' => $request->input('certificate'),
                    'image' => $request->input('image'),
                    'amount' => $request->input('amount'),
                    'startingtime' => $request->input('startingtime'),
                    'endingtime' => $request->input('endingtime'),
                    'updated_at' => now(),
                ]);
    
            // Commit transaction if all queries succeed
            DB::commit();
    
            return response()->json(['success' => true, 'message' => 'Profile updated successfully']);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Rollback transaction on validation error
            DB::rollBack();
    
            // Log the validation error
            // Log::error('Validation error: '.$e->getMessage());
    
            return response()->json(['success' => false, 'message' => 'Validation error', 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            // Rollback transaction on general error
            DB::rollBack();
    
            // Log the error
            // Log::error('Profile update failed: '.$e->getMessage());
    
            return response()->json(['success' => false, 'message' => 'Profile update failed', 'error' => $e->getMessage()], 500);
        }
    }
    
    
    
//     public function updateprofile(Request $request)
// {
//     $id=$request->id;
// DB::table('users')->where('id', $id)->update(
//     [
//         'email'=>$request->email,
//     ]
// );
// $data = [
//     'companyname'=>$request-> companyname,
//     'companyaddress'=>$request->companyaddress,
//     'phone'=>$request->phone];

// DB::table('turfdetails')->where('id',$id)->update($data);
//     return json_encode('updated');

// }


}
