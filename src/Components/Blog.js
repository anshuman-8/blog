import React from "react";
import "./blog.css";
import Post from "./Post";
// import { useParams } from "react-router-dom";

const Blog = (props) => {
  const [isDark] = props.ctx.theme;
  // const [blogData,setBlogData] = props.blogData;
  // const post=blogData;
  // console.log(props);

  return (
    <div>
      <div className={isDark ? "splitscreen-dark" : "splitscreen"}>
        <div className={isDark ? "left-split-dark" : "left-split"}></div>
        <div className={isDark ? "right-split-dark" : "right-split"}>
          {/* <Post key={post.id} ctx={props.ctx} post={post}/> */}
          <Post ctx={props.ctx} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
