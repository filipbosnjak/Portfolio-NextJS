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
            <Link className={styles.link} href='/'>
              <a onClick={toggle}>Home</a>
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
              <h2>011</h2>
              <h3>Osnove strojnog učenjasa</h3>
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
