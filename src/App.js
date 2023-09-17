import './App.css';
import About from './components/About';
import MainPage from './components/MainPage';
import Education from './components/Education';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App-container">
      <MainPage />
      <About />
      <Education />
      <Skills />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;
