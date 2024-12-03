import React from 'react'
import styles from './Hero.module.css'
import Header from '../header/Header'
import heart from '../../assets/heart.png'
import gym from '../../assets/gym.png'
import line1 from '../../assets/line1.png'
import calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounters from 'number-counter'

function Hero() {
    const transition = { type: 'spring', duration: 3 }
    const mobile=window.innerWidth<=768 ? true:false;
    return (
        <div className={styles.hero} id='hero'>
            <div className={`${styles.blur} ${styles.hero_blur}`}></div>
            <div className={styles.left_h}>
                <Header />
                <div className={styles.the_best_ad}>
                    <motion.div
                        initial={{ left:mobile? "178px":'238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    >
                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                <div className={styles.hero_text}>
                    <div>
                        <span className={styles.stroke_text}>Shape </span>
                        <span>Your</span>
                    </div>

                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div className={styles.ideal}>
                        <span>
                            IN HERE WE WILL HELP
                            YOU TO SHAPE AND
                            BUILD YOUR IDEAL BODY
                            AND LIVE UP YOUR LIFE
                            TO FULLEST
                        </span>
                    </div>
                </div>

                {/* Figures */}
                <div className={styles.figures}>
                    <div>
                        <span>
                            <NumberCounters end={140} start={100} delay='4' preFix="+"/>
                        </span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span> <NumberCounters end={978} start={100} delay='4' preFix='+'/></span>
                        <span>member joined</span>
                    </div>
                    <div>
                        <span> <NumberCounters end={50} start={10} delay='4' preFix="+"/></span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* Hero Buttons */}
                <div className={styles.hero_buttons}>
                    <button className={styles.btn}>Get Started</button>
                    <button className={styles.btn}>Learn More</button>
                </div>
            </div>

            <div className={styles.right_h}>
                <button className={styles.btn}>Join Now</button>

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className={styles.heart_rate}>
                    <img src={heart} alt="Heart icon" />
                    <span>Heart Rate</span>
                    <span>116bpm</span>
                </motion.div>

                {/* Hero Images */}
                <img src={gym} alt="Gym equipment" className={styles.hero_image} />
                <motion.img
                initial={{ right: '11rem' }}
                whileInView={{ right: '20rem' }}
                transition={transition} 
                src={line1} alt="Decorative line" className={styles.hero_image_back} />

                {/* Calories */}
                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                    className={styles.calories}>
                    <img src={calories} alt="Calories burned icon" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
            </motion.div>
        </div>
        </div >
    )
}

export default Hero
