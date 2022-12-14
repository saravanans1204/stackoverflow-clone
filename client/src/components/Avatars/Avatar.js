import { Link } from "react-router-dom"
import React, { useMemo } from "react"

export function Avatar({name ,backgroundColor,
    py,px,cursor,color,borderRadius,fontSize,marginRight,width,height}){

  
    let oneColour="orange"
    const colour=useMemo(()=>{
      return randomColor()
      
    },[])
    
    oneColour=colour
 
    const style={
        backgroundColor:backgroundColor|| oneColour,
        padding:`${py} ${px}`,
        color:color||'black',
        borderRadius,
        fontSize,
        textAlign:"center",
        cursor:cursor||"pointer",
        textDecoration:"none",
        marginRight,
        fontWeight:'500',
        width,
        height,
      
    
      
        

    }


  return(
    <div style={style}>
         <Link to="User" style={{color:"white"||color,textDecoration:"none"}}>{name}</Link>
    </div>
  )
}


function randomColor(){
  
    const array=["blue","orange","purple","cyan","green"]
    const randomColor=array[Math.floor(Math.random() * array.length)];

    return randomColor
  }
