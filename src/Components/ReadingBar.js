// import React,{useState, useEffect} from 'react'
// import styled from "styled-components";

// const Bar = styled.div`
// position: fixed;
// height: 6px;
// border-radius: 0px 2px 0px 0px;
// width: 100vw;
// background: linear-gradient(
//   90deg,
//   rgba(109, 227, 219, 1) 0%,
//   rgba(132, 115, 177, 1) 100%,
//   rgba(3, 9, 112, 1) 100%
// );
// `;
// export default function ReadingBar() {


// useEffect(() => {
//     window.addEventListener("scroll", scrollHeight);
//     return () => window.removeEventListener("scroll", scrollHeight);
//   });

// const [width, setWidth] = useState(100);
// // scroll function
// const scrollHeight = () => {
//   var el = document.documentElement,
//     ScrollTop = el.scrollTop || document.body.scrollTop,
//     ScrollHeight = el.scrollHeight || document.body.scrollHeight;
//   var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
//   // store percentage in state
//   setWidth(percent);
// };

//   return (
//     <Bar style={{ width }}></Bar>
//   )
// }


///

import React,{useState, useEffect} from 'react'
import styled from "styled-components";

const Bar = styled.div`
position: fixed;
margin: 8vw 19vw;
border-radius: 10px;
width: 4px;
z-index: 9;
background: linear-gradient(
    0deg,
    rgba(109, 227, 219, 1) 0%,
    rgba(132, 115, 177, 1) 100%,
    rgba(3, 9, 112, 1) 100%
  );
`;

const FullBar = styled.div`
position: fixed;
margin: 8vw 19vw;
height: 60%;
border-radius: 10px;
width: 4px;
background-color:#818f91;
`;


export default function ReadingBar() {


useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  });

const [height, setHeight] = useState(1);
// scroll function
const scrollHeight = () => {
  var el = document.documentElement,
    ScrollTop = el.scrollTop || document.body.scrollTop,
    ScrollHeight = el.scrollHeight || document.body.scrollHeight;
  var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 60;
  // store percentage in state
  setHeight(percent);
};
    // console.log(height)
  return (
    <div >
        <Bar style={{ height:height+"%" }}>
            {/* <div className='mx-3'>{Math.round(height*(5/3))+"%"}</div> */}
        </Bar>
        <FullBar></FullBar>
    </div>
    
  )
}
