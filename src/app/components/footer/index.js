import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
function Footer() {
  return (
    <footer className={styles.footer}>
    Made with ❤️ by&nbsp;
    <Link href="https://az.linkedin.com/in/kenan-ramazanov-3b0a65235" target="_blank">
      Kenan Ramazanov
    </Link>
  </footer>
  )
}

export default Footer