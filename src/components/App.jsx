import React, { useState, useEffect } from 'react';
// import ReactGA from 'react-ga';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  settingData,
} from '../mock/data';

// ReactGA.initialize('G-BSGHYEH5S3');
// ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [setting, setSetting] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setSetting({ ...settingData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, setting }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
