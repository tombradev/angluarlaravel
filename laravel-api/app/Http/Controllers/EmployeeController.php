<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//import the necesaary models
use App\Models\Employee;

class EmployeeController extends Controller
{
    //
    public function getEmployee() {
        return response()->json(Employee::all(),200);

    }

    public function getEmployeeById($id){
        $employee = Employee::find($id);
    }
}
