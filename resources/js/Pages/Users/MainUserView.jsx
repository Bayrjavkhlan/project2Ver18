import React from "react";
import UserComp from "./UserComp";
import TestComp from "./TestComp";

export default function MainUserView(){
    return(
        <div>
            <UserComp></UserComp>
            <TestComp></TestComp>
        </div>
    );
}