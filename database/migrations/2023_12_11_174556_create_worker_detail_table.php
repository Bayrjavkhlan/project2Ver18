<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkerDetailTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('worker_detail', function (Blueprint $table) {
            $table->unsignedBigInteger('workerid')->primary();
            $table->foreign('workerid')->references('id')->on('worker');
            $table->string('firstname', 30);
            $table->string('lastname', 30);
            $table->string('address', 255);
            $table->string('phoneNumber', 15);
            $table->enum('role', ['manager', 'worker']);
            $table->timestamps(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('worker_detail');
    }
}
