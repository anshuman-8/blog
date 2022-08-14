import React from 'react'
// import image from '../Assets/images/test-img.png'

const ImageHandler = ({ children, src, alt,h,w}) => {
    // console.log(src);
    const image=require(`../Assets/images/${src}`);
    const style={
        width: "100%",
        // boxShadow: "0 10px 10px rgba(0, 0, 0, 0.406)",
        margin: "3vh 2vh",
        /* padding: 10px; */
        display: "block",
    }

  return (
    <div className="text-center">
      <img src={image} style={style} className="rounded mx-auto d-block" alt={alt}/>
    </div>
  )
}

export default ImageHandler;