import React from "react";
import styles from './BaseContainer.scss';


export default function BaseContainer({  children }) {

  return (
    <div className={styles.baseContainer}>
      {children}
    </div>
  )
}