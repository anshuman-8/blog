import React from "react";
import data from "../Content/_info.js";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" ">
    <div className=" mx-5 md:mx-20" style={{height:"100vh"}} >
      <h2 className="md:text-3xl text-lg my-10 mx-10">All my blogs</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
        {data.map((item) => {
          return (
            <div key={item.id} className="flex flex-col justify-start cursor-pointer  mx-5 md:mx-10 max-w-lg border border-slate-400 rounded-xl dark:bg-slate-200/30 bg-teal-500/5 hover:scale-110 hover:shadow-xl duration-300 my-5 min-w-[250px]" onClick={()=>navigate(`/blog/${item.id}`)} >
                <img
                  src={require(`../Assets/images/${item.cover}`)}
                  className="w-[450px] rounded-xl mx-auto"  
                  alt="Cover"
                />
                <div className="card-body  mx-4  ">
                  <h3 className="text-2xl font-bold my-2">{item.title}</h3>
                  <h6 className="space-x-3 my-3 text-sm ">{item.tags.map((tag)=>{return <span key={tag} className="bg-slate-400 my-2 break-words px-2 py-1 rounded-xl">{tag}</span>})}</h6>
                  <p className="text-lg font-semibold dark:text-slate-200 text-slate-700 mb-5">{item.description}</p>
                </div> 
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Home;
