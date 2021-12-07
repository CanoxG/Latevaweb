import React from 'react';
import styles from './BlockTwo.scss';



export default function BlockTwo( { children }) {

  return (
    <section className={styles.container}>
      <div className={styles.rowBlock}>
        {children}
      </div>
    </section>
  )
}