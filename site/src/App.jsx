import './App.css';
import './Responsive.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WIP from './components/WIP';
import About from './components/About';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <WIP />
            <About />
        </div>
    );
}

export default App;
