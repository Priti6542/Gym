import React from 'react'
import styles from './Footergym.module.css'
import GitHub from '../../assets/GitHub.png'
import insta from '../../assets/insta.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'


function Footergym() {
  return (
        <div className={styles.Footer_container}>
            <hr />
            <div className={styles.footer}>
                <div className={styles.social_links}>
                    <img src={GitHub} alt="" />
                    <img src={insta} alt="" />
                    <img src={linkedin} alt="" />
                </div>
                <div className={styles.logo_f}>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footergym
