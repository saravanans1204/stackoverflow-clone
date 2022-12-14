import React from "react"
import '../../css/home.css'
import pen from '../../assets/pen-solid.svg'
import message from '../../assets/message-solid.svg'
import stackLogo from '../../assets/stack-overflow-line.svg'

export function RightSideBar(){
    
    return(
        <section className="right-side-bar-main">
            <div style={{height:"20px"}}></div>
            <div class='right-container'>
                <div className="div" >
                    <p>The Overflow Blog</p>
                </div>

                <p>
                    <img src={pen} alt="pen" className="pen"></img>
                    Continuous delivery, meetcontinuous security</p>
                <p>
                <img src={pen} alt="pen" className="pen"></img>
                    Taking stock of crypto’s crash</p>
                </div>
            <div class='right-container'>
                <div className="div">
                
                <p>Featured on Meta </p>
                </div>

                <p>
                <img src={message} alt="message" className="message"></img>
                Inbox improvements are live

                    </p>
                <p>
                <img src={message} alt="message" className="message"></img>
                Help us identify new roles for community members</p>
                <p>
                <img src={stackLogo} alt="stackLogo" className="stack-logo"></img>
                Help needed: a call for volunteer reviewers for the Staging Ground beta test</p>
                <p>
                <img src={stackLogo} alt="stackLogo" className="stack-logo"></img>
                2022 Community Moderator Election Results</p>
                </div>
                
            <div class='right-container'>
            <div className="div" >
                <p>Hot Meta Posts</p>
                </div>

                <p><span style={{marginRight:"10px"}}>38</span>Continuous delivery, meet continuous security</p>
                <p><span style={{marginRight:"10px"}}>20</span>Taking stock of crypto’s crash</p>
                </div>

            <div class="right-bottom">
                <div 
                style=
                {{height:'45px',background:'white',boxShadow: ' 0 0 1px'}}>
                    <p
                     style=
                     {{fontSize:'16px'}}>Watched tags</p>
                </div>
                <div className="tag-div">
                <span className="tags">react.js</span>
                <span className="tags">node</span>
                <span className="tags">python</span>
                <span className="tags">javascript</span>
                <span className="tags">css</span>
                <span className="tags">java</span>
                </div>
                </div> 

        </section>
    )
}