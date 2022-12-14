import React from "react"
import { LeftSideBar } from "../components/Sidebars/leftsidebar"
import { RightSideBar } from "../components/Sidebars/rightsidebar"
import "../css/home.css"
import { HomeMainBar } from "../components/homemainbar"
export function Home(){
    

    return(
        <div className="main-top">
        <div className="top-two">
       
        <LeftSideBar/>
        <HomeMainBar/>
        <RightSideBar/>
    
        </div>
        </div>
        
        )
}