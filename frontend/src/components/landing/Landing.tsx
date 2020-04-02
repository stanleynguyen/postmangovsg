import React from 'react'
import Login from './login'

import styles from './Landing.module.scss'
import landingImg from 'assets/img/landing.png'
import appLogo from 'assets/img/app-logo.png'
import ogpLogo from 'assets/img/ogp-logo.svg'

const Landing = () => {
  return (
    <React.Fragment>
      <div className={styles.topContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.landingImg}>
            <img src={landingImg}></img>
          </div>
          <div className={styles.textContainer}>
            <img className={styles.appLogo} src={appLogo}></img>
            <h1 className={styles.title}>POSTMAN</h1>
            <Login></Login>
          </div>
        </div>
      </div >
      <div className={styles.bottomContainer}>
        <div className={styles.linkBar}>
          <p className={styles.navTitle}>Postman Admin Panel</p>
          <a className={styles.navLink}>Guide</a>
          <a className={styles.navLink}>Contact Us</a>
        </div>
        <img className={styles.ogpLogo} src={ogpLogo}></img>
      </div>
    </React.Fragment>
  )
}

export default Landing