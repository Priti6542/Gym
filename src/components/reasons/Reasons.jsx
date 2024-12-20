import React from 'react'
import styles from './Reasons.module.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import nike from '../../assets/nike.png'
import adidas from '../../assets/adidas.png'

function Reasons() {
    return (
        <div className={styles.Reasons} id='Reasons'>

            <div className={styles.left_r}>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>

            <div className={styles.right_r}>
                <span>some reasons</span>

                <div>
                    <span className={styles.stroke_text}>why</span>
                    <span> choose us?</span>
                </div>

                <div className={styles.details_r}>
                    <div><img src={tick} alt=""></img>
                        <span>OVER 140+ EXPERT COACHES</span>
                    </div>
                    <div><img src={tick} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div><img src={tick} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div><img src={tick} alt="" />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>

                <span
                style={{color:"var(--grey,darkgrey)",
                    fontWeight:"normal",
                }}
                >OUR PARTNERS
                </span>

                <div className={styles.partners}>
                    <img src={nb} alt=""/>
                    <img src={nike} alt=""/>
                    <img src={adidas} alt=""/>
                </div>
            </div>



        </div>
    )
}

export default Reasons
