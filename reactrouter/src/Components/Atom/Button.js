import React from 'react'
import styles from './Button.module.css'

function Button({Handler,val}) {
  return (
    <>
    <button className={styles.Button} onClick={Handler}>{val}</button>
    </>
  )
}

export default Button