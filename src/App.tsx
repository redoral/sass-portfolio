import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { useRef } from 'react';

export interface RefsI {
  refs: { headerRef: any; aboutRef: any; projectsRef: any; contactRef: any };
}

const App: React.FC = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = { headerRef, aboutRef, projectsRef, contactRef };

  return (
    <>
      <Header refs={refs} />
      <About refs={refs} />
      <Projects refs={refs} />
      <Contact refs={refs} />
      <Footer refs={refs} />
    </>
  );
};

export default App;
