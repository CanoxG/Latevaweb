import React from "react";
import styles from './ProjectText.scss';


export default function ProjectText( {children }) {

  return(
    <div className={styles.textContent}>
      {children}
    </div>

  )
}