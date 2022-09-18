import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./app.scss";
import React, { useState } from 'react';


function App() {
  const [page, setPage] = useState("Intro")
  function displayPage() {
    if (page === "Intro") {
      return <Intro />
    }
    if (page === "Portfolio") {
      return <Portfolio />
    }
    if (page === "Work") {
      return <Work />
    }
    if (page === "Contact") {
      return <Contact />
    }
  }
  return (
    <div className="app">
      <Header setPage = {setPage}/>
      <div className="sections">
        {displayPage()}        
      </div>
      <Footer />
    </div>
  );
}

export default App;
