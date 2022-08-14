import React from "react";
import { TopIcon } from "../Assets/icons";
import "./blog.css";
import Post from "./Post";
import ReadingBar from "./ReadingBar";
import data from "../Content/_info";
import { useParams } from "react-router-dom";

const Blog = ({ctx}) => {
  const { id } = useParams();
  const post = data.find((item) => item.id === id);
  console.log(post);
  const [isDark] = ctx.theme;

  // const [blogData,setBlogData] = props.blogData;
  // const post=blogData;
  // console.log(props);



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
const mybutton = document.getElementById("myBtn");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

  return (
    <>
    <div>
    <ReadingBar/>
    <div className={isDark ? "splitscreen-dark" : "splitscreen"}>
      
      <div className={isDark ? "left-split-dark" : "left-split"}></div>
      <div className={isDark ? "right-split-dark" : "right-split"}>
        {/* <Post key={post.id} ctx={props.ctx} post={post}/> */}
        <Post ctx={ctx} post={post} />
      </div>
    </div>
  </div>
  {/* <button onclick={()=>topFunction()} id="myBtn" title="Go to top">
    <span title="Go to Top"><TopIcon/></span>
    </button>  */}
  </>
    
  );
};

export default Blog;
