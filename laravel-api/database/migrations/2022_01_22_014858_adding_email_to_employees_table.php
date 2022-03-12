<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddingEmailToEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->string('email')->nullable();
        }); 
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasColumn('employees','email'))
        {
            Schema::table('employees', function (Blueprint $table) {
                //
                $table->dropColumn('email');
            });
        }      
        
       /*  Schema::table('employees', function (Blueprint $table) {
            //
            $table->dropColumn('email');
        }); */
    }
}
