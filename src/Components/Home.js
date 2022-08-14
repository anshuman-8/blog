import React from "react";
import "./blog.css";
import data from "../Content/_info.js";
import {Link} from "react-router-dom";

const Home = (props) => {
  const ctx = props.ctx;
  
  return (

    <div className="container" >
      <h2 className="m-4">All my blogs</h2>
      <div className="row row-cols-1 row-cols-md-3 g-5 mb-5">
        {data.map((item) => {
          return (
            <div key={item.id}  >
              <div className={ctx.theme.isDark===false?"card":" card card-dark"} style={{ width: "25rem",cursor:'pointer',textDecoration:"none" }}  >
                <img
                  src={require("../Assets/images/test-img.png")}
                  className="bg-image hover-zoom"  
                  alt="Cover"
                />
                <div className="card-body">
                  <h3 className="card-title mb-3">{item.title}</h3>
                  <h6 className="card-subtitle mb-2 text-muted">{item.tags.map((tag)=>{return <span key={tag} style={{margin:"3px"}}className="badge bg-secondary">{tag}</span>})}</h6>
                  <p className="card-text">{item.description}</p>
                 
                  <Link type="button" to={`/post/${item.id}`} key={item.id} className="btn btn-outline-dark">Read</Link>
                  {/* <Link type="button" to={`/post/${item.id}`}  className="btn btn-dark btn-outline-secondary"><h6>Read</h6></Link> */}

                </div> 
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
