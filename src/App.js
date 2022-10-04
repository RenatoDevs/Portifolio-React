
import './App.css';
import Container from './components/Container/Container';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Formation from './sections/Formation/Formation';
import Skills from './sections/Skills/Skills';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <Container customClass='column'>
      <Home />
      <About />
      <Formation />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
