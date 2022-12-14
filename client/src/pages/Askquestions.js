import React from "react"

import "../css/questions.css"

export function Ask(){


    
 
   
    return(

        <>
        
          
            <div className="question">
                    <h1>Ask a public question</h1>
                <div className="question-body">
            <label htmlFor="ask-question-as-title">
                <p>Title</p>
                <p>Be specific and imagine you're a question to another person</p>
                <input  style={{width:'90%'}} type="text " id="ask-question-as-title" placeholder="e.g. is there an R function for finding the index of an element in a vector"></input>
            </label>
            <label htmlFor="ask-question-as-body">
                <p>Body</p>
                <p>inside all the information someone would need to answer your question</p>
                <textarea id="ask-question-as-body"style={{width:'90%',height:'300px'}}  ></textarea>
            </label>
                
            <label>
                <p>Tags</p>
                <p>Add up to 5 tags to describe what your question is about</p>
                <input  style={{width:'90%'}} type="text"placeholder="e.g(xml typescript wordpress)"></input>
            </label>
            
                </div>
                <button  style={{width:'17%' ,whiteSpace:"nowrap",fontSize:"13px",
            borderRadius:"3px"}}className="btn btn-primary"> Review Your Question</button>
        </div>
        
        
        </>
        // <div className="question">
        //             <h1>Ask a public question</h1>
        //         <div className="question-body">
        //     <label>
        //         <p>Title</p>
        //         <p>Be specific and imagine you're a question to another person</p>
        //         <input  style={{width:'90%'}} type="search"  placeholder="e.g. is there an R function for finding the index of an element in a vector"></input>
        //     </label>
        //     <label>
        //         <p>Body</p>
        //         <p>inside all the information someone would need to answer your question</p>
        //         <input style={{width:'90%',height:'300px'}} type="search" ></input>
        //     </label>
                
        //     <label>
        //         <p>Tags</p>
        //         <p>Add up to 5 tags to describe what your question is about</p>
        //         <input  style={{width:'90%'}} type="search"placeholder="e.g(xml typescript wordpress)"></input>
        //     </label>
            
        //         </div>
        //         <button  style={{width:'14%' ,whiteSpace:"nowrap",fontSize:"13px",
        //     borderRadius:"3px"}}className="btn btn-primary"> Review Your Question</button>
        // </div>
        
        )
}