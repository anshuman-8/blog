import React from "react";
// import { TopIcon } from "../Assets/icons";
import {Link} from "react-router-dom";
import "./blog.css";
import Post from "./Post";
import ReadingBar from "./ReadingBar";
import data from "../Content/_info";
import { useParams } from "react-router-dom";

const Blog = ({ctx}) => {
  const { id } = useParams();
  const post = data.find((item) => item.id === id);
  // console.log(post);
  const [isDark] = ctx.theme;




// window.onscroll = function() {scrollFunction()};
// const mybutton = document.getElementById("myBtn");
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   // document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// } 

  return (
    <>
    <div>
    {document.documentElement.scrollWidth>=700?<ReadingBar/>:<></>}
    <div className={isDark ? "splitscreen-dark" : "splitscreen"}>
      
      <div className={isDark ? "left-split-dark" : "left-split"}>
        {document.documentElement.scrollWidth>=700?<Link to="/blog" className={isDark?"backBtn-dark my-5":"backBtn"}>
         back
        </Link>:<></>}
      </div>
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
