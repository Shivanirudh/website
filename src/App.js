import React from 'react';
import Spring from 'react-spring';
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  const data = {
    firstName: "SHIVANIRUDH",
    lastName: "S G",
    copyright: "Copyright 2020"
  }
  return (
    <div className="container-app">
      <Background/>
      <HomePage data={data}/>
      <Footer data={data}/>
    </div>
    

  );
}

export default App;
