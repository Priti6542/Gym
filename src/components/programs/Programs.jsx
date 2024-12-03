import React from 'react'
import styles from './Programs.module.css'
import { programsData } from '../../programsData';
import rightArrow from '../../assets/rightArrow.png'

function Programs() {
    return (
        <div className={styles.Programs} id='programs'>

            {/*header*/}
                <div className={styles.programs_header} id='programs_header'>
                <span className={styles.stroke_text}> Explore our</span>
                <span>Programs</span>
                <span className={styles.stroke_text}>to shape you</span>
            </div>

            <div className={styles.program_categories}>
                {programsData.map((program)=>(
                    <div className={styles.category}>
                        {program.logo}

                        <span >{program.heading}</span>
                        <span>{program.details}</span>
                        <div className={styles.join_now}>
                            <span>Join Now</span>
                            <img src={rightArrow}></img>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Programs

