import React from "react";
import styles from './Flex.scss'

export default function Flex({ children, align = 'long' }) {

  return (
    <div className={`${styles.container} ${styles[align]}`}>
      {children}
    </div>
  )
}