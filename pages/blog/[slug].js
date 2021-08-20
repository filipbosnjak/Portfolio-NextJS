import React from "react";
//File system - runs on a server (node)
import fs from "fs";
import path from "path";
import matter from "gray-matter"
import Head from "next/Head"
import marked from "marked"
import Link from "next/Link"



const Post = ({content, data, html}) => {
  return (
    <>
    <Head>
      <title>{data.title}</title>
      <meta title="description" content={data.description}/>      
    </Head>
    <body>
    <h1>dangerouslySetInnerHTML: </h1>
    <div dangerouslySetInnerHTML={{__html:content}}></div>
    <Link href="/">Go back</Link>
    </body>
    
    </>
  )
}

export const getStaticPaths = async () => {

  const files = fs.readdirSync('posts');

  const paths = files.map( filename => ({
    params: {
      slug: filename.replace('.md' , '').replace('.html' , '')
    }})
  )
  return {
    paths ,
    fallback: false
  }
}

//Function returning props to the post component - data feeding
export const getStaticProps = async ({params: {slug}}) => {

  //path.join - handles / and \ in the path
  const markdownWithMetaData = fs.readFileSync(path.join("posts", slug + ".html")).toString();

  const parsedMarkdown = matter(markdownWithMetaData)
  return {
    props: {
      content: parsedMarkdown.content,
      data: parsedMarkdown.data,
      html:markdownWithMetaData
    }
  }
}
 
export default Post;