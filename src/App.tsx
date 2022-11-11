import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
