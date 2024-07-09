<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class PostController extends Controller
{

    // public function register(Request $request)
    // {
    //     // Validate the request data
    //     $validatedData = $request->validate([
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|string|email|max:255|unique:users',
    //         'password' => 'required|string|min:8|confirmed',
    //         'dob' => 'required|date',
    //         'image' => 'required|string'
    //     ]);

    //     // Begin a transaction
    //     DB::beginTransaction();

    //     try {
    //         // Insert into the users table
    //         $userId = DB::table('users')->insertGetId([
    //             'name' => $validatedData['name'],
    //             'email' => $validatedData['email'],
    //             'password' => bcrypt($validatedData['password']),
    //             'created_at' => now(),
    //             'updated_at' => now(),
    //         ]);

    //         // Insert into the userdetails table using the userId from users table
    //         DB::table('userdetails')->insert([
    //             'name' => $validatedData['name'],
    //             'dob' => $validatedData['dob'],
    //             'image' => $validatedData['image'],
    //             'userid' => $userId,
    //             'created_at' => now(),
    //             'updated_at' => now(),
    //         ]);

    //         // Commit the transaction
    //         DB::commit();

    //         return response()->json(['message' => 'User registered successfully'], 201);
    //     } catch (\Exception $e) {
    //         // Rollback the transaction in case of error
    //         DB::rollBack();

    //         return response()->json(['message' => 'Registration failed', 'error' => $e->getMessage()], 500);
    //     }
    // }


    public function register(Request $request)
    {

        try {
            // Insert into the users table
            $userId = DB::table('users')->insertGetId([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => $request->input('password'),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Insert into the userdetails table using the userId from users table
            DB::table('userdetails')->insert([
                'name' => $request->input('name'),
                'dob' => $request->input('dob'),
                'image' => $request->input('image'),
                'userid' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Commit the transaction
            DB::commit();

            return response()->json(['message' => 'User registered successfully'], 201);
        } catch (\Exception $e) {
            // Rollback the transaction in case of error
            DB::rollBack();

            return response()->json(['message' => 'Registration failed', 'error' => $e->getMessage()], 500);
        }
    }
    
    public function Post(Request $request)
    {
       DB::table('post')->insert($request->all());
       echo json_encode('success');
    }

    public function fileUpload(Request $request){
        $image =  $request->file('image');      
        $imagename = time().'_'.$image->getClientOriginalName();
        $image->move('public/image',$imagename);
        echo json_encode($imagename);
    }

    public function viewpost(){
        $data = DB::table('post')
            ->join('userdetails', 'post.user_id', '=', 'userdetails.userid')
            ->select(
                'post.id as post_id',
                'post.description as post_description',
                'post.image as post_image',
                'post.user_id',
                'userdetails.name',
                'userdetails.dob',
                'userdetails.image as user_image',
                'userdetails.userid'
            )
            ->get();
        echo json_encode($data);
    }



    


    public function deletepost(Request $request) {
        $id = $request->input('id'); // Make sure this matches 'id' from the frontend
        DB::table('post')->where('id', $id)->delete();
        return response()->json(['success' => true, 'message' => 'Post deleted successfully']);
    }
    
    

    


    public function login(Request $request)
{
    $data = DB::table('users')
        ->join('userdetails', 'users.id', '=', 'userdetails.userid')
        ->where($request->only(['email', 'password'])) 
        ->first();

    if ($data != null) {
        return response()->json(['status' => 200, 'data' => $data]);
    } else {
        return response()->json(['status' => 401]);
    }
}



    public function comment(Request $request ){
        DB::table('comment')->insert($request->all());
        echo json_encode("comment added ");
    }


    public function viewComment(Request $request){
        $postid = $request->postid;
        $comment = DB::table('comment')
            ->where('postid', $postid)
            ->join('userdetails', 'comment.userid', '=', 'userdetails.userid')
            ->get();
        return response()->json($comment);
    }



    // public function like(Request $request)
    // {
    //     $request->validate([
    //         'post_id' => 'required|exists:posts,id',
    //         'user_id' => 'required|exists:users,id',
    //     ]);
    
    //     $like = DB::table('likes')
    //               ->where('post_id', $request->post_id)
    //               ->where('user_id', $request->user_id)
    //               ->first();
    
    //     if ($like) {
    //         DB::table('likes')
    //           ->where('post_id', $request->post_id)
    //           ->where('user_id', $request->user_id)
    //           ->delete();
    //         $post = $this->getPostWithDetails($request->post_id);
    //         return response()->json(['message' => 'unliked', 'post' => $post], 200);
    //     } else {
    //         DB::table('likes')->insert([
    //             'post_id' => $request->post_id,
    //             'user_id' => $request->user_id,
    //             'created_at' => now(),
    //             'updated_at' => now(),
    //         ]);
    //         $post = $this->getPostWithDetails($request->post_id);
    //         return response()->json(['message' => 'liked', 'post' => $post], 200);
    //     }
    // }


    public function like(Request $request){
        $data=DB::table('likes')->insert([
                        'post_id' => $request->post_id,
                        'user_id' => $request->user_id,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                    echo json_encode("success");
    }    
    public function dislike(Request $request) {
        $request->validate([
            'user_id' => 'required|integer',
            'post_id' => 'required|integer',
        ]);
    
        $userid = $request->user_id;
        $postid = $request->post_id;
    
        $deleted = DB::table('likes')
            ->where('user_id', $userid)
            ->where('post_id', $postid)
            ->delete();
    
        if ($deleted) {
            return response()->json(['message' => 'Like removed successfully.']);
        } else {
            return response()->json(['message' => 'No like record found.'], 404);
        }
    }
      
}
