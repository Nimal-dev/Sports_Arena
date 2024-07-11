<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Razorpay\Api\Api;
use Illuminate\Support\Facades\DB;

class tournamentController extends Controller
{

    private $razorpayId = 'rzp_test_4Ex6Tyjkp79GFy';
    private $razorpayKey = 'lVGcQB0HSAttEhr7mq4AbM7Z';
  

    public function tournamentregister(Request $request)
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

            DB::table('tournament')->insert([
                'userid' => $userId,
                'name' => $request->input('name'),
                'address' => $request->input('address'),
                'contact' => $request->input('contact'),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            DB::commit();

            return response()->json(['message' => 'Host registered successfully'], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json(['message' => 'Registration failed', 'error' => $e->getMessage()], 500);
        }
    }


    // public function turfview()
    // {
    //     $turfs = DB::table('turfdetails')->get();
        
    //     return response()->json($turfs);
    // }

    public function turfview()
{
    $turfs = DB::table('turfdetails')
        ->join('users', 'turfdetails.userid', '=', 'users.id')
        ->get();

    return response()->json($turfs);
}


public function UserView()
{
    $turfs = DB::table('userdetails')
        ->join('users', 'userdetails.userid', '=', 'users.id')
        ->get();

    return response()->json($turfs);
}


public function createOrder(Request $request)
{
    $api = new Api($this->razorpayId, $this->razorpayKey);
    $order = $api->order->create([
        'receipt' => uniqid(),
        'amount' => $request->amount,
        'currency' => 'INR',
    ]);

    return response()->json(['success' => true, 'data' => $order]);
}

    public function verifyPayment(Request $request)
    {
        $api = new Api($this->razorpayId, $this->razorpayKey);

        try {
            $attributes = [
                'razorpay_order_id' => $request->razorpay_order_id,
                'razorpay_payment_id' => $request->razorpay_payment_id,
                'razorpay_signature' => $request->razorpay_signature
            ];
            $api->utility->verifyPaymentSignature($attributes);
            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()]);
        }
    }

//     public function addTournament(Request $request)
// {
   
//     DB::table('tournamentdetails')->insert([
//         'tournamentname' => $request->tournamentname,
//         'image' => $request->image,
//         'datetime' => $request->date,
//         'price' => $request->price,
//         'turf_id' => $request->turf_id,
//         'tournamentid'=> $request->tournamentid,
//         'created_at' => now(),
//         'updated_at' => now(),
//     ]);

//     return response()->json(['success' => true]);
// }

public function addTournament(Request $request)
{
    $existingTournament = DB::table('tournamentdetails')
        ->where('turf_id', $request->turf_id)
        ->whereDate('datetime', $request->date)
        ->first();

    if ($existingTournament) {
        return response()->json(['success' => false, 'message' => 'Turf is unavailable on this date.']);
    }

    DB::table('tournamentdetails')->insert([
        'tournamentname' => $request->tournamentname,
        'image' => $request->image,
        'datetime' => $request->date,
        'price' => $request->price,
        'turf_id' => $request->turf_id,
        'tournamentid'=> $request->tournamentid,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    return response()->json(['success' => true]);
}

// ------------------------Dashboard Tournament View List--------------------------//   
public function tournamentView(Request $request) {
    $userId = $request->input('tournamentid');

    $tournaments = DB::table('tournamentdetails')
        ->select('tournamentdetails.*', 'turfdetails.name')
        ->join('turfdetails', 'tournamentdetails.turf_id', '=', 'turfdetails.id')
        ->where('tournamentdetails.tournamentid', $userId) // Assuming tournamentid is the field to filter by
        ->get();

    return response()->json($tournaments);
}








// public function tournamentView(Request $request) {
//     $userId = $request->input('tournamentid');

//     $tournaments = DB::table('tournamentdetails')
//         ->join('turfdetailsails', 'tournamentdetails.turf_id', '=', 'turfdetailsails.id')
//         ->select('tournamentdetails.*', 'turfdetailsails.name')
//         ->where('turfdetailsails.id', $userId)  // Filter by authenticated user's ID
//         ->get();

//     return response()->json($tournaments);
// }
public function deleteTournament($id) {
    DB::table('tournamentdetails')->where('id', $id)->delete();
    return response()->json(['success' => true]);
}

public function getTournament($id) {
    $tournament = DB::table('tournamentdetails')->where('id', $id)->first();
    return response()->json($tournament);
}





public function getAllTournaments() {
    $tournaments = DB::table('tournamentdetails')
        ->join('turfdetails', 'tournamentdetails.turf_id', '=', 'turfdetails.id')
       
        ->get();
    return response()->json($tournaments);
}


public function updateTournament(Request $request, $id) {
    DB::table('tournamentdetails')->where('id', $id)->update([
        'tournamentname' => $request->tournamentname,
        'image' => $request->image,
        'datetime' => $request->date,
        'price' => $request->price,
        'turf_id' => $request->turf_id,
        'updated_at' => now(),
    ]);

    return response()->json(['success' => true]);
}

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


}
