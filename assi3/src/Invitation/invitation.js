import {Fragment} from 'react'

export function Invitation(props)
{

    const {
        birthday,
        party,
        email,
        name,
        Avenue,
        name1,
        name2,
        name3,

    }=props


    return (

        <Fragment>
          
        <pre>
       
       
    Subject : {birthday} <br/>
    To : {email} <br/> <br/>
    Hi , {name} <br/> <br/>
    
    I am having a {party} next Friday at my Home .
    Would you like to come ? It will be fun . Lots of people from my school are coming . 
    you know some of them - {name1} , {name2} , {name3} . <br/> <br/> 
    
    My house is behind our school , near {Avenue}. <br/> <br/>
    
    I hope you will come and see you soon . <br/> <br/>
    
    from , <br/>
    {name}

        </pre>

        
        </Fragment>
    )

}