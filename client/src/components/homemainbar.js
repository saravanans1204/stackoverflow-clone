import React from "react"
import '../css/home.css'
import '../css/questions.css'
// import { Link} from "react-router-dom"
import { useLocation } from "react-router-dom"
import { QuestionList } from '../components/Questions/QuestionList';
import { useNavigate } from "react-router-dom"

export function HomeMainBar(){
    const user=1;
    const questionsList = [{
        _id: '1',
        upVotes:3,
        downVotes:2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "mongoDb"],
        userPosted: "mano",
        userId:1,
        askedOn: "jan 1",
        answer:[{
            answerBody:'Answer',
            userAnswered:"Kumar",
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
   

    

        const location=useLocation()
        const navigate=useNavigate()
        const checkAuth=()=>{
            if(user===null){
                

                navigate('/Auth')
            }else{
                navigate('/AskQuestions')
            }
        }
    

    return(
        
        <div className="center-portion" style={{backgroundColor:""}}>
            <div className="center-div">
                {location.pathname==='/'?<h1 className="heading">Top Question</h1>:<h1 className="heading">All Question</h1>}
                
                <button type="submit" onClick={checkAuth} className="btn btn-primary">
                    Ask Questions</button>
                
            </div>
            {/* <div className="center-div-two">
                <p className="content">Interesting</p>
            </div> */}
 
            <div className="questions-div">
                {questionsList === null?<h1>Loading...</h1>:
                <>
                <p>{questionsList.length} questions</p>
                <QuestionList questionsList={questionsList}/>
                </>}
                
                
              
                    
            </div>
        </div>
    
        )
}



