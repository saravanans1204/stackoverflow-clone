import React from "react"
import { LeftSideBar } from "../components/Sidebars/leftsidebar"
import { RightSideBar } from "../components/Sidebars/rightsidebar"
import "../css/home.css"
import { AnswerPAge } from "./Questions/answerpage"
export function Answer(){
    

    return(
        <div className="main-top">
        <div className="top-two">
       
        <LeftSideBar/>
        <AnswerPAge/>
        <RightSideBar/>
        
        </div>
        </div>
        
        )
}