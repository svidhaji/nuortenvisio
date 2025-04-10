import logo from './assets/logo.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="Nuorten Visio" />
            <h1>Nuorten Visio</h1>
          </div>
          
          <button className="mobile-menu-button" onClick={toggleMenu}>
            <span className="menu-icon"></span>
          </button>
          
          <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Etusivu</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>Tietoa Meistä</Link></li>
              <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Palvelut</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Ota Yhteyttä</Link></li>
            </ul>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-grid">
            <div className="footer-info">
              <div className="footer-logo">
                <img src={logo} alt="Nuorten Visio" />
                <h2>Nuorten Visio</h2>
              </div>
              <p>Tukemassa nuorten tulevaisuutta ja potentiaalia kehittyä yhteiskunnan aktiivisiksi jäseniksi.</p>
            </div>
            
            <div className="footer-links">
              <h3>Sivusto</h3>
              <ul>
                <li><Link to="/">Etusivu</Link></li>
                <li><Link to="/about">Tietoa Meistä</Link></li>
                <li><Link to="/services">Palvelut</Link></li>
                <li><Link to="/contact">Ota Yhteyttä</Link></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3>Palvelut</h3>
              <ul>
                <li><Link to="/services">Koulutusohjelmat</Link></li>
                <li><Link to="/services">Mentorointi</Link></li>
                <li><Link to="/services">Työpajat</Link></li>
                <li><Link to="/services">Nuorten Yhteisö</Link></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h3>Yhteystiedot</h3>
              <p><strong>Osoite:</strong> Esimerkkikatu 123, 00100 Helsinki</p>
              <p><strong>Puhelin:</strong> +358 XX XXX XXXX</p>
              <p><strong>Sähköposti:</strong> info@nuortenvisio.fi</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">&copy; {new Date().getFullYear()} Nuorten Visio. Kaikki oikeudet pidätetään.</p>
            <div className="footer-legal">
              <a href="/privacy">Tietosuojaseloste</a>
              <span className="separator">|</span>
              <a href="/terms">Käyttöehdot</a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </Router>
  );
}


export default App;