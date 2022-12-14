import React from "react"
import { Link } from "react-router-dom"
import '../../css/questions.css'
export function Question({questions}){
    


    return(
        
            <div className="display-ans-container">
                <div className="display-votes-ans">
                    <span>
                    <p>{questions.upVotes-questions.downVotes}</p>
                    <p>votes</p>
                    </span>
                    <span>
                    <p>{questions.noOfAnswers}</p>
                    <p>Answer</p>
                    </span>
                    <div className="diplay-details">
                    <Link to={`/Questions/${questions._id}` } className="question-title">{questions.questionTitle}</Link>
                    <div className="tags-in-questions">
                    {
                        questions.questionTags.map((tag)=>(
                            <p key={tag} className="sepearte-tag">{tag}</p>
                        ))
                    }
                </div>
                
               
                </div>
                <div className="diplay-time">
                    <p ><Link className="question-time">{questions.userPosted}</Link> asked on {questions.askedOn}</p>
                </div>
                </div>
                
            </div>
            
            
        
        )
}
