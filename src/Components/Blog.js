import React from "react";
import Post from "./Post";
import ReadingBar from "./ReadingBar";
import data from "../Content/_info";
import { useParams } from "react-router-dom";

const Blog = ({ctx}) => {
  const { id } = useParams();
  const post = data.find((item) => item.id === id);

  return (
    <>
    <div>
      <span className="hidden md:inline">
      <ReadingBar/>
      </span>
    <div className= "flex flex-row p-auto dark:bg-[#134343] bg-[#d2e0e1]">
      
      <div className="w-0 md:w-[20%] md:pb-5 md:pt-5"></div>{/* // left */}

      <div className=" w-full md:w-[80%] md:m-2.5 md:py-3 md:px-12">
        <Post ctx={ctx} post={post} />
      </div> {/* right */}

    </div>
  </div>
  </>
    
  );
};

export default Blog;
