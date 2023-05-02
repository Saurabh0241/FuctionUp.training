import React, { useState } from 'react';
import './user.css'


 function CardMaking()
{
    const [index,setIndex]=useState(0)
    const [people,setPeople]=useState([])


   async function handleclick()
   {  
    
    try{
        const response= await fetch('https://reqres.in/api/users/')
        const Data= await response.json()
        // console.log(Data.data[0],"i am in try ")
        if(index==6)
    {
    setIndex(0)
    }
    else
    {
        setIndex(index+1)
        setPeople(Data.data[index])
        
    }
        
    
     }
     catch(error){
         console.log('i am from catch' ,error)
     }}



     return(
        <div className='App'>
        <div className='CardPara'>
            <img src={people.avatar}/>
            <p className='para'>ID={people.id}</p>
            <p className='para'>Email={people.email}</p>
            <p className='para'>FirstName={people.first_name}</p>
            <p className='para'>LastName={people.last_name}</p>   
        </div>
         <button className="btn" onClick={handleclick}>Get users</button>
         </div>
     );


  
}
export default CardMaking