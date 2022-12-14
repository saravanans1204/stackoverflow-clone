import React from "react"
import { Question } from "../Questions/Question"
export function QuestionList({questionsList}){
    

    return(
        
        <>
        {questionsList.map((ele)=>(
            <Question questions={ele} key={ele.id}/>
        ))}</>
            
            
        
        )
}
