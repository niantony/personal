import './App.css';
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience';
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
