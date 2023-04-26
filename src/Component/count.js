import "./count.css"
import React from 'react'
import { useState } from "react"

export function Count()
{
const [count ,setCount]=useState(0)

    function Increment ()
    {
        setCount(count+1)
    }

    function Decrement()
    {
        if(count>0)
        {
            setCount(count-1)
            
            
        }
        else
        {
            alert("count should not get decrease below zero ")
        }
       
    }

    return(
        <div className="div1">
            <button className="btn" onClick={Increment}>Increment</button>
            <h1>{count}</h1>
            <button className="btn" onClick={Decrement}>Decrement</button>

        </div>
    )
}