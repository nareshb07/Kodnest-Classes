import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route linkpath='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>

      
     

    </div>
  );
}

export default App;
