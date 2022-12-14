import React from 'react'; 
import '../css/navbar.css'
import logo from '../logo.png';
import hamlogo from '../assets/hamburger menu.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import { Avatar } from './Avatars/Avatar';
// import Avatar from '../components/Avatar'




export default function NavBar(){


    const User=null;
    return (
    
    <nav className='top'>
        <div className='navigation'>
        <div className='logo'>
        <img src={hamlogo} alt='hamlog'></img>
        <Link class="navbar"  to="/">
            <img  id='stacklogo' src={logo} alt="logo" width="20%"/>
        </Link>
       
        </div>
        <ul class="navbar-nav justify-content-between flex-nowrap flex-row">
                    <li class="nav-item">
                        <Link  class='nav-link nav-btn' to='about'>About</Link> 
                    </li>
                    <li class="nav-item">
                        <Link class='nav-link nav-btn' to='products'>Products</Link>         </li>
        
                    <li class="nav-item">
                        <Link class='nav-link nav-btn'  to='Forteams'>For Teams</Link> 
                    </li>
                </ul>

           
                

                <form class="d-flex form" role="search">
                    <input class="form-control me-2" type="text" placeholder="Search.." aria-label="Search" />
                    
                    {User === null ?
                    <button class="btn btn-outline-success login-btn" type="submit"><Link to='Auth' style={{textDecoration:"none" ,color:"green"}}>login</Link></button>:<>
                    
                    <Avatar name='M' backgroundColor="#009dff" px="10px"
                    py="5px" borderRadius="50%" color='white' marginRight="10px" ></Avatar>
                    <button id="btn" class="btn btn-outline-success login-btn" type="submit">logout</button><></>
                    </>}
                    </form>
                    {/* {User === null ?
                    <Link to='/Auth' className="nav-links">Login</Link>:<>
                     <Link to='/' >Avatar</Link>
                    </>} */}
                
            </div>
                    
                    
                    
       
          

    </nav>)
}