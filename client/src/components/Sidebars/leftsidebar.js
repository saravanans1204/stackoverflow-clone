import React from "react"
import '../../css/home.css'
import world from '../../assets/world.svg'
import { NavLink} from "react-router-dom"

export function LeftSideBar(){

    return(
        
        <section className="side-bar-main">
            <div style={{marginTop:"20px"}}>
            <NavLink to="/" activeClassName="active" style={{textDecoration:"none",color:"inherit",display:"block",fontWeight:"500"}}>
                <p className="hover">Home</p></NavLink>
            <NavLink to="/Public" activeClassName="active" style={{textDecoration:"none",color:"inherit",display:"block"}}>
            <p className="hover">PUBLIC</p></NavLink>

            <NavLink to="/Questions" activeClassName="active" style={{textDecoration:"none",color:"inherit",display:"block"}}>
            <p className="hover"><span style={{marginRight:"10px"}}><img style={{width:"19px"}} src={world} alt='world'></img></span>Questions</p>
            </NavLink>

            <NavLink to="/Tags" activeClassName="active" style={{textDecoration:"none",color:"inherit",display:"block"}}>
            <p className="hover" style={{marginLeft:"40px"}}>Tags</p></NavLink>

            <NavLink to="/User" activeClassName="active" style={{textDecoration:"none",color:"inherit",display:"block"}}>
            <p className="hover" style={{marginLeft:"40px"}}>User</p></NavLink>
            </div>

        </section>
    
        )
}



