import "./App.css";
import Blog from "./Components/Blog";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isDark, setIsDark] = useState(false);
  const ctx = {
    theme: [isDark, setIsDark],
  };
  return (
      <BrowserRouter>
      <div className="App">
      <Navbar ctx={ctx}/>
      <Routes>
        <Route exact path="/" element={ <Home ctx={ctx}/>}/>
        <Route path='/post/:id' element={<Blog  ctx={ctx}/>}/>
      </Routes>

    </div>
    </BrowserRouter>

  );
}

export default App;
