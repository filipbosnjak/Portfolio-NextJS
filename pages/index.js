import Link from "next/link";
import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import HeadCustom from "./HeadCustom";
import BlogHome from "./BlogHome";
import LandingSection from "./LandingSection";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import PoweredBy from "./PoweredBy";
import Footer from "./Footer";

export default function Home({ slugs }) {
  return (
    <>
      <HeadCustom />
      <LandingSection />
      <About />
      <Skills />
      <Works />
      <Contact />
      <PoweredBy />
      <Footer />
      <Link href={"/blog"}>asd</Link>
    </>
  );
}
