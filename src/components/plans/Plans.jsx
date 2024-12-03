import React from 'react'
import styles from './Plans.module.css'
import { plansData } from '../../plansData'
import whitetick from '../../assets/whitetick.png'

function Plans() {
  return (
    <div className={styles.plans_container} id='plans_container'>

        <div className={`${styles.blur} ${styles.plans_blur1}`}></div>
        
        <div className={styles.programs_header}>
            <span className={styles.stroke_text}>Ready to Start</span>
            <span> Your Journey </span>
            <span className={styles.stroke_text}> now with us</span>
        </div>

        {/* Plans card */}
        <div className={styles.plans}>
            {plansData.map((plan, i) => (
                <div className={styles.plan} key={i}>
                    {plan.icon}  {/* This renders the plan icon */}
                    <span >{plan.name}</span>
                    <span >${plan.price}</span>

                    {/* Rendering the features */}
                    <div className={styles.features}>
                        {plan.features.map((feature, i) => (
                            <div className={styles.feature}>
                                <img src={whitetick} alt=""/>
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See more benefits -></span>
                    </div>
                    <button className={styles.btn}>Join now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans
