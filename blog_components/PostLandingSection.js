import React from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import portrait from "../images/portrait.jpg";
import Slide from "react-reveal/Slide";

const PostLandingSection = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.landingSection}>
      <div className={styles.landingContainer}>
        <Slide top cascade>
          <div>
            <div className={styles.links}>
              <Link className={styles.link} href='/blog'>
                Blog
              </Link>
              &gt;
              <Link className={styles.link} href='/blog'>
                {data.label}
              </Link>
            </div>
            <div className={styles.title}>{data.postTitle}</div>
            <div className={styles.postContact}>
              <div className={styles.personalInfo}>
                <div className={styles.aboutPic}>
                  <Image
                    src={portrait}
                    alt='Filip Bošnjak'
                    className={styles.aboutPic}
                  />
                </div>
                <div className={styles.text}>
                  <p>{data.author}</p>
                  <p>{data.label}</p>
                  <p>{data.date}</p>
                </div>
              </div>
              <div className={styles.social}>
                <div className={styles.icon}>
                  <i className='fab fa-facebook-f'></i>
                </div>
                <div className={styles.icon}>
                  <i className='fab fa-linkedin'></i>
                </div>
                <div className={styles.icon}>
                  <i className='fab fa-instagram'></i>
                </div>
                <div className={styles.icon}>
                  <i className='fab fa-github'></i>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default PostLandingSection;
