import { React, useState, useEffect } from "react";
import Slide from "react-reveal/Slide";

import styles from "../styles/Home.module.scss";
import Link from "next/link";

const LandingNavbar = () => {
  const [isSticky, setIsSticky] = useState("");
  const [isActive, setIsActive] = useState("");

  const scrollListener = () => {
    if (window.scrollY >= 20) {
      setIsSticky(styles.stickyLanding);
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
            <Slide top>
              <Link className={styles.link} href='/'>
                <a
                  onClick={() => {
                    scroll(0, 0);
                    toggle();
                  }}>
                  Home
                </a>
              </Link>
              <Link className={styles.link} href='#about'>
                <a onClick={toggle}>About Me</a>
              </Link>
              <Link href={"/blog"}>My Blog</Link>
              <Link className={styles.link} href='#skill'>
                <a onClick={toggle}>Skills</a>
              </Link>
              <Link className={styles.link} href='#works'>
                <a onClick={toggle}>My Work</a>
              </Link>
              <Link className={styles.link} href='#contact'>
                <a onClick={toggle}>Contact Me</a>
              </Link>
            </Slide>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingNavbar;
