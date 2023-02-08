import './App.css';
import './Responsive.css';
import Header from './components/Header';
import Hero from './components/Hero';
//import WIP from './components/WIP';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Games from './components/Games';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <About />
            <Projects />
            <Games />
            <Footer />
        </div>
    );
}

export default App;
