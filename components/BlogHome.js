import {React,useState} from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const BlogHome = ({ slugs }) => {
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

  if (process.browser) {
    debugger;
    window.addEventListener("scroll", scrollListener);
    let toggler = document.querySelector("#toggler");
    toggler.addEventListener("click", toggle);
  }
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
            <Link href={"/"}>Home</Link>
            <a className={styles.link} href='#about'>
              About Me
            </a>
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
      {slugs.map((slug) => {
        return (
          <div key={slug} className={styles.card}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className={styles.content}>
              <h2>01</h2>
              <h3>Osnove strojnog učenja</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                neque?
              </p>
              <button className={styles.button}>
                <Link href={"/blog/" + slug}>
                  <a>{slug}</a>
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogHome;
