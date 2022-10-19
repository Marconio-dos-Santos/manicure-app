import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Jobs from "./components/Jobs";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App bg-gray-100">
      <Header/>
      <Banner />
      <Jobs />
      <Gallery />
    </div>
  );
}

export default App;

