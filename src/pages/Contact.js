import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Täytä kaikki pakolliset kentät.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Syötä voimassa oleva sähköpostiosoite.'
      });
      return;
    }
    
    // In a real app, you would send the form data to a server here
    // For this example, we'll just simulate a successful submission
    
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Kiitos viestistäsi! Olemme sinuun yhteydessä pian.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="page contact-page">
      <section className="page-header">
        <h1>Ota Yhteyttä</h1>
        <p>Haluamme kuulla sinusta. Ota yhteyttä meihin alla olevalla lomakkeella tai yhteystiedoillamme.</p>
      </section>
      
      <section className="contact-content">
        <div className="contact-info">
          <h2>Yhteystiedot</h2>
          
          <div className="contact-item">
            <h3>Sähköposti</h3>
            <p><a href="mailto:info@nuortenvisio.fi">info@nuortenvisio.fi</a></p>
          </div>
          
          <div className="contact-item">
            <h3>Puhelin</h3>
            <p>+358 XX XXX XXXX</p>
            <p className="contact-note">Palvelemme arkisin klo 9-17</p>
          </div>
          
          <div className="contact-item">
            <h3>Osoite</h3>
            <p>Nuorten Visio ry</p>
            <p>Esimerkkikatu 123</p>
            <p>00100 Helsinki</p>
          </div>
          
          <div className="contact-item">
            <h3>Sosiaalinen Media</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            </div>
          </div>
          
          <div className="contact-map">
            <h3>Löydä meidät</h3>
            <div className="map-placeholder">
              <p>Kartta tulee tähän</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Lähetä viesti</h2>
          
          {formStatus.submitted ? (
            <div className="form-success">
              <p>{formStatus.message}</p>
              <button 
                className="reset-button"
                onClick={() => setFormStatus({submitted: false, error: false, message: ''})}
              >
                Lähetä uusi viesti
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {formStatus.error && (
                <div className="form-error">
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Nimi *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Sähköposti *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Aihe</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Viesti *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="form-footer">
                <p className="required-note">* Pakolliset kentät</p>
                <button type="submit" className="submit-button">Lähetä</button>
              </div>
            </form>
          )}
        </div>
      </section>
      
      <section className="faq-contact">
        <h2>Usein Kysytyt Kysymykset</h2>
        
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Kuinka nopeasti vastaatte yhteydenottoihin?</h3>
            <p>Pyrimme vastaamaan kaikkiin yhteydenottoihin 1-2 arkipäivän kuluessa.</p>
          </div>
          
          <div className="faq-item">
            <h3>Voinko tulla käymään toimistollanne?</h3>
            <p>Kyllä, mutta suosittelemme varaamaan ajan etukäteen, jotta voimme varmistaa, että joku on paikalla sinua varten.</p>
          </div>
          
          <div className="faq-item">
            <h3>Miten voin liittyä Nuorten Visioon?</h3>
            <p>Voit hakea jäsenyyttä täyttämällä lomakkeen verkkosivuillamme tai ottamalla yhteyttä suoraan sähköpostitse.</p>
          </div>
          
          <div className="faq-item">
            <h3>Tarjoatteko työharjoittelupaikkoja?</h3>
            <p>Kyllä, tarjoamme säännöllisesti työharjoittelupaikkoja opiskelijoille. Lähetä meille avoimen hakemuksen.</p>
          </div>
        </div>
      </section>
      
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2>Tilaa uutiskirjeemme</h2>
            <p>Pysy ajan tasalla Nuorten Vision toiminnasta, tapahtumista ja uutisista.</p>
          </div>
          
          <div className="newsletter-form">
            <input type="email" placeholder="Sähköpostiosoitteesi" />
            <button className="newsletter-button">Tilaa</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;