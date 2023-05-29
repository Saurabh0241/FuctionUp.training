import React from 'react';
// import './Cart.scss'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../../Store/CartSlices';
import styles from './Cart.module.css'
function Cart() {
    const Moviecard=useSelector(state=>state.Cart. moviefav)
        const dispatch = useDispatch()
    const removefun =(id)=>{
        //dispatch a remove action
        
             dispatch(remove(id))
      }
    
    const Cards=Moviecard.map((Users)=>{
        return(
            <>
            <div className={styles.cards_main}>
           <div className='cards' key={Users.imdbID}>
            <img  src={Users.Poster}/>
            <h4>{Users.Title}</h4>
            <h4>{Users.Year}</h4> 
            <h4>{Users.Type}</h4>
            <button className={styles.btn} onClick={()=>removefun(Users.imdbID)} >Remove Fav</button>
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

export default Cart