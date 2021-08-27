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
import Image from "next/image";
import Slide from "react-reveal/Slide";

const Post = ({ content, data, html, allPostsData }) => {
  console.log("slug" + allPostsData[1].slug);
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
        <Slide bottom>
          <div className={styles.postText}>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </Slide>

        <div className={styles.rightSidebar}>
          <div className={styles.ads}></div>
          <div className={styles.readMore}>
            <div className={styles.readMore}>Read More</div>
            <div className={styles.readMoreCards}>
              <div className={styles.container}>
                {allPostsData.map((item, i) => {
                  // console.log(slug);

                  // console.log(marked[i].data.postTitle);
                  if (i < 2) {
                    return (
                      <Slide bottom>
                        <div key={item.slug} className={styles.card}>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <div className={styles.content}>
                            <Image
                              src={`/${item.slug}.jpg`}
                              alt='Filip Bošnjak'
                              className={styles.img}
                              width='100%'
                              height='60%'
                              layout='responsive'
                            />
                            <h2>{item.label}</h2>

                            <h3>{item.postTitle}</h3>
                            <p>{item.shortIntro}</p>
                            <button className={styles.button}>
                              <Link href={"/blog/" + item.slug}>
                                <a>Read more</a>
                              </Link>
                            </button>
                          </div>
                        </div>
                      </Slide>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
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
  //Getting info about all the files
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => {
    return filename.replace(".md", "").replace(".html", "");
  });

  const markdownWithMetaDataAll = paths.map((filename) => {
    return fs.readFileSync(path.join("posts", filename + ".html")).toString();
  });
  const markedAllData = markdownWithMetaDataAll.map((item) => {
    item = matter(item);
    return item.data;
  });

  //path.join - handles / and \ in the path
  const markdownWithMetaData = fs
    .readFileSync(path.join("posts", slug + ".html"))
    .toString();
  const parsedMarkdown = matter(markdownWithMetaData);
  //console.log("marAll", markedAllData);
  return {
    props: {
      content: parsedMarkdown.content,
      data: parsedMarkdown.data,
      html: markdownWithMetaData,
      allPostsData: markedAllData,
    },
  };
};

export default Post;
