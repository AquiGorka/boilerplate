import React from 'react'
import styles from './styles.styl'

export default (props) => {
  return (
    <main className={styles.app}>
      <section className={styles.section}>
        {props.children}
      </section>
    </main>
  )
}
