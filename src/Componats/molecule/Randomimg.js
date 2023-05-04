import axios from "axios";
import React, { useState } from "react";

import React from 'react'

function Randomimg() {

    const [img,setImg]=useState('')

    function chnageimg()
    {

        axios.get("https://dog.ceo/api/breeds/image/random")
        .then((responace)=>setImg(responace.data))
    }












  return (
    <div>Randomimg</div>
  )
}

export default Randomimg