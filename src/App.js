import Blog from "./Components/Blog";
import Navbar from "./Components/Navbar";
import { useState} from "react";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";



function App() {
  const [isDark, setIsDark] = useState(true);

  const ctx = {
    theme: [isDark, setIsDark],
  };

  return (<div className={isDark?"dark":""}>
    <BrowserRouter>
      <div className="bg-gray-200 dark:bg-teal-900 dark:text-white">
      <Navbar isDark={isDark} setIsDark={setIsDark}/>
      <Routes>
        <Route exact path="/blog" element={ <Home ctx={ctx}/>}/>
        <Route exact path='/blog/:id' element={<Blog  ctx={ctx}/>}/>
        <Route exact path="/blog/contact" element={<Contact/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  </div>
      

  );
}

export default App;
