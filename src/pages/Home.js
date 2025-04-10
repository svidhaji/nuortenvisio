import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page home-page">
      <section className="hero black-white-hero">
        <div className="hero-content">
          <h1>Nuorten Visio</h1>
          <p className="hero-subtitle">Tulevaisuuden rakentajat</p>
          <p className="hero-description">Tuemme nuoria löytämään oman polkunsa ja rakentamaan valoisampaa tulevaisuutta</p>
          <div className="hero-buttons">
            <Link to="/about" className="primary-button">Lue Lisää</Link>
            <Link to="/contact" className="secondary-button">Ota Yhteyttä</Link>
          </div>
        </div>
      </section>
      
      <section className="mission-section">
        <div className="container">
          <h2 className="section-title">Tehtävämme</h2>
          <div className="mission-content">
            <p className="mission-text">
              Nuorten Visio on omistautunut nuorten potentiaalin vapauttamiseen. 
              Tarjoamme tukea, resursseja ja yhteisön, jossa jokainen nuori voi menestyä
              ja löytää oman tiensä elämässä.
            </p>
          </div>
        </div>
      </section>
      
      <section className="features black-white-features">
        <div className="container">
          <h2 className="section-title">Miten voimme auttaa</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Koulutus</h3>
              <p>Tarjoamme koulutusta erilaisilla aloilla ja autamme sinua löytämään oman polkusi.</p>
              <Link to="/services" className="feature-link">Lue lisää →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Mentorointi</h3>
              <p>Kokeneet mentorit tukevat kehitystäsi ja auttavat sinua saavuttamaan tavoitteesi.</p>
              <Link to="/services" className="feature-link">Lue lisää →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Yhteisö</h3>
              <p>Olet osa turvallista ja kannustavaa yhteisöä, jossa jokainen saa olla oma itsensä.</p>
              <Link to="/about" className="feature-link">Lue lisää →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Työpajat</h3>
              <p>Käytännönläheiset työpajat tarjoavat konkreettisia taitoja ja uusia näkökulmia.</p>
              <Link to="/services" className="feature-link">Lue lisää →</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="impact-section">
        <div className="container">
          <h2 className="section-title">Vaikutuksemme</h2>
          <div className="impact-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <p className="stat-description">Nuorta on saanut tukea ohjelmistamme</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <p className="stat-description">Kokenutta mentoria verkostossamme</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">24</div>
              <p className="stat-description">Työpajaa ja tapahtumaa vuodessa</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">85%</div>
              <p className="stat-description">Osallistujista löytää selkeän suunnan tulevaisuudelle</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials black-white-testimonials">
        <div className="container">
          <h2 className="section-title">Kokemuksia</h2>
          <div className="testimonial-slider">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Nuorten Visio auttoi minua löytämään oman suuntani elämässä. Mentoroinnin ansiosta löysin unelma-ammattini ja sain itsevarmuutta tulevaisuuden suunnitteluun."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"></div>
                <div className="author-details">
                  <p className="author-name">Matti, 19</p>
                  <p className="author-role">Opiskelija</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Mentorointi antoi minulle itsevarmuutta ja taitoja työelämään. Olen todella kiitollinen kaikesta tuesta ja ohjauksesta, jota olen saanut Nuorten Vision kautta."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"></div>
                <div className="author-details">
                  <p className="author-name">Liisa, 22</p>
                  <p className="author-role">Yrittäjä</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="partners-section">
        <div className="container">
          <h2 className="section-title">Yhteistyökumppanimme</h2>
          <div className="partners-grid">
            <div className="partner-logo"></div>
            <div className="partner-logo"></div>
            <div className="partner-logo"></div>
            <div className="partner-logo"></div>
            <div className="partner-logo"></div>
          </div>
        </div>
      </section>
      
      <section className="cta-section black-white-cta">
        <div className="container">
          <h2>Valmiina ottamaan seuraavan askeleen?</h2>
          <p>Ota yhteyttä meihin tänään ja kerro, miten voimme auttaa sinua saavuttamaan tavoitteesi.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">Ota yhteyttä</Link>
            <Link to="/services" className="secondary-button">Tutustu palveluihimme</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;