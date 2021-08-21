import React from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Slide from "react-reveal/Slide";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <div className={styles.copyright}>
            &copy; 2020 | Created & Designed By{" "}
            <Link href={"/blog"}>Filip Bošnjak</Link>
          </div>
          <Slide bottom cascade>
            <div className={styles.middle}>
              <div className={styles.f1}>
                <a
                  className={styles.btn}
                  href='https://www.facebook.com/filip.bosnjak.7509'
                  target='_blank'>
                  <i className='fab fa-facebook-f'></i>
                </a>
              </div>
              <div className={styles.f2}>
                <a
                  className={styles.btn}
                  href='https://github.com/filipbosnjak'
                  target='_blank'>
                  <i className='fab fa-github'></i>
                </a>
              </div>

              <div className={styles.f3}>
                <a
                  className={styles.btn}
                  href='https://www.linkedin.com/in/filipobosnjak/'
                  target='_blank'>
                  <i className='fab fa-linkedin'></i>
                </a>
              </div>

              <div className={styles.f4}>
                <a className={styles.btn} href=''>
                  <i className='fab fa-twitter'></i>
                </a>
              </div>

              <div className={styles.f5}>
                <a className={styles.btn} href=''>
                  <i className='fab fa-instagram '></i>
                </a>
              </div>
            </div>
          </Slide>
        </div>
      </footer>

      <button className={`${styles.goTop} `}></button>
    </>
  );
};

export default Footer;
