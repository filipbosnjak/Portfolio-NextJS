import React from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import portrait from "../images/portrait.jpg";

const PostLandingSection = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.landingSection}>
      <div className={styles.landingContainer}>
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
            <div className={styles.icon}>Fb</div>
            <div className={styles.icon}>Li</div>
            <div className={styles.icon}>Tw</div>
            <div className={styles.icon}>Go</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLandingSection;
