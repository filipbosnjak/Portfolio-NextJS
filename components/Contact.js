import React from "react";
import styles from "../styles/Home.module.scss";

const Contact = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageObject = {
      fromName: e.target[0].value,
      from: e.target[1].value,
      subject: e.target[2].value,
      message: e.target[3].value
    }
    await fetch('/api/mail', {
      method:'POST',
      body: JSON.stringify(messageObject)
    })
  }
  return (
    <section className={`${styles.contact} ${styles.section}`}>
      <div id="contact">
        <h1 className={`${styles.sectionTitle} ${styles.title5}`}>
          Contact Me
        </h1>
        <div className={styles.contactInfo}>
          <div className={styles.item}>
            <i className='fas fa-mobile-alt'></i>
            +385 91 546 6832
          </div>

          <div className={styles.item}>
            <i className='fas fa-envelope'></i>
            filipo.bosnjak@gmail.com
          </div>

          <div className={styles.item}>
            <i className='fas fa-map-marker-alt'></i>
            Zagreb, Croatia
          </div>
        </div>

        <form action='#' className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type='text'
            className={styles.nameZone}
            placeholder='Your Full Name'
          />
          <input
            type='email'
            className={styles.emailZone}
            placeholder='Your Email'
          />
          <input
            type='text'
            className={styles.subjectZone}
            placeholder='Subject'
          />
          <textarea className={styles.messageZone} placeholder='Message' />
          <input type='submit' value='Send Message' className={styles.btn1} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
