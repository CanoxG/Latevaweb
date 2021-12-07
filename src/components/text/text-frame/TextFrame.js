import React from "react";
import styles from './TextFrame.scss'


export default function TextFrame( { children }) {

  return (
    <div className={styles.wallText}>
      {children}
    </div>
  )
}



