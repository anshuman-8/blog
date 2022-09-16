import React from 'react'


const ImageHandler = ({ children, src, alt,h,w}) => {
   
    const image=require(`../Assets/images/${src}`);
   
  return (
    <div className="text-center">
      <img src={image} className="rounded mx-auto block my-5 py-5 md:px-10 w-full" alt={alt}/>
    </div>
  )
}

export default ImageHandler;