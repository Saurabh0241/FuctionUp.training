import React from 'react'

export default function Button({task, performTask, styling}) {

  return (
    <div>
        <button onClick={performTask} style={styling}>{task}</button>
    </div>
  )
}