import Link from "next/link";
import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import HeadCustom from "../components/HeadCustom";
import BlogHome from "../components/BlogHome";
import LandingSection from "../components/LandingSection";
import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Contact from "../components/Contact";
import PoweredBy from "../components/PoweredBy";
import Footer from "../components/Footer";

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
