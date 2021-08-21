import { React, useState } from "react";

import styles from "../styles/Home.module.scss";
import Link from "next/link";

const LandingNavbar = () => {
  const [isSticky, setIsSticky] = useState("");

  const scrollListener = () => {
    if (window.scrollY >= 20) {
      setIsSticky(styles.sticky);
    } else {
      setIsSticky(" ");
    }
  };

  if (process.browser) {
    window.addEventListener("scroll", scrollListener);
  }
  let nav = styles.navbar;
  console.log(nav);
  useEffect(() => {
    if (1) {
      nav = styles.navbar;
      console.log(nav);
    }
  }, []);

  return (
    <div className={styles.container}>
      <nav className={`${styles.navbar} ${isSticky}`}>
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
