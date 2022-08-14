import React from 'react';
import { TagIcon,CalenderIcon } from "../Assets/icons";


export default function BlogHead(props) {
    const post=props.post;
    const ctx=props.ctx;
  return (
    <header>
    <div className="article__cover">
      <div className="fs-1 fw-bold text-center my-5" style={ctx.theme.isDark?{color:"#cfd1d1",fontWeight:"800"}:{}}>{post.title}</div>

      <div className="row justify-content-md-start mb-3 mx-2 ">
       <div className='col-1' style={{width: "4.6%"}}> <TagIcon /></div>
      <div className='col-9'>{post.tags.map((tag)=>{return <span key={tag} className="badge bg-secondary mx-1">{tag}</span>})}</div>
      </div>

      <div className="row justify-content-md-start mx-2">
        <div className='col-1' style={{width: "4.7%"}}>
        <CalenderIcon/>
        </div>
      <div className="col-4">{post.date}</div>
      </div>
     
      <img
        src={require(`../Assets/images/${post.cover}`)}
        alt="my-cover"
      />
     
    </div>
  </header>
  )
}
