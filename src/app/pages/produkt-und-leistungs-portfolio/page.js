
import Image from "next/image";
import productBG from "../../../../public/img/portfolio-bg.jpeg";
import product1 from "../../../../public/img/portfolio-bg2.jpeg";
import pr1 from "../../../../public/img/pr-1.png";
import pr2 from "../../../../public/img/portfolio-bg4.jpeg";
import product2 from "../../../../public/img/portfolio-bg3.jpeg";
import Portfolio_Caraousel from "@/component/Portfolio_Caraousel";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section class="hero-banner">
        <div class="hero-wrapper">
          <div class="hero-img">
            <Image src={productBG} alt="hero" />
          </div>
          <div class="hero-content">
            <h1>PRODUKT UND LEISTUNGS-PORTFOLIO </h1>
          </div>
        </div>
      </section>

      <section class="section product-dec py py-b">
        <div class="container">
          <div class="product-dec-wrapper py">
            <div class="com-title">
              <span> KAPITEL : 1 </span>
              <h2>Technischer Lösungsansatz</h2>
            </div>
            <div class="product-dami-text">
              <p>
                In der heutigen technologischen Landschaft sind Künstliche
                Intelligenz (KI) und neuronale Netzwerke von zentraler
                Bedeutung, da diese die Voraussetzung für den zeitgemäßen Abbau
                von organisatorischen Hürden und Schnittstellen sind.
              </p>
              <p>
                Die Enterprise Analytics Software GmbH hat eine vollintegrierte
                Analyse- und Monitoring-Softwarelösung entwickelt, die
                sicherstellt, dass die definierte Gewinn-Marge im Zuge der
                Kunden-Produktentwicklung realisiert wird:
              </p>
            </div>
            <div class="product-title">
              <h2>
                Digitale EAS KI-Agenten®, die unterschiedliche Aufgaben haben
                und diese lösen können (z.B. KI-Agent für Projekte, für
                Einkaufsobjekte, für Qualitätsmerkmale, Suche nach Duplikaten,
                etc.).{" "}
              </h2>
              <p>
                Die Agenten sind darauf ausgerichtet, effizient und präzise zu
                arbeiten, um die gewünschten Ergebnisse zu erzielen.
              </p>
            </div>
            <div class="product-img">
              <Image src={product1} alt="product image" />
            </div>
            <div class="product-title">
              <h2>
                EAS KI-Agenten® kommunizieren selbstständig und permanent im EAS
                Neuronalen-Netzwerk® untereinander.{" "}
              </h2>
            </div>
            <div class="product-blog">
              <p>
                Ein neuronales Netzwerk ist ein Modell, das dem menschlichen
                Gehirn nachempfunden ist. Es besteht aus Schichten von Neuronen,
                die miteinander verbunden sind. Diese Schichten verarbeiten
                Informationen und lernen aus den bereitgestellten Daten.
                Mathematische Operationen und Lernalgorithmen ermöglichen es dem
                Netzwerk, komplexe Muster und Zusammenhänge in den Daten zu
                erkennen und zu verstehen.
              </p>
              <p>
                Ähnlich wie Ameisen in einer Kolonie müssen die KI-Agenten
                effizient miteinander kommunizieren. Dies kann über digitale
                Signale, Nachrichtenübertragung oder andere Mechanismen
                erfolgen. Die transparente Informationsübertragung zwischen den
                Agenten ist entscheidend, um die Gesamtleistung des Systems zu
                optimieren.
              </p>
              <Portfolio_Caraousel/>
            </div>
            <div class="product-title">
              <h2>
                EAS KI-Agenten® kommunizieren selbstständig und permanent im EAS
                Neuronalen-Netzwerk® untereinander.{" "}
              </h2>
              <ul>
                <li>
                  verschiedene Zustände aus der Vergangenheit und die
                  Entwicklung über den Zeitablauf hinweg{" "}
                </li>
                <li>Plan-/ Ist-Vergleiche</li>
                <li>
                  Reifegradspiegel (z.B. 53% Stand Datenpflege,
                  Voraussichtlicher Ist-Preis ist heute 3,7% über Target-Preis
                  uvm.)
                </li>
                <li>
                  Präzise Simulationen für Prognosen, Szenarien,
                  Sensitivitäts-analysen und Stresstests von Änderungen von
                  Einflussgrößen des Produktes (wie z.B. Währungsentwicklung,
                  Rohstoffpreis-Veränderungen)
                </li>
              </ul>
              <div class="dami-text">
                <p>
                  Die EAS-Lösungen können durch die Verwendung fortschrittlicher
                  Algorithmen und „Machine-Learning-Technologies“ komplexe
                  Zusammenhänge erkennen und prognostizieren, um Ihr Unternehmen
                  oder Projekt optimal zu planen und zu steuern und um fundierte
                  Entscheidungen auf Basis objektiver Ist-Daten zu treffen.{" "}
                  <br />
                  Verlassen Sie sich auf unsere innovative Technologie, um
                  fundierte Entscheidungen zu treffen und erfolgreich in die
                  Zukunft zu blicken.
                </p>
                <p>
                  Insgesamt zeigt die Vision von KI-Agenten, die kooperativ und
                  intelligent agieren, um komplexe Aufgaben zu bewältigen,
                  großes Potenzial. Die Verbindung von KI und neuronalen
                  Netzwerken verspricht eine aufregende Zukunft für EAS Lösung.
                </p>
              </div>
            </div>
            <div class="unter-analy-box product-analy-box">
              <div class="com-title">
                <span> KAPITEL : 2 </span>
                <h2>USER INTERFACE AND DASHBOARD </h2>
              </div>
              <div class="product-texts">
                <div class="pr-text">
                  <p>Das Dashboard bietet zwei Analyse-Ebenen: </p>

                  <ul>
                    <li>Geschäftsebene :</li>
                  </ul>
                  <p>
                    Auf Geschäftsebene ermöglicht das Dashboard eine umfassende
                    Bewertung der gesamten Unternehmenssituation, indem es alle
                    relevanten Prozessdaten von verschiedenen Produkten und
                    Geschäftsbereichen zusammenführt und aggregiert. <br />
                    Es Können gezielt GeschäftsBereiche identifiziert werden,
                    die nicht optimal funktionieren. hier ermöglicht die
                    software eine visualisierung aller Ebenen von
                    Geschäftsbereichen, Projekten, Stücklisten, baugruppe oder
                    sogar auf einzelTeil.{" "}
                  </p>
                </div>
                <Image src={pr1} alt="product analy" />
              </div>
              <div class="pr-text">
                <ul>
                  <li>Prozessebene :</li>
                </ul>
                <p>
                  Auf Prozessebene erlaubt DIE EAS Software eine detaillierte
                  Analyse bis auf einzel-Prozess-ebene, um die schwachstellen
                  lokalisieren und somit handlungsfelder definieren zu können.
                  es erlaubt gezielte, punktgenaue eingriffe auf Geschäfts- und
                  ProzessEbene zur sicherung der effektivität, zur Steigerung
                  der Effizienz und zur Beseitigung von Engpässen.
                </p>
              </div>
            </div>
            <div class="product-line">
              <div class="com-title">
                <span> KAPITEL : 3 </span>
                <h2>ENTWICKLUNG EAS SOFTWARE UND DASHBOARD </h2>
              </div>
              <div class="analytics-text">
                <p>
                  Bei den Herstellern der Automobilindustrie besteht zunehmender
                  bedarf, die Gewinnmarge deren produkte zu sichern. Analysen
                  von eas haben gezeigt, dass das eingesetzte Material und die
                  vorprodukte unvorhersehbaren einflussgrössen und damit risiken
                  unterliegt, die sich direkt auf das kalkulatorische
                  produktergebnis auswirken.
                </p>
                <p>
                  Das Produkt als Hauptentität des letztendlichen
                  Unternehmenserfolges ist in der vergangenheit zunehmend
                  verloren gegangen. weitere detaillierte Untersuchungen
                  zeigten, dass die Gewinnmarge unmittelbar durch den
                  Materialpreis und die Materialverfügbarkeit beeinflusst
                  werden.
                </p>
                <Image src={product2} alt="product blog" />
                <p>
                  <strong>
                    Die Wirtschaftskrisen von 2009, 2019 und die Corona-Pandemie
                    im Jahr 2020 haben viele Unternehmen — teilweise
                    existenziell — in der profitabilität belastet. Essentiell
                    ist hier die mangelhafte Materialwirtschaft aufzuführen, die
                    zum einbruch der Gewinnmargen; teils in den defizitären
                    bereich der Produkte führte.
                  </strong>
                </p>
              </div>
            </div>

            <div class="product-line">
              <div class="com-title">
                <span> KAPITEL : 4 </span>
                <h2>DEFIZITE AKTUELLER MARKTLÖSUNGEN </h2>
              </div>
              <div class="pr-blog-boxs">
                <div class="pr-blog-box">
                  <div class="pr-title">
                    <p>Ersetzen Nr. 1</p>
                  </div>
                  <div class="pr-dec">
                    <p>
                      Bestehende Lösungen bilden die Einzelbauteilebene ab; der
                      Bezug zum Produkt ist nicht vorhanden.
                    </p>
                  </div>
                </div>

                <div class="pr-blog-box">
                  <div class="pr-title">
                    <p>Ersetzen Nr. 2</p>
                  </div>
                  <div class="pr-dec">
                    <p>
                      Die eingesetzte Software bietet nur Lösungen für einzelne
                      Prozesschritte des mehrstufigen Projekteinkaufsprozesses,
                      was eine vollumfängliche Digitalisierung und schnelle
                      Reaktionen in kritischen Phasen erschwert.
                    </p>
                  </div>
                </div>

                <div class="pr-blog-box">
                  <div class="pr-title">
                    <p>Ersetzen Nr. 3</p>
                  </div>
                  <div class="pr-dec">
                    <p>
                      Hochsensible Einkaufsdaten müssen durch den Anwender auf
                      teilweise cloudbasierten Servern (China) an die
                      Dienstleister übertragen werden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-line">
              <div class="com-title">
                <span> KAPITEL : 4 </span>
                <h2>DEFIZITE AKTUELLER MARKTLÖSUNGEN </h2>
              </div>
              <Image src={pr2} alt="product blog" />
            </div>
          </div>
        </div>
      </section>

      <section class="news-latter ">
        <div class="container">
          <div class="ns-latter">
            <div class="ns-content">
              <div class="ns-title">
                <h2>Termin vereinbaren</h2>
                <p>
                Gerne stellen wir Ihnen unser Produkt in einer Videokonferenz oder <br/>
                einem persönlichen Termin vor.
                </p>
              </div>
              <Link href="/" aria-label="">VEREINBAREN SIE EINEN TERMIN</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
