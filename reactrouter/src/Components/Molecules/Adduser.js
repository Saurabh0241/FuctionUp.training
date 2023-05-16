import React, { useState } from 'react'
import styles from './Adduser.module.css'
import Button from '../Atom/Button'

function Adduser() {

const [ val,setvalue] = useState("")
const [update,setupdate] = useState([])


function Handlers()
{

    // setupdate([...update,val])
    // console.log(update)
    setupdate((update)=>
    {
        const updatedvalue=[...update,val]
        console.log(updatedvalue)
        setvalue("")
        return updatedvalue
      
      }
       
    )
}

function removeuser(i)
{
    const updatedListData = update.filter((ele, id) => {
        return i != id;
      });
      setupdate(updatedListData);

}







  return (
    
    <>
   
     <h1>Add delete user functionality </h1>
     <div className={styles.parent}>
     <div className={styles.div1}>
      <div>
       <input className={styles.input} type='text' placeholder='Add New user' value={val}   onChange={(e)=>setvalue(e.target.value)} />
       <Button val="Add" Handler={Handlers}/> 
       <div>
       </div>
        <div className={styles.userdiv}>
       <p className={styles.users}>Users List</p>
       </div>
       {
        update !=[] && update.map(( user, i)=>{
            return(
                <>
                <p key={i}></p>
                <div>
                <div className={styles.username}>{user}</div>
                <div className={styles.btnposition}>
                    <button className={styles.button} onClick={() => removeuser(i)}>
                      Delete
                    </button>
                  </div>
                </div>
                </>
            )
        }
        )
       }

</div>
    
     </div>
     
   {/* {
    update !=[]&& update.map((data,index)=>(
        <>
        <div key={index}>{data}
        <button onClick={() => remove(index)}>Delete</button></div>
        </>
    ))
   } */}

    </div>
    </>
  )
}

export default Adduser