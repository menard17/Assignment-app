import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
    <div className={styles.logoBox}>
      <img src="/images/logo-white.png" alt="Logo" className={styles.logo} />
    </div>
    <div className={styles.textBox}>
      <h1 className={styles.headingPrimary}>
        <span className={styles.headingPrimaryMain}>Outdoors</span>
      </h1>
      <h1 className={styles.headingPrimary}>
        <span className={styles.headingPrimarySub}>is where life happens</span>
      </h1>
      <button className="bg-white text-gray-800 font-semibold mt-24 py-2 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
      DISCOVER OUR TOURS
    </button>
    </div>
  </header>
  )
}

export default Header