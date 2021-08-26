import React from "react";
//File system - runs on a server (node)
import fs from "fs";
import path from "path";
import styles from "/styles/Home.module.scss";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import PostNavbar from "../../blog_components/PostNavbar";
import PostLandingSection from "../../blog_components/PostLandingSection";
import PostFooter from "../../blog_components/PostFooter";

const Post = ({ content, data, html }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title='description' content={data.description} />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'
          integrity='sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=='
          crossOrigin='anonymous'
        />
      </Head>
      <PostNavbar />
      <PostLandingSection data={data} />
      <div className={styles.postContainer}>
        <div className={styles.leftSidebar}></div>
        <div className={styles.postText}></div>
        <div className={styles.rightSidebar}>
          <div className={styles.ads}></div>
          <div className={styles.readMore}></div>
        </div>
      </div>
      <h1>dangerouslySetInnerHTML: </h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <PostFooter />
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", "").replace(".html", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

//Function returning props to the post component - data feeding
export const getStaticProps = async ({ params: { slug } }) => {
  //path.join - handles / and \ in the path
  const markdownWithMetaData = fs
    .readFileSync(path.join("posts", slug + ".html"))
    .toString();
  const parsedMarkdown = matter(markdownWithMetaData);
  console.log(parsedMarkdown);
  return {
    props: {
      content: parsedMarkdown.content,
      data: parsedMarkdown.data,
      html: markdownWithMetaData,
    },
  };
};

export default Post;
