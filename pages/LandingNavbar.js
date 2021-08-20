import React from "react";

import styles from "../styles/Home.module.scss";
import Link from "next/Link";

const LandingNavbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className=''>
          <button className={styles.menuToggler}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={styles.navbarMenu}>
            <a className={styles.link} href='/'>
              Home
            </a>
            <a className={styles.link} href='#about'>
              About Me
            </a>
            <Link href={"/blog"}>My Blog</Link>
            <a className={styles.link} href='#skil'>
              Skills
            </a>
            <a className={styles.link} href='#works'>
              My Work
            </a>
            <a className={styles.link} href='#contact'>
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingNavbar;
