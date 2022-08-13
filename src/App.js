import "./App.css";
import Blog from "./Components/Blog";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Home from "./Components/Home";
import ReadingBar from "./Components/ReadingBar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [blogData, setBlogData] = useState({data:"empty"});
  const ctx = {
    theme: [isDark, setIsDark],
  };
  // console.log(blogData);
  return (
    //   <BrowserRouter><div className="App">
    //   <Navbar ctx={ctx}/>
    //   {/* <Blog ctx={ctx}/> */}
    //   <Routes>
    //     <Route exact path="/" element={ <Home ctx={ctx}/>}/>
    //     <Route exact path='/blog' element={<Blog/>}/>
    //   </Routes>

    // </div></BrowserRouter>

    <div className="App">
      
      <Navbar ctx={ctx} />
      {/* <Blog ctx={ctx}/> */}
      {/* {blogData.data==="empty"?<Home ctx={ctx} blogData={[blogData,setBlogData]}/>:<Blog ctx={ctx} blogData={[blogData,setBlogData]}/>} */}
      {/* <Blog /> */}
      <ReadingBar/>
      <Blog ctx={ctx}/>
      
    </div>
  );
}

export default App;
