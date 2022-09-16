import Blog from "./Components/Blog";
import Navbar from "./Components/Navbar";
import { useState,useEffect} from "react";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";



function App() {

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(
        (window.matchMedia("(prefers-color-scheme:light)").matches
          ? false
          : true)
    );
  }, []);


  const ctx = {
    theme: [isDark, setIsDark],
  };

  return (<div className={isDark?"dark ":""}>

    <BrowserRouter>
      <div className="bg-gray-200 dark:bg-teal-900 dark:text-white min-h-screen pb-10">
      <Navbar isDark={isDark} setIsDark={setIsDark}/>
      <Routes>
        <Route exact path="/blog" element={ <Home />}/>
        <Route exact path='/blog/:id' element={<Blog  ctx={ctx}/>}/>
        <Route exact path="/blog/contact" element={<Contact/>}/>
      </Routes>
    </div>  
    </BrowserRouter>

    <footer className="h-20 py-8 bg-black relative bottom-0 left-0"  >
    <div className='flex flex-row items-center justify-center space-x-10' style={{ margin: "0px auto",position:"absolute",width:"100%"}}>
        <a href="https://anshuman-8.github.io/"><img src="https://img.icons8.com/fluency/30/000000/web.png" alt="Website"/></a>
        <a className='mx-5' href="mailto:anshuman8swain@gmail.com"><img src="https://img.icons8.com/color/30/000000/gmail-new.png" alt="Gmail"/></a>
        <a href="https://github.com/anshuman-8"><img src="https://img.icons8.com/color/30/000000/github--v1.png" alt="GitHub"/></a>
        <a className='mx-5' href="https://twitter.com/Anshuman_8_"><img src="https://img.icons8.com/color/30/000000/twitter--v1.png" alt="Twitter"/></a>
        <a href="https://www.linkedin.com/in/anshuman-swain-1529b2219/"><img src="https://img.icons8.com/fluency/30/000000/linkedin.png" alt="LinkedIn"/></a>
    </div>
    </footer>

  </div>
      

  );
}

export default App;
