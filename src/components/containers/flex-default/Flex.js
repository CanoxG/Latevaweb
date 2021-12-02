import React from "react";
import styles from './Flex.scss'

export default function Flex({ children }) {

  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}