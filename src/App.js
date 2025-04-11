import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function RandomImage() {
  const[url, setUrl] = useState("https://picsum.photos/200/300");
  return(){
    <img src={url} alt="Random" />
  }
}

function App() {
  return (
    <>{}
    <RandomImgage />
    </>
  );
}

export default App;
