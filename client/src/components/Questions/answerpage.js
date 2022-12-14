import React from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import '../../css/answer.css'
import upvote from '../../assets/sort-up-solid.svg'
import downvote from '../../assets/sort-down-solid.svg'
import { UserAvatar } from "../Avatars/useravatar"
import { Ask } from "../../pages/Askquestions"

export function AnswerPAge(){

    const {id}=useParams()
    const questionsList = [{
        _id: '1',
        upVotes:3,
        downVotes:2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be the repeatable code to run",
        questionTags: ["java", "node", "mongoDb"],
        userPosted: "mano",
        userId:1,
        askedOn: "jan 1",
        answer:[{
            answerBody:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
            
            userAnswered:"Kumar",
            answeredOn:"jan 2",
            userId:2,
        },{
            answerBody:'Answer',
            userAnswered:"Sathish",
            answeredOn:"jan 2",
            userId:2,
        }]
        },{

        _id: "2",
        upVotes:3,
        downVotes:2,
     
        noOfAnswers: 0,
        questionTitle: "What is a Arrow function?",
        questionBody: "is Arrow function only available in js",
        questionTags: ["javascript", "Ruby","python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId:1, 
        answer:[{
            answerBody:'This is the answer body',
            userAnswered:"john",
            answeredOn:"jan 2",
            userId:2,
        }]
        },{
        _id: "3",
        upVotes:3,
        downVotes:2,
        
        noOfAnswers: 0,
        questionTitle: "What is a Function declaration?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "Typescript", "python"],
        userPosted: "mano",
        userId:1,
        askedOn: "jan 1" ,
        answer:[{
            answerBody:'Answer',
            userAnswered:"Sathish",
            answeredOn:"jan 2",
            userId:2,
        }]
    }]
   

  
    

    return(
        <div className="center-portion" style={{backgroundColor:""}}>
            {questionsList.filter((question)=>question._id===id).map((ele)=>(
               <div key={ele._id} className="answer-section">
            

                    <div className="heading">
                         <h1>{ele.questionTitle}</h1>
                    </div>


                    <div className="first-div" style={{marginTop:'40px'}}>
                        <div>

                            <img src={upvote}  alt="down"  className="act-btn"></img>
                            <h1>{ele.upVotes-ele.downVotes}</h1>
                            <img src={downvote}  alt="down" className="act-btn"></img>

                        </div >


                          <div style={{display:'flex',gap:"10px",flexDirection:'column'}}>

                          <p style={{marginBottom:'0px' ,marginTop:'10px'}}>{ele.questionBody}</p>
                    
                          <div className="r-tags">{ele.questionTags.map((tags)=>(
                            <div className="sepearte" style={{fontSize:"90%"}}>
                           <p>{tags}</p>
                        </div>
                        ))
                        }</div>
                        <span className="life">
                            <p>Share</p> 
                            <p>Delete</p>
                        </span>

                        </div>

                        <div className="asked-detail" >
                        
                                <p style={{marginBottom:"0px",fontSize:'13px'}}>{`asked on ${ele.askedOn}` }</p>
                            <span style={{display:"flex",gap:"10px"}}>
                        
                            <UserAvatar 
                            name={ele.userPosted.slice(0,1)}  
                            px="10px"
                            py="5px" 
                            borderRadius="20%" 
                            fontSize="14px"  
                            width={"25px"}
                            height="25px"
                            color="black"
                            fontWeight="700"
                            customUrl={`/User/${ele.userId}`} >
                            </UserAvatar>

                        
                            <p 
                                style={{fontSize:'14px',fontWeight:'500',color:'#3797cf'}}>
                            {ele.userPosted}
                            </p>
                            </span>
                
                    </div>

                    
                    </div>
                    <div className="answer-comments" >
                        {ele.answer!==0 ? 
                            <div key={ele._id}>
                                <h1>{`${ele.answer.length} Answers`}</h1>
                                
                            </div>:
                            ""
                        }
                        

                        <>
                        {ele.answer.map((obj)=>
                        (<div style={{marginTop:'10px',borderBottom:"solid rgba(128, 128, 128, 0.161) 1px"}}>
                            <p key={obj.userId}>{obj.answerBody}</p>
                            <div className="answer-comments-section">
                                <p style={{marginTop:'30px',color:"gray",fontSize:'14px'}}>Share</p>
                                <> <span style={{display:"flex",gap:"10px",flexDirection:"column"}}>
                                <p style={{marginBottom:"0px",fontSize:'13px'}}>{`answerd on ${obj.answeredOn}` }</p>
                        <span style={{display:"flex",gap:"10px"}}>
                        <UserAvatar 
                        name={obj.userAnswered.charAt(0)}  
                        px="10px"
                        py="5px" 
                        borderRadius="20%" 
                        fontSize="14px"  
                        width={"25px"}
                        height="25px"
                        color="black"
                        fontWeight="700"
                        customUrl={`/User/${ele.userId}`} >
                        </UserAvatar>

                    
                        <p 
                            style={{fontSize:'14px',fontWeight:'500',color:'#3797cf'}}>
                        {obj.userAnswered}
                        </p>
                        </span>
                        </span></>
                            </div>
                        </div>))
                        }
                        </>
                    </div>

                    <div  className="your-answer" >
                       <h4>Your Answer</h4>
                       <textarea name="" id="" cols="30" row="10">

                       </textarea>
                       <button type="submit" className="btn btn-primary" >post your answer</button>
                     
                       <p className="para">Browse other questions 
                       tagged  <span style={{fontSize:"12px"}}>{ele.questionTags.map((tags)=>(
                            <Link style={{textDecoration:"none"}} key={tags} to="/Tags">
                            <span className="sepearte" style={{fontSize:"90%"}}>
                           <p>{tags}</p>
                        </span></Link>
                        ))
                        }</span> or <Link to={"/AskQuestions"} style={{textDecoration:"none"}}>ask your own</Link><br></br> question.</p>
                   </div>
                    
                </div>
               ))}
        </div>
    )
    }