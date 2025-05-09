import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import CookieConsent from './components/cookieConsent/CookieConsent';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <CookieConsent />
    </>
  );
}

export default App;
