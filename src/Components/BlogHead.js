import React from 'react';
import { TagIcon,CalenderIcon } from "../Assets/icons";


export default function BlogHead(props) {
    const post=props.post;
  return (
    <header>
    <div className="article__cover">
      <div className="fs-1 fw-bold text-center mt-5 mb-4">{post.title}</div>

      <div className="row justify-content-md-start mb-3">
       <div className='col-1'> <TagIcon /></div>
      <div className='col-9'>{post.tags.map((tag)=>{return <span key={tag} className="badge bg-secondary mx-1">{tag}</span>})}</div>
      </div>

      <div className="row justify-content-md-start">
        <div className='col-1'>
        <CalenderIcon/>
        </div>
      <div className="col-2">{post.date}</div>
      </div>
     
      <img
        src={require(`../Assets/images/${post.cover}`)}
        alt="my-cover"
      />
     
    </div>
  </header>
  )
}
