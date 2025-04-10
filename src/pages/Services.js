import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="page services-page">
      <section className="page-header">
        <h1>Palvelumme</h1>
        <p>Tutustu Nuorten Vision tarjoamiin palveluihin ja siihen, miten voimme auttaa sinua.</p>
      </section>
      
      <section className="services-content">
        <div className="service-intro">
          <p>
            Nuorten Visio tarjoaa monipuolisia palveluita, jotka on suunniteltu tukemaan nuoria heidän 
            kehityksessään ja tulevaisuuden suunnittelussaan. Kaikki palvelumme ovat räätälöitävissä 
            yksilöllisiin tarpeisiin sopiviksi.
          </p>
        </div>
        
        <div className="service-item">
          <div className="service-icon">
            <div className="icon-placeholder"></div>
          </div>
          <div className="service-details">
            <h2>Koulutusohjelmat</h2>
            <p>
              Tarjoamme monipuolisia koulutusohjelmia, jotka auttavat sinua kehittämään taitojasi 
              ja valmistautumaan tulevaisuuden haasteisiin. Koulutusohjelmamme kattavat erilaisia
              aiheita, kuten:
            </p>
            <ul>
              <li>Digitaaliset taidot ja ohjelmointi</li>
              <li>Yrittäjyys ja liiketoimintataidot</li>
              <li>Viestintä- ja esiintymistaidot</li>
              <li>Taloudenhallinta ja henkilökohtainen talous</li>
              <li>Työnhaku ja urasuunnittelu</li>
            </ul>
            <p>
              Koulutuksemme ovat käytännönläheisiä ja tähtäävät konkreettisten taitojen kehittämiseen.
              Voit osallistua ryhmäkoulutuksiin tai pyytää henkilökohtaista opastusta.
            </p>
            <div className="service-cta">
              <Link to="/contact" className="service-button">Kysy lisää koulutuksista</Link>
            </div>
          </div>
        </div>
        
        <div className="service-item">
          <div className="service-icon">
            <div className="icon-placeholder"></div>
          </div>
          <div className="service-details">
            <h2>Henkilökohtainen Mentorointi</h2>
            <p>
              Mentorointiohjelmamme yhdistää sinut kokeneen ammattilaisen kanssa, joka tarjoaa 
              henkilökohtaista ohjausta ja tukea. Mentorit ovat sitoutuneita auttamaan sinua 
              saavuttamaan tavoitteesi ja navigoimaan elämäsi haasteissa.
            </p>
            <p>
              Mentorointi voi keskittyä seuraaviin alueisiin:
            </p>
            <ul>
              <li>Urapolun suunnittelu ja ammatillinen kehitys</li>
              <li>Opintojen ohjaus ja akateeminen tuki</li>
              <li>Elämänhallinta ja henkilökohtainen kasvu</li>
              <li>Verkostoituminen ja ammatilliset suhteet</li>
            </ul>
            <p>
              Mentorit tapaavat mentoroitaviaan säännöllisesti ja ovat saatavilla tukemaan 
              sinua matkallasi. Mentorointiohjelma räätälöidään aina yksilöllisten tarpeidesi mukaan.
            </p>
            <div className="service-cta">
              <Link to="/contact" className="service-button">Hae mentorointiohjelmaan</Link>
            </div>
          </div>
        </div>
        
        <div className="service-item">
          <div className="service-icon">
            <div className="icon-placeholder"></div>
          </div>
          <div className="service-details">
            <h2>Työpajat ja Tapahtumat</h2>
            <p>
              Järjestämme säännöllisesti työpajoja ja tapahtumia, joissa voit verkostoitua 
              muiden nuorten ja ammattilaisten kanssa, oppia uusia taitoja ja saada inspiraatiota.
            </p>
            <p>
              Tapahtumamme sisältävät:
            </p>
            <ul>
              <li>Teematyöpajat ajankohtaisista aiheista</li>
              <li>Verkostoitumistapahtumat eri alojen ammattilaisten kanssa</li>
              <li>Uratapahtumat ja rekrytointimessut</li>
              <li>Inspirointipuheita ja seminaareja</li>
              <li>Yhteisölliset tapahtumat ja vapaa-ajan aktiviteetit</li>
            </ul>
            <p>
              Tapahtumamme ovat erinomainen tapa laajentaa verkostoasi, jakaa kokemuksia
              ja saada uusia ideoita omaan kehitykseesi.
            </p>
            <div className="service-cta">
              <Link to="/contact" className="service-button">Tutustu tuleviin tapahtumiin</Link>
            </div>
          </div>
        </div>
        
        <div className="service-item">
          <div className="service-icon">
            <div className="icon-placeholder"></div>
          </div>
          <div className="service-details">
            <h2>Nuorten Yhteisö</h2>
            <p>
              Nuorten Vision yhteisö on turvallinen ja kannustava ympäristö, jossa nuoret 
              voivat tukea toisiaan, jakaa kokemuksiaan ja rakentaa merkityksellisiä suhteita.
            </p>
            <p>
              Yhteisöön kuuluminen tarjoaa:
            </p>
            <ul>
              <li>Vertaistukea ja kannustusta</li>
              <li>Yhteisiä projekteja ja tiimityötä</li>
              <li>Verkostoitumismahdollisuuksia</li>
              <li>Säännöllisiä tapaamisia ja yhteistä toimintaa</li>
              <li>Online-yhteisön, jossa voit olla yhteydessä muihin nuoriin</li>
            </ul>
            <p>
              Yhteisöömme ovat tervetulleita kaikki 15-25 -vuotiaat nuoret, jotka haluavat
              kehittyä ja tukea toisiaan matkalla kohti tulevaisuutta.
            </p>
            <div className="service-cta">
              <Link to="/contact" className="service-button">Liity yhteisöön</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pricing-section">
        <h2>Palveluiden Hinnoittelu</h2>
        <p>
          Nuorten Visio on voittoa tavoittelematon organisaatio, ja pyrimme tarjoamaan 
          palvelumme mahdollisimman edullisesti kaikille nuorille. Monet palveluistamme 
          ovat täysin maksuttomia.
        </p>
        
        <div className="pricing-table">
          <div className="pricing-column">
            <h3>Maksuttomat palvelut</h3>
            <ul>
              <li>Yhteisön jäsenyys</li>
              <li>Avoimet työpajat ja tapahtumat</li>
              <li>Perustason mentorointi</li>
              <li>Uraohjauskonsultaatio</li>
            </ul>
          </div>
          
          <div className="pricing-column">
            <h3>Maksulliset palvelut</h3>
            <ul>
              <li>Intensiiviset koulutusjaksot</li>
              <li>Räätälöidyt mentorointiohjelmat</li>
              <li>Erikoistuneet työpajat</li>
              <li>Henkilökohtainen valmennus</li>
            </ul>
            <p className="pricing-note">
              *Hinnat vaihtelevat ohjelman mukaan. Tarjoamme stipendejä ja alennuksia
              taloudellista tukea tarvitseville.
            </p>
          </div>
        </div>
      </section>
      
      <section className="faq-section">
        <h2>Usein Kysytyt Kysymykset</h2>
        
        <div className="faq-item">
          <h3>Kuka voi osallistua Nuorten Vision ohjelmiin?</h3>
          <p>
            Palvelumme on suunnattu pääasiassa 15-25 -vuotiaille nuorille. Jotkin ohjelmat
            voivat olla kohdennettuja tietyille ikäryhmille tämän sisällä.
          </p>
        </div>
        
        <div className="faq-item">
          <h3>Miten voin hakea mentorointiohjelmaan?</h3>
          <p>
            Voit hakea mentorointiohjelmaan täyttämällä hakulomakkeen verkkosivuillamme
            tai ottamalla suoraan yhteyttä meihin. Järjestämme hakuinfoja säännöllisesti.
          </p>
        </div>
        
        <div className="faq-item">
          <h3>Millä alueilla toimitte?</h3>
          <p>
            Toimimme pääkaupunkiseudulla, mutta monet palveluistamme ovat saatavilla
            myös verkossa, joten voit osallistua mistä päin Suomea tahansa.
          </p>
        </div>
        
        <div className="faq-item">
          <h3>Tarjoatteko palveluita muilla kielillä kuin suomeksi?</h3>
          <p>
            Kyllä, monet palveluistamme ovat saatavilla myös ruotsiksi ja englanniksi.
            Ota yhteyttä, jos tarvitset palveluja muilla kielillä.
          </p>
        </div>
      </section>
      
      <section className="cta-section">
        <h2>Valmiina aloittamaan?</h2>
        <p>Ota yhteyttä meihin tänään ja kerro, miten voimme auttaa sinua saavuttamaan tavoitteesi.</p>
        <Link to="/contact" className="cta-button">Ota yhteyttä</Link>
      </section>
    </div>
  );
}

export default Services;