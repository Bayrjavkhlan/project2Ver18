import React from "react";
import UserComp from "./UserComp";
import TestComp from "./TestComp";
import NavBar from "../Components/NavBar/NavBar";
import MainViewContent from "../Components/BookDisplay/MainViewContent";

export default function MainUserView(){
    return(
        <div>
            <NavBar></NavBar>
            <br />
            <MainViewContent></MainViewContent>
        </div>
    );
}