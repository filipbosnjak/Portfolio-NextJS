import React from "react";
import Link from "next/link";
import styles from "/styles/Home.module.scss";
import fs from "fs";

const BlogHome = ({ slugs }) => {
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

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map((filename) =>
        filename.replace(".md", "").replace(".html", "")
      ),
    },
  };
};
