import React from 'react';
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

function App() {
  const data = {
    firstName: "SHIVANIRUDH",
    lastName: "S G",
    copyright: "Copyright 2020"
  }
  return (
    <div className="container-app">
      <HomePage data={data}/>
      <Footer data={data}/>
    </div>
    

  );
}

export default App;
