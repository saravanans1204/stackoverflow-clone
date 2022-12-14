import { Link } from "react-router-dom"
// import React, { useEffect,useRef } from "react"

export function UserAvatar({name ,backgroundColor,
    py,px,cursor,color,borderRadius,fontSize,marginRight,width,height,fontWeight,customUrl}){


//     let colour=useRef()
        const colour='green'
//   useEffect(()=>{
//     colour.current=randomColor()
//     console.log(colour.current)
//       },[colour])
  
  
    
    
    
   
 
    const style={
        backgroundColor:backgroundColor||colour,
        padding:`${py} ${px}`,
        color:color||'black',
        borderRadius,
        fontSize,
        textAlign:"center",
        cursor:cursor||"pointer",
        textDecoration:"none",
        marginRight,
        width,
        height,
        display:"inline-flex",
        alignItem:'center',
        fontWeight:fontWeight ||'500',
        paddingRight:"20px",
        paddingBottom:"25px"
        

    }


  return(
    <div style={style}>
         <Link to={customUrl||"User"} style={{color:color ||'white',textDecoration:"none"}}>{name}</Link>
    </div>
  )
}


function randomColor(){
  
    const array=["blue","orange","purple","cyan","green"]
    const randomColor=array[Math.floor(Math.random() * array.length)];

    return randomColor
  }
