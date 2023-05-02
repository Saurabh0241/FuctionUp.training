import React ,{useEffect, useState} from 'react'

function FetchData()
{
    const [ image,setImage]=useState('')

    useEffect(()=>
    {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((data)=> data.json())
    .then ((response)=> setImage(response.message))
    .catch((error) => console.log(error))  


    },[])

    return(
        <img src={image} style={{height : "300px", width : "300px",
        marginTop:"120px",borderRadius:"20px",boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"}}/>
    )
}

export default FetchData