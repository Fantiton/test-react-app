import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function RandomImage() {
  const[url, setUrl] = useState("https://picsum.photos/200/300");
  function reload(){
    setUrl("https://picsum.photos/200/300?random=" + Math.random());
  }
  return(
    <img src={url} onClick={reload} alt="Random" />
  )
}

function App() {
  return (
    <>{}
    <RandomImage />
    </>
  );
}

export default App;
