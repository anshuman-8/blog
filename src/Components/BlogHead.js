import React from 'react';
import { TagIcon,CalenderIcon } from "../Assets/icons";


export default function BlogHead(props) {
    const post=props.post;
  return (
    <header>
    <div className="my-5 flex-col">
      <div className="text-3xl md:text-5xl font-bold text-center mt-8 text-gray-800 dark:text-gray-200 mb-14 leading-relaxed" >{post.title}</div>

      <div className="flex flex-row my-5 align-middle">
       <div> <TagIcon/></div>
      <div className='ml-3'>{post.tags.map((tag)=>{return <span key={tag} className="bg-slate-600 text-slate-200 rounded-xl text-sm px-2 md:px-3 py-1 md:py-2 mx-1">{tag}</span>})}</div>
      </div>

      <div className="flex flex-row my-5 mb-8">
        <div className=''>
        <CalenderIcon/>
        </div>
      <div className="ml-4">{post.date}</div>
      </div>
     
      <img
        src={require(`../Assets/images/${post.cover}`)}
        alt="post-cover"
        className='mb-10 shadow-2xl'
      />
     
    </div>
  </header>
  )
}
