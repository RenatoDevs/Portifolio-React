
import './App.css';
import Container from './components/Container/Container';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import ScrollWrapper from './components/ScrollWrapper/ScrollWrapper';
import Formation from './sections/Formation/Formation';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <Container customClass='scroll-snap'>
      <ScrollWrapper>
        <Home />
        <About />
        <Formation />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </ScrollWrapper>
    </Container>
  );
}

export default App;
