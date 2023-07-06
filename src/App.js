import React, { useState, useEffect } from 'react'
import './App.css';
import Container from './components/Container/Container';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Formation from './sections/Formation/Formation';
import ProjectPage from './sections/ProjectPage/ProjectPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []);

  return (
    <Container customClass='column'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/formation' element={<Formation />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='projects/project/:id' element={<ProjectPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
