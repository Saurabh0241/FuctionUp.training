import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Moviecard.module.css';
import { add } from '../../Store/CartSlices'
import { getProducts } from '../../Store/MovieSlices';






function Moviecard() {
const dispatch = useDispatch();
// const {data:Moviecard,status}=useSelector(state=>state.MovieCart)
const [Moviecard,getMoviecard]=useState([])
useEffect(() => {
    fetch('https://www.omdbapi.com/?s=action&apikey=bbb5aad4&page=1')
      .then((res) => res.json())
      .then((data) => getMoviecard(data.Search));
    dispatch(getProducts())
  }, []);

//   if(status==="Loading")
// {
//   return <h1>Loading.............</h1>
// }
// if(status==="error")
// {
//   return <h1>ERROR...........</h1>
// }
 function Addtofav(Users)
 {
   
   {dispatch(add(Users))}
 }

  const Cards=Moviecard.map((Users)=>{
    return(
        <>
        
        <div className={styles.cards_main}>
       <div  key={Users.imdbID}>
        <img  src={Users.Poster}/>
        <h3>{Users.Title}</h3>
        <h4>{Users.Year}</h4> 
        <h4>{Users.Type}</h4>
        <button className={styles.btn} onClick={()=>Addtofav(Users)}>ADD TO Fav</button>
       </div>    
       </div>   
        </>
    )
  })


  return (
    
 <>
  <div className={styles.Moviecard}>
    
         {Cards}
        
       </div>
 </>
  )
}

export default Moviecard