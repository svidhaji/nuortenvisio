import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="page about-page">
      <section className="page-header">
        <h1>Tietoa Meistä</h1>
        <p>Tutustu Nuorten Vision tarinaan, arvoihin ja tiimiin.</p>
      </section>
      
      <section className="about-content">
        <div className="about-section">
          <h2>Meidän Tarinamme</h2>
          <p>
            Nuorten Visio perustettiin vuonna 2023 vastauksena kasvavaan tarpeeseen tukea nuoria 
            heidän kriittisissä elämänvaiheissaan. Perustajamme Antti Virtanen huomasi, että 
            monet nuoret kamppailevat tulevaisuuden suunnittelun kanssa ilman riittävää tukea 
            ja ohjausta.
          </p>
          <p>
            Aluksi aloitimme pienellä mentorointiohjelmalla, jossa vapaaehtoiset ammattilaiset 
            auttoivat paikallisia nuoria. Pian kysyntä palveluillemme kasvoi, ja pystyimme 
            laajentamaan toimintaamme kattamaan koulutusohjelmia, työpajoja ja yhteisötapahtumia.
          </p>
          <p>
            Tänään Nuorten Visio on kasvava organisaatio, joka on sitoutunut auttamaan 
            jokaista nuorta löytämään oman polkunsa ja rakentamaan valoisaa tulevaisuutta.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Arvomme</h2>
          <div className="values-container">
            <div className="value-card">
              <h3>Yhdenvertaisuus</h3>
              <p>Uskomme, että jokainen nuori ansaitsee samat mahdollisuudet menestyä elämässään, 
              riippumatta heidän taustastaan tai lähtökohdistaan.</p>
            </div>
            <div className="value-card">
              <h3>Tuki</h3>
              <p>Tarjoamme jatkuvaa ja henkilökohtaista tukea kaikille yhteisömme jäsenille. 
              Olemme sitoutuneet kulkemaan nuorten rinnalla heidän matkallaan.</p>
            </div>
            <div className="value-card">
              <h3>Kehitys</h3>
              <p>Uskomme jatkuvaan oppimiseen ja kehittymiseen. Kannustamme jokaista ylittämään 
              itsensä ja saavuttamaan täyden potentiaalinsa.</p>
            </div>
            <div className="value-card">
              <h3>Yhteisöllisyys</h3>
              <p>Rakennamme vahvaa yhteisöä, jossa jokainen tuntee olonsa tervetulleeksi ja 
              arvostetuksi. Yhdessä olemme vahvempia.</p>
            </div>
          </div>
        </div>
        
        <div className="about-section">
          <h2>Tiimimme</h2>
          <p>Nuorten Vision takana on joukko omistautuneita ammattilaisia, jotka uskovat nuorten potentiaaliin.</p>
          
          <div className="team-members">
            <div className="team-member">
              <div className="member-image placeholder"></div>
              <h3>Antti Virtanen</h3>
              <p>Perustaja & Johtaja</p>
              <p className="member-bio">Antilla on 15 vuoden kokemus nuorisotyöstä. Hän on intohimoinen luomaan mahdollisuuksia nuorille.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image placeholder"></div>
              <h3>Maria Korhonen</h3>
              <p>Koulutusjohtaja</p>
              <p className="member-bio">Maria on koulutuksen asiantuntija, jolla on vahva tausta opettamisessa ja opetussuunnitelmien kehittämisessä.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image placeholder"></div>
              <h3>Juha Mäkinen</h3>
              <p>Mentorointiohjelman Johtaja</p>
              <p className="member-bio">Juha koordinoi mentorointiohjelmaamme ja auttaa nuoria löytämään sopivat mentorit heidän tarpeisiinsa.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image placeholder"></div>
              <h3>Liisa Järvinen</h3>
              <p>Yhteisövastaava</p>
              <p className="member-bio">Liisa vastaa yhteisömme hyvinvoinnista ja järjestää tapahtumia, jotka yhdistävät nuoria.</p>
            </div>
          </div>
        </div>
        
        <div className="about-section">
          <h2>Liity meihin</h2>
          <p>Jos haluat tukea työtämme tai osallistua toimintaamme, ota meihin yhteyttä. Yhdessä voimme tehdä eron nuorten elämässä.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button">Ota yhteyttä</Link>
            <Link to="/services" className="secondary-button">Tutustu palveluihimme</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;