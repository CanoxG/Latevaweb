import React from "react";
import styles from './SectionContainer.scss';


export default function SectionContainer({  children }) {

  return (
    <div className={styles.baseContainer}>
      {children}
    </div>
  )
}