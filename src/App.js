import './App.css';
import Blog from './Components/Blog';
import Navbar from './Components/Navbar';
import {useState} from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const ctx={
    theme:[isDark,setIsDark],
  };
  return (
    <div className="App">
      <Navbar ctx={ctx}/>
      <Blog ctx={ctx}/>
    </div>
  );
}

export default App;
