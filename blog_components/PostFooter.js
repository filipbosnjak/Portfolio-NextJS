import { React, useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { FaLocationArrow } from "react-icons/fa";

const PostFooter = () => {
  const [visible, setIsVisible] = useState(" ");

  const scrollListener = () => {
    if (window.scrollY >= 20) {
      setIsVisible(styles.visible);
    } else {
      setIsVisible(" ");
    }
  };
  useEffect(() => {
    if (process.browser) {
      window.addEventListener("scroll", scrollListener);
    }
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [visible]);
  return (
    <>
      <div className={styles.blogFooter}>Blog footer</div>
      <button
        className={`${styles.goTop} ${visible}`}
        onClick={() => {
          scroll(0, 0);
        }}>
        <FaLocationArrow />
      </button>
    </>
  );
};

export default PostFooter;
