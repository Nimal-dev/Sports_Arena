<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
            'password' => Hash::make($request->password),
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
}
