import React from "react";
import "./blog.css";
import Post from "./Post";

const Blog = (props) => {
  const [isDark] = props.ctx.theme;
  return (
    <div>
      <div className={isDark?"splitscreen-dark":"splitscreen"}>
        <div className={isDark?"left-split-dark":"left-split"}></div>
        <div className={isDark?"right-split-dark":"right-split"}>
          <Post ctx={props.ctx}/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
