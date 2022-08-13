import React from 'react'
import image from '../Assets/images/test-img.png'

const ImageHandler = ({ children, src, alt,h,w}) => {
    // console.log(src);
    // const image=require({src});
    const style={
        width: "100%",
        // boxShadow: "0 10px 10px rgba(0, 0, 0, 0.406)",
        margin: "3vh 2vh",
        /* padding: 10px; */
        display: "block",
    }

    // Import all images in image folder
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

    const images = importAll(require.context('../Assets/images', false, /\.(gif|jpe?g|svg|png)$/));
  return (
    <div className="text-center">
  <img src={image} style={style} className="rounded mx-auto d-block" alt={alt}/>
    </div>
  )
}

export default ImageHandler;