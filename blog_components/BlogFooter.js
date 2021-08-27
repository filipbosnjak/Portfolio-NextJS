import { React, useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import { FaLocationArrow } from "react-icons/fa";

const BlogFooter = () => {
  const [visible, setIsVisible] = useState(" ");

  const scrollListener = () => {
    if (window.scrollY >= 20) {
      setIsVisible(styles.visible);
    } else {
      setIsVisible(" ");
    }
  };
  useEffect(() => {
    if (process.browser) {
      window.addEventListener("scroll", scrollListener);
    }
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [visible]);
  return (
    <>
      <footer className={styles.blogFooter}>
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
      <button
        className={`${styles.goTop} ${visible}`}
        onClick={() => {
          scroll(0, 0);
        }}>
        <FaLocationArrow />
      </button>
    </>
  );
};

export default BlogFooter
