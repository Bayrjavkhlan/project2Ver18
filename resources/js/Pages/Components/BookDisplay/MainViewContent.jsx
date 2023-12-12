import React from "react";
import BookDisplay from "./BookDisplay";
export default function MainViewContent(){
    return(
        <div class='container'>
            <div class='row  container d-flex gap-5'>
                <div class='col'> <BookDisplay></BookDisplay> </div>
                <div class='col'> <BookDisplay></BookDisplay> </div>
                <div class='col'> <BookDisplay></BookDisplay> </div>
            </div>
            <br />
            <div class='row  container d-flex gap-5'>
                <div class='col'> <BookDisplay></BookDisplay> </div>
                <div class='col'> <BookDisplay></BookDisplay> </div>
                <div class='col'> <BookDisplay></BookDisplay> </div>
            </div>
            <br />
            <div class='row  container d-flex gap-5'>
                <div class='col'> <BookDisplay></BookDisplay> </div>
                <div class='col'> <BookDisplay></BookDisplay> </div>
                <div class='col'> <BookDisplay></BookDisplay> </div>
            </div>
        </div>
    );
}