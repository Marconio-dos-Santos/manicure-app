import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Jobs from "./components/Jobs";
import Gallery from "./components/Gallery";
import Treatments from "./components/Treatments";

function App() {
  return (
    <div className="App bg-gray-100">
      <Header/>
      <Banner />
      <Jobs />
      <Gallery />
      <Treatments />
    </div>
  );
}

export default App;

