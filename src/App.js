
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Features from './components/features/Features';
import Advertisement from './components/Advertisement/Advertisement'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Features/>
      <Advertisement/>
      <Footer/>
     
    </div>
  );
}

export default App;
