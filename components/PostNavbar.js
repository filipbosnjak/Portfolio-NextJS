import { React, useState, useEffect } from "react";

import styles from "../styles/Home.module.scss";
import Link from "next/link";

const LandingNavbar = () => {
  const [isSticky, setIsSticky] = useState("");
  const [isActive, setIsActive] = useState("");

  const scrollListener = () => {
    if (window.scrollY >= 20) {
      setIsSticky(styles.sticky);
    } else {
      setIsSticky(" ");
    }
  };

  const toggle = () => {
    if (isActive === "") {
      setIsActive(styles.active);
    } else {
      setIsActive("");
    }
  };
  useEffect(() => {
    if (process.browser) {
      window.addEventListener("scroll", scrollListener);
      let toggler = document.querySelector("#toggler");
      toggler.addEventListener("click", toggle);
    }
    return () => {
      window.removeEventListener("scroll", scrollListener);
      if (document.querySelector("#toggler")) {
        let toggler = document.querySelector("#toggler");
        toggler.removeEventListener("click", toggle);
      }
    };
  }, [isActive]);

  return (
    <div className={styles.container}>
      <nav className={`${styles.navbar} ${isSticky}`}>
        <div className=''>
          <button id='toggler' className={`${styles.menuToggler} ${isActive}`}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`${styles.navbarMenu} ${isActive}`}>
            <Link className={styles.link} href='/'>
              About Me
            </Link>
            <Link className={styles.link} href='/blog'>
              See more
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
