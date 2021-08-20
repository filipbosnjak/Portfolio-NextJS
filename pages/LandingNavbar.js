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
            <Link className={styles.link} href='/'>
              Home
            </Link>
            <Link className={styles.link} href='#about'>
              About Me
            </Link>
            <Link href={"/blog"}>My Blog</Link>
            <Link className={styles.link} href='#skil'>
              Skills
            </Link>
            <Link className={styles.link} href='#works'>
              My Work
            </Link>
            <Link className={styles.link} href='#contact'>
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingNavbar;
