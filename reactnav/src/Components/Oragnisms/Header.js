import React, { useState } from 'react'
import Navbar from '../molecules/navbar'
import './Header.css'
import { Mainbutton } from '../Atoms/button'
export default function Header() {

    return (
        <div>
            <Navbar />
            <div className='main'>
                
                <div className='text' >
                    <h1>Be There</h1>
                    <h3>Listen to Brilliant Songs in the moment</h3>
                    <h3>that truely defines you</h3>

                    <Mainbutton/>
                </div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqkWp2KlX7KrTlneRv1edPcwyhdfm9yAE_RJGDTFw0A&s' className='image' />

            </div>
        </div>
    )
}