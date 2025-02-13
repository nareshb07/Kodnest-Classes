import { useState } from 'react'
import Home from './Home.jsx'

function App(){
  let name = 'Akash';
  return (
    <>
      <h3> Username : {name}</h3>
      < Home />
        {/* <h1>Hello world</h1> */}
    </>
  );
}

export default App
