<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookMainTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookMain', function (Blueprint $table) {
            $table->id();
            $table->string('isbn', 13);
            $table->string('title', 255);
            $table->string('author', 255);
            $table->text('description')->nullable();
            $table->integer('price');
            $table->string('type', 255);
            $table->date('published');
            $table->string('language', 20)->nullable();
            $table->integer('page');
            $table->integer('total_quantity');
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
        Schema::dropIfExists('bookMain');
    }
}
