import React, { useRef } from 'react';  // Import React and useRef correctly
import emailjs from '@emailjs/browser'; // Import emailjs
import styles from './Join.module.css';   // Import the CSS mod

function Join() {
  const form = useRef();  // Create a ref for the form

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault();  // Prevent page reload on form submit

    // Send the email using EmailJS
    emailjs
      .sendForm('service_ixmnrie', 'template_4ynlcpe', form.current, 'K6cyaZrhz1z6LTGHU')
      .then(
        () => {
          console.log(result.text);
          
        },
        (error) => {
          console.log(error.text);
       }
      );
  };

  return (
    <div className={styles.Join} id="join_us">
      <div className={styles.left_j}>
        <hr />
        <div>
          <span className={styles.stroke_text}>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className={styles.stroke_text}>WITH US</span>
        </div>
      </div>

      <div className={styles.right_j}>
        <form ref={form} className={styles.email_container} onSubmit={sendEmail}>
          {/* Name and email input */}
          <input 
            type="email" 
            name="user_email"  // Make sure this matches your EmailJS template field name
            placeholder="Enter your email address" 
            required
          />
          <button type="submit" className={styles.btn_btn_j}>Join now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
