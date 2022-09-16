import React from "react";
import data from "../Content/_info.js";
import {Link,useNavigate} from "react-router-dom";

const Home = (props) => {
  const ctx = props.ctx;
  const navigate = useNavigate();
  return (
    <div className=" ">
    <div className=" mx-5 md:mx-20" style={{height:"100vh"}} >
      <h2 className="md:text-3xl text-lg my-10 mx-10">All my blogs</h2>
      <div className="grid md:grid-cols-3 mx-10">
        {data.map((item) => {
          return (
            <div key={item.id} className="flex flex-col justify-start cursor-pointer mx-10 max-w-lg border border-slate-400 rounded-xl dark:bg-slate-200/30 bg-teal-500/5 hover:scale-110 hover:shadow-xl duration-300" onClick={()=>navigate(`/blog/${item.id}`)} >
             
                <img
                  src={require(`../Assets/images/${item.cover}`)}
                  className="w-[450px] rounded-xl mx-auto"  
                  alt="Cover"
                />
                <div className="card-body  mx-4  ">
                  <h3 className="text-2xl font-bold my-2">{item.title}</h3>
                  <h6 className="space-x-3 my-3 text-sm">{item.tags.map((tag)=>{return <span key={tag} className="bg-slate-400 my-2 px-2 py-1 rounded-xl">{tag}</span>})}</h6>
                  <p className="text-lg font-semibold dark:text-slate-200 text-slate-700 mb-5">{item.description}</p>
                </div> 
            </div>
          );
        })}
      </div>
    </div>
    <footer className="h-20 py-8 bg-black"  >
    <div className='flex flex-row items-center justify-center space-x-10' style={{ margin: "0px auto",position:"absolute",width:"100%"}}>
        <a href="https://anshuman-8.github.io/"><img src="https://img.icons8.com/fluency/30/000000/web.png" alt="Website"/></a>
        <a className='mx-5' href="anshuman8swain@gmail.com"><img src="https://img.icons8.com/color/30/000000/gmail-new.png" alt="Gmail"/></a>
        <a href="https://github.com/anshuman-8"><img src="https://img.icons8.com/color/30/000000/github--v1.png" alt="GitHub"/></a>
        <a className='mx-5' href="https://twitter.com/Anshuman_8_"><img src="https://img.icons8.com/color/30/000000/twitter--v1.png" alt="Twitter"/></a>
        <a href="https://www.linkedin.com/in/anshuman-swain-1529b2219/"><img src="https://img.icons8.com/fluency/30/000000/linkedin.png" alt="LinkedIn"/></a>
    </div>
    </footer>
    </div>
  );
};

export default Home;
