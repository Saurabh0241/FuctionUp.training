import './useref.css'
import React, { useRef } from 'react'

const Useref = () => {

    const reference = useRef("")

    function handleclick() {
        reference.current.click()
    }

    return (
        <div className="div1">
            <input className="inp" type="file" ref={reference} />
            <button className="btn" onClick={handleclick}>picke the file</button>

        </div>
    )
}

export default Useref