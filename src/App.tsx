import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Coverage from './components/Coverage';
import Progress from './components/Progress';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Project />
        <Coverage />
        <Progress />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
