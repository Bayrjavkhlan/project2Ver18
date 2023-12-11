import React from "react";
import UserComp from "./UserComp";
import TestComp from "./TestComp";
import NavBar from "./NavBar";

export default function MainUserView(){
    return(
        <div>
            <NavBar></NavBar>
            <br />
            <UserComp></UserComp>
            <br />
            <TestComp></TestComp>
        </div>
    );
}