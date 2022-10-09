import React from "react";
import Post from "./Post";
import ReadingBar from "./ReadingBar";
import data from "../Content/_info";
import { useParams } from "react-router-dom";
import SidePanel from "./SidePanel";

const Blog = ({ctx}) => {
  const { id } = useParams();
  const post = data.find((item) => item.id === id);

  return (
    <>
    <div className="mx-auto">
      {/* <span className="hidden md:inline">
      {/* <ReadingBar/> */}
      {/* </span> */} 
    <div className= "flex flex-row p-auto dark:bg-[#134343] bg-[#d2e0e1] ">
      
      <div className="hidden md:inline fixed w-0 md:w-[23vw] md:pb-5 md:pt-5 ">
      <SidePanel post={post}/>
      <ReadingBar/>
      </div>{/* // left */}

      <div className=" w-full md:w-[90%] md:my-2.5 md:py-3 md:pl-[20vw] overflow-y-auto mx-auto">
        <Post ctx={ctx} post={post} />
      </div> {/* right */}

    </div>
  </div>
  </>
    
  );
};

export default Blog;
