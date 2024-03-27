import './app.scss'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';

const App = () => {
  return <div className='app'>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id='About'>
      <About />
    </section>
    <section id='Experience'>
      <Experience />
    </section>
    <div id='Portfolio'>
      <Portfolio />
    </div>
    <section id="Contact">
      <Contact />
    </section>
  </div>;
  
};

export default App;
