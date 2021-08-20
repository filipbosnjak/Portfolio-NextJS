import React from "react";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { FaReact, FaJava, FaAndroid, BsDa, FaBuffer } from "react-icons/fa";
import { BsClipboardData } from "react-icons/bs";
import { FiAirplay } from "react-icons/fi";
import { SiTensorflow, SiPython } from "react-icons/si";

import {
  faPaintBrush,
  faDatabase,
  faBuffer,
  faPython,
  fas,
  fab,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div>
      <section className={`${styles.section}  ${styles.section2}`}>
        <div>
          <h1 className={[styles.sectionTitle, styles.title2].join(" ")}>
            My Skills
          </h1>
          <div className={styles.skills}>
            <div className={[styles.skill, styles.s1].join(" ")}>
              <FaJava className={styles.icon} />
              <h4>Java</h4>
              <p>
                In over a year of my professional Java experience and more than
                three years at university I've had a chance to work on a huge
                enterprise projects and also on smaller personal projects.
              </p>
            </div>

            <div className={[styles.skill, styles.s2].join(" ")}>
              <i className={`${styles.icon}`}>
                <FaReact className={styles.reactIcon} />
              </i>
              <h4>Advanced JavaScript</h4>
              <p>
                I got interested in React.js framework and loved it. I also
                mastered Hooks and Redux. Then I got interested in Next.js and
                since then I'm using it. I'm also used to Sass preprocessor.
              </p>
            </div>
            <div className={[styles.skill, styles.s4].join(" ")}>
              <i className={`${styles.icon}`}>
                <SiPython className={styles.icon} />
                <SiTensorflow className={styles.icon} />
              </i>

              <h4>AI and Machine learning</h4>
              <p>
                After mastering Python at university I got interested in deep
                learning, neural networks and AI. My masters thesis is about
                using convolutional neural networks for classification of
                galaxies.{" "}
              </p>
            </div>

            <div className={[styles.skill, styles.s3].join(" ")}>
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faDatabase}
                  className={styles.icon}></FontAwesomeIcon>
              </i>
              <h4>Managing Databases</h4>
              <p>
                On the uni course that was all about databases I learned a lot
                about database maintenance and also a lot about SQL and
                PostgreSQL.
              </p>
            </div>

            <div className={[styles.skill, styles.s5].join(" ")}>
              <i className={`${styles.icon}`}>
                <FaBuffer className={styles.icon} />
              </i>
              <h4>Data Structures and Algorithms</h4>
              <p>
                On the uni course that was all about data structures and
                algorithms I learned how to implement a lot of different
                algorithms (sorting, hashing, searching) and also a lot of
                different data structures. We built everything i C language.
              </p>
            </div>

            <div className={[styles.skill, styles.s6].join(" ")}>
              <i className={`${styles.icon}`}>
                <FiAirplay className={styles.icon} />
              </i>
              <h4>Data Analysis and UI design</h4>
              <p>
                After mastering Python I learned a lot about data visualisation
                and analysis. I was also learning Django framework and built a
                couple of different web apps.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
