
import React,{useState, useEffect} from 'react'
import styled from "styled-components";

const Bar = styled.div`
position: fixed;
margin: 8vw 13vw;
border-radius: 10px;
width: 3px;
z-index: 9;
background: linear-gradient(
    0deg,
    rgba(20, 217, 203, 1) 0%,
    rgba(98, 76, 158, 1) 100%,
    rgba(1, 5, 71, 1) 100%
  );
`;

const FullBar = styled.div`
position: fixed;
margin: 8vw 13vw;
height: 60%;
border-radius: 10px;
width: 3px;
background-color:#505a5c;
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
  return (
    <div >
      {/* {window.innerHeight()<='750px'?} */}
        <Bar style={{ height:height+"%" }}>
            {/* <div className='mx-3'>{Math.round(height*(5/3))+"%"}</div> */}
        </Bar>
        <FullBar></FullBar>
    </div>
    
  )
}
