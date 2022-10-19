import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="App bg-gray-100">
      <Header/>
      <Banner />
      <Jobs />
    </div>
  );
}

export default App;

