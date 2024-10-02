import React from 'react';
import Image from 'next/image';
import kotacktBG from '../../../../public/img/kotackt-bg.png';
import call from '../../../../public/img/call.svg';
import mail from '../../../../public/img/mail.svg';
import location from '../../../../public/img/location.svg';
import map from '../../../../public/img/map.png';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-banner docu-banner">
        <div className="hero-wrapper">
          <div className="hero-img">
            <Image src={kotacktBG} alt="hero" />
          </div>
          <div className="hero-content">
            <h1>STANDORTE UND KONTAKT</h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact py py-b">
        <div className="container">
          <div className="contact-wrapper py py-b">
            <div className="contact-text">
              <div className="com-title">
                <span>KONTAKT US</span>
                <h2>
                  Wir freuen uns auf Ihre Fragen und vereinbaren gerne einen Termin mit Ihnen zusammen
                </h2>
              </div>
              <div className="contact-detail">
                {/* Contact Details - Call */}
                <div className="cd-box">
                  <div className="cd-img">
                    <Image src={call} alt="call" />
                  </div>
                  <div className="cd-title">
                    <p>Rufen Sie uns an</p>
                    <Link href="tel:+8551044444">Tel:  + 49 711 – 490 50 391</Link>
                    <Link href="/">Fax: + 49 711 – 490 50 25</Link>
                  </div>
                </div>

                {/* Contact Details - Email */}
                <div className="cd-box">
                  <div className="cd-img">
                    <Image src={mail} alt="email" />
                  </div>
                  <div className="cd-title">
                    <p>E-Mail-Informationen</p>
                    <Link href="mailto:contact@eas-corporation.com">contact@eas-corporation.com</Link>
                  </div>
                </div>

                {/* Contact Details - Address */}
                <div className="cd-box">
                  <div className="cd-img">
                    <Image src={location} alt="location" />
                  </div>
                  <div className="cd-title">
                    <p>Adresse</p>
                    <p>
                    Königstraße 27 <br/>
                    70173 Stuttgart
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3>Get In Touch</h3>
              <form>
                <div className="in-filds">
                  <div className="in-fild">
                    <input type="text" placeholder="Ihr Name" />
                  </div>
                  <div className="in-fild">
                    <input type="email" placeholder="Ihre E-Mail" />
                  </div>
                </div>
                <div className="in-fild">
                  <input type="tel" placeholder="Ihre Telefonnummer" />
                </div>
                <div className="in-fild">
                  <input type="text" placeholder="Betreff" />
                </div>
                <div className="in-fild">
                  <textarea placeholder="Nachricht"></textarea>
                </div>
                <div className="in-button">
                  <input type="submit" value="NACHRICHTEN SENDEN" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map py">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-img">
              <Image src={map} alt="google map" />
            </div>
            <div className="maping-text">
              <p>BLICK AUF UNSERE GESCHÄFTSRÄUME IN STUTTGART</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="news-latter">
        <div className="container">
          <div className="ns-latter">
            <div className="ns-content">
              <div className="ns-title">
                <h2>Termin vereinbaren</h2>
                <p>Gerne stellen wir Ihnen unser Produkt in einer Videokonferenz oder <br/>
                einem persönlichen Termin vor.</p>
              </div>
              <Link href="/" aria-label="">
                VEREINBAREN SIE EINEN TERMIN
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
