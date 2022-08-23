import React from "react";
import "./blog.css";
import data from "../Content/_info.js";
import {Link,useNavigate} from "react-router-dom";

const Home = (props) => {
  const ctx = props.ctx;
  const navigate = useNavigate();
  return (
    <div className="home">
    <div className="container" style={{height:"100vh"}} >
      <h2 className="m-4">All my blogs</h2>
      <div className={"row row-cols-1 row-cols-md-3 g-5 mb-5"}>
        {data.map((item) => {
          return (
            <div key={item.id} onClick={()=>navigate(`/blog/${item.id}`)} >
              <div className={ctx.theme.isDark===false?"card":" card card-dark"} style={{cursor:'pointer',textDecoration:"none" }}  >
                <img
                  src={require(`../Assets/images/${item.cover}`)}
                  className="card-image"  
                  alt="Cover"
                />
                <div className="card-body">
                  <h3 className="fw-bold card-title mb-3">{item.title}</h3>
                  <h6 className="card-subtitle mb-2 text-muted">{item.tags.map((tag)=>{return <span key={tag} style={{margin:"3px"}}className="badge bg-secondary">{tag}</span>})}</h6>
                  <p className="card-text">{item.description}</p>
                 
                  {/* <Link type="button" to={`/blog/${item.id}`} key={item.id} className="btn btn-outline-dark">Read</Link> */}
                  {/* <Link type="button" to={`/post/${item.id}`}  className="btn btn-dark btn-outline-secondary"><h6>Read</h6></Link> */}

                </div> 
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <footer className="page-footer fix-bottom"  style={{backgroundColor:"black", height:"10vh", alignContent:"justify"}}>
    <div className='my-4 d-flex align-items-center justify-content-center' style={{ margin: "0px auto",position:"absolute",width:"100%"}}>
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
