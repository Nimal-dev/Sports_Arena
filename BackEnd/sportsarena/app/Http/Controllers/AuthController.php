<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Validate the request
        $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:3',
            'name' => 'required|string|max:255'
        ]);
    
        // Insert the user and get the user ID
        $userId = DB::table('users')->insertGetId([
            'email' => $request->email,
            'password' => $request->password, // Storing plain text password
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    
        // Insert the user details
        DB::table('userdetails')->insert([
            'userid' => $userId,
            'name' => $request->name,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    
        return response()->json(['message' => 'User registered successfully'], 201);
    }
    

    // public function login(Request $request)
    // {
    //     $request->validate([
    //         'email' => 'required|email',
    //         'password' => 'required',
    //     ]);

    //     $email = $request->input('email');
    //     $password = $request->input('password');

    //     // Find the user by email
    //     $user = DB::table('users')->where('email', $email)->first();

    //     if ($user && $user->password === $password) { // Direct password comparison
    //         // Get user details
    //         $userDetails = DB::table('userdetails')->where('userid', $user->id)->first();

    //         if ($userDetails) {
    //             // Merge user and userDetails data
    //             $userData = array_merge((array)$user, (array)$userDetails);
    //             return response()->json($userData, 200);
    //         } else {
    //             return response()->json(['message' => 'Invalid credentials'], 401);
    //         }
    //     } else {
    //         return response()->json(['message' => 'Invalid credentials'], 401);
    //     }
    // }

    public function login(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $email = $request->input('email');
    $password = $request->input('password');

    // Find the user by email
    $user = DB::table('users')->where('email', $email)->first();

    if ($user && $user->password === $password) { // Direct password comparison
        // Check user type and fetch respective details
        $userDetails = null;
        
        if ($user->usertype == 1) { // Assuming '1' denotes a turf user
            $userDetails = DB::table('turfdetails')->where('userid', $user->id)->first();
        } elseif ($user->usertype == 4) { // Assuming '2' denotes a tournament user
            $userDetails = DB::table('tournament')->where('userid', $user->id)->first();
        }  elseif ($user->usertype == 2) { // Assuming '2' denotes a tournament user
            $userDetails = DB::table('socialmedia')->where('userid', $user->id)->first();
        } else { // Default case for other users
            $userDetails = DB::table('userdetails')->where('userid', $user->id)->first();
        }

        if ($userDetails) {
            // Merge user and userDetails data
            $userData = array_merge((array)$user, (array)$userDetails);
            return response()->json($userData, 200);
        } else {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    } else {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }
}



    public function turfregister(Request $request)
    {
        DB::beginTransaction();

        try {
            $userId = DB::table('users')->insertGetId([

                'email' => $request->input('email'),
                'password' => $request->input('password'),
                'type' => $request->input('type'),

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

            return response()->json(['message' => 'Turf Owner registered successfully'], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json(['message' => 'Registration failed', 'error' => $e->getMessage()], 500);
        }
    }


    public function addFeedback(Request $request)
{
    // Directly insert the data from the request
    $feedback = [
        'title' => $request->input('title'),
        'description' => $request->input('description'),
        'user_id' => $request->input('user_id'),
        'email' => $request->input('email'),
        'created_at' => now(),
        'updated_at' => now()
    ];

    DB::table('feedback')->insert($feedback);

    return response()->json(['message' => 'Feedback submitted successfully', 'feedback' => $feedback], 201);
}

public function getFeedbacks()
{
    $feedbacks = DB::table('feedback')->get();
    return response()->json($feedbacks);
}

}

