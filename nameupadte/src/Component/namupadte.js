import './nameupdate.css'
import React, { useState } from "react"


export function Nameupdate() {
    const [name, setName] = useState('')
    const [Dummyname, DummysetName] = useState('')


    function chnagename(event)
    {
        DummysetName(event.target.value)
    }
    function handlechange()
     {
       setName(Dummyname)

    }




    return (
        <div className='div'>
            <div className='div1'>
                <input className='input' placeholder='Add your name' onChange={chnagename}></input><br/>
                <button className='btn' onClick={handlechange}>Submit</button>
                <h2 className='para'>Hi My name is: {name}</h2>
            </div>
        </div>
    )
}