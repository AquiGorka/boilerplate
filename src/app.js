import React from 'react'
import styles from './styles.styl'
import { Link } from 'react-router'

export default (props) => {
  return (
    <main className={styles.app}>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/section'>Section</Link>
      </nav>
      <section className={styles.section}>
        {props.children}
      </section>
    </main>
  )
}
