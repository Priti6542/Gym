import React, { useState } from 'react';
import styles from "./Testinomials.module.css" 
import { testinomialsData } from '../../testinomialsData';  
import Arrow1 from '../../assets/Arrow1.png';
import Arrow2 from '../../assets/Arrow2.png';
import { motion } from 'framer-motion';

function Testimonials() {

  const transition = { type: 'spring', duration: 3 };

  // State to track the currently selected testimonial
  const [selected, setSelected] = useState(0);

  const tLength = testinomialsData.length;

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setSelected((prevSelected) => (prevSelected + 1) % tLength);
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setSelected((prevSelected) => (prevSelected - 1 + tLength) % tLength);
  };

  return (
    <div className={styles.Testimonials} id='Testimonials'> {/* Fixed typo in classname */}
      {/* Left Section - Heading and Selected Review */}
      <div className={styles.left_t}>
        <span className={styles.title}>Testimonials</span>
        <span className={styles.stroke_text}>What they</span>
        <span> say about us</span>

        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          "{testinomialsData[selected].review}"
        </motion.span>

        <span>
          <span style={{ color: 'var(--orange,orange)' }}>
            {testinomialsData[selected].name}
          </span> {" "}
          - {testinomialsData[selected].status}
        </span>
      </div>

      {/* Right Section - All Testimonials */}
      <div className={styles.right_t}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>

        {/* Testimonial Image with transition */}
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testinomialsData[selected].image} alt="Testimonial" />
        
        {/* Arrows for Next/Prev Testimonial */}
        <div className={styles.arrows}>
          <img 
            onClick={prevTestimonial} 
            src={Arrow1} 
            alt="Previous Testimonial" 
          />
          
          <img
            onClick={nextTestimonial}
            src={Arrow2} 
            alt="Next Testimonial" 
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
