import "./App.css";
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
  return (<div>
    <BrowserRouter>
      <div className={isDark===true?"App-dark":"App"}>
      <Navbar ctx={ctx}/>
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
