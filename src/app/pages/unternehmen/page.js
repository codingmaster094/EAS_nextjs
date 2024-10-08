import unterBG from "../../../../public/img/unter-bg.jpeg";
import unter1 from "../../../../public/img/unter-1.png";
import unter2 from "../../../../public/img/unter-2.png";
import unter3 from "../../../../public/img/unter-3.png";
import unter4 from "../../../../public/img/unter-4.png";
import unter5 from "../../../../public/img/unter-5.png";
import unter6 from "../../../../public/img/unter-6.png";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
    <section class="hero-banner">
        <div class="hero-wrapper">
            <div class="hero-img">
                <Image src={unterBG} alt="hero"/>
            </div>
            <div class="hero-content">
                <h1>ENTWICKLUNG IN DEN UNTERNEHMEN </h1>
            </div>
        </div>
    </section>
    <div class="unter-analytes py py-b">
        <section class="unter-analy py py-b">
            <div class="container">
                <div class="analytics-wrapper">
                    <div class="com-title">
                        <span> WER WIR ALS UNTERNEHMEN SIND </span>
                        <h2>Komplexität nimmt an allen Stellen überproportional und weitergehend zu </h2>
                    </div>
                    <div class="unter-analy-box">
                        <ul>
                            <li>Marktanforderungen (Innovation, KI, politische Anforderungen, Umwelt,
                                Nachhaltigkeit)
                            </li>
                            <li>Marktanforderungen und Produktkomplexität per se</li>
                            <li>Immer mehr unvorhersehbare und unkalkulierbare Einflussgrößen mit Wechselwirkungen
                                in
                                der Wertschöpfungskette und im Stakeholder-Netzwerk</li>
                            <li>Rahmenbedingungen (z.B. ESG, Compliance, Lieferkettengesetz u.v.m.)</li>
                            <li>Abschätzung und Antizipierung von künftigen Serienpreisen von Beschaffungsumfängen
                                zunehmend schwieriger</li>
                        </ul>
                        <Image src={unter1} alt="unter image"/>
                    </div>
                </div>
            </div>
        </section>

        <section class="unter-analy py py-b">
            <div class="container">
                <div class="analytics-wrapper">
                    <div class="com-title">
                        <span> RESSOURCENVERBRAUCH </span>
                        <h2>Ressourcenverbrauch steigt in allen Unternehmensbereichen und Im gesamten
                            Wertschöpfungskette und Stakeholder-Netzwerk</h2>
                    </div>
                    <div class="unter-analy-box">
                        <div class="analytics-text">
                            <p>Daten, IT-Systeme, Personal, Organisationseinheiten vor allem indirekte Bereiche etc.
                                Zusätzliche Organisationseinheiten mit eigenen Strukturen, Datenbanken, Daten und
                                damit
                                auch Redundanz werden geschaffen und müssen verwaltet werden (Bsp.
                                Standardkomponente
                                wird mit unterschiedlichen Artikelnummern in verschiedenen Systemen verwaltet)
                            </p>
                        </div>
                        <div class="unter-img">
                        <Image src={unter2} alt="unter image"/>
                        <Image src={unter3} alt="unter image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="unter-analy py">
            <div class="container">
                <div class="analytics-wrapper py py-b">
                    <div class="com-title">
                        <span> VERBRAUCH </span>
                        <h2>Entscheidungen in komplexen Organisationseinheiten mit vielen Ebenen, Prozessen und
                            Schnittstellen werden auf Grundlage unvollständiger, falscher und manchmal
                            widersprüchlicher
                            Informationen getroffen. </h2>
                    </div>
                    <div class="unter-analy-box">
                        <div class="analytics-text">
                            <p>“Objektivierte Subjektivität“ als Entscheidungsgrundlage produktwirtschaftlicher
                                Überlegungen
                                Entscheidungszeiten werden immer länger”
                            </p>
                        </div>
                        <Image src={unter4} alt="unter image"/>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <section class="unter-about py">
        <div class="container">
            <div class="unter-about-wrapper">
                <div class="unter-about-title">AUSWIRKUNGEN DER GENANNTEN ENTWICKLUNG IN UNTERNEHMEN </div>
                <div class="unter-about-boxs">
                    <div class="unter-about-box">
                        <div class="unter-about-no">
                            01
                        </div>
                        <div class="unter-about-text">
                            <p>Die Gewinnmarge erodiert im Zeitablauf und kann bis zu Beginn der Serienfertigung
                                nicht aufrechterhalten werden</p>
                        </div>
                    </div>
                    <div class="unter-about-box">
                        <div class="unter-about-no">
                            02
                        </div>
                        <div class="unter-about-text">
                            <p>Zulieferumfänge (Material, Bauteile, Baugruppen etc.) stehen
                                nicht rechtzeitig zum SOP / für die Serienfertigung zur Verfügung </p>
                        </div>
                    </div>
                    <div class="unter-about-box">
                        <div class="unter-about-no">
                            03
                        </div>
                        <div class="unter-about-text">
                            <p>Keine Lösung für den Produktentwicklungsprozess (PLC), den
                                aktuellen Status aller produktrelevanten Informationen
                                jederzeit darstellen zu können (z.B. Material- oder Teilepreis, Marge,
                                Teileverfügbarkeit, Terminabweichungen, fehlende Zertifizierungen, Freigaben u.v.m.)
                            </p>
                        </div>
                    </div>
                    <div class="unter-about-box">
                        <div class="unter-about-no">
                            04
                        </div>
                        <div class="unter-about-text">
                            <p>Vielzahl an Systemen, Softwares, Schnittstellenprobleme, Zugriffsberechtigungen,
                                nicht durchgängige Prozesse, Daten- und Informationsverluste</p>
                        </div>
                    </div>
                </div>
                <div class="unter-content">
                    <p>Bisher gibt es keine vollintegrierte und prozessübergreifende Software-Lösung, welche alle
                        das Produkt betreffenden Informationen bündelt, aggregiert / darstellt und einen sicheren
                        und reibungslosen Durchlauf der erforderlichen Entwicklungsprozesse gewährleistet, obschon
                        zahlreiche Krisen, wie z.B. die Wirtschaftskrise 2009 oder Corona 2020 gezeigt haben, dass
                        es dringend erforderlich wäre, hier systematische Absicherungsmaßnahmen einzuleiten und
                        umzusetzen
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="unter-analy py py-b">
        <div class="container">
            <div class="analytics-wrapper">
                <div class="unter-analy-box">
                    <div class="com-title">
                        <span> WISSEN ÜBER UNSER UNTERNEHMEN </span>
                        <h2 class="unter">DAS UNTERNEHMEN </h2>
                    </div>
                    <div class="unter-img">
                        <Image src={unter5} alt="unter image"/>
                        <div class="unter-text">
                            <ul>
                                <li>Dr. Nicolae Tudor und Volker P. Zimmerer, MBA beschließen 2024 eine gemeinsame
                                    Zusammenarbeit in Form der Entwicklung und des Vertriebes von neuronaler,
                                    KI-gestützter, integrativer Software Analyse Lösungen für Industrieunternehmen

                                </li>
                                <li>Eine bestehende Gesellschaft aus dem Netzwerk von Volker P. Zimmerer wird zum
                                    gemeinsamen Rechtsträger und zur Enterprise Analytics Software GmbH umbenannt
                                </li>
                                <li>Die Gesellschaft hat ihre Büroräume in der Stuttgarter Innenstadt im Collection
                                    Business Center in der Königstraße 27, wo sich auch die Unternehmensberatung ZMC
                                    von Volker P. Zimmerer befindet </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="unter-analy unter-analy-ti py py-b">
        <div class="container">
            <div class="analytics-wrapper">
                <div class="com-title">
                    <span> WER WIR ALS UNTERNEHMEN SIND </span>
                    <h2 class="unter">KUNDEN UND MÄRKTE </h2>
                </div>
                <p><strong>Unsere Softwarelösungen sind für Kunden der unterschiedlichsten Märkte geeignet. Folgende
                        Prämissen sind aber zu erfüllen:</strong></p>

                <ul>
                    <li>Produkte sind hinreichend komplex (bestehen aus vielen Bauteilen und Baugruppen)</li>
                    <li>Hinreichend komplexe Beschaffungsstruktur (Vielzahl von Lieferanten und verschiedenste
                        Beschaffungsumfänge)</li>
                    <li>Produkte werden mit Hilfe eines mehrstufigen, häufigen Simultaneous-Engineering-Ansatzes im
                        Rahmen eines Produktentwicklungs- / Produktentstehungsprozesses – zumeist im
                        Wertschöpfungskettennetzwerk – gemeinsam mit dem Kunden und dem Lieferanten bis zum „Start
                        of Production (SOP)“ / zur Serienreife entwickelt</li>
                    <li>Produkt kann im Zuge einer Auftragsfertigung oder einer Serienfertigung erstellt werden
                        (Kreuzfahrtschiff, Maschine, Kfz in Serie, typische Systeme, Baugruppen oder Bauteile von
                        0,5-Tier-, 1st-Tier- oder 2nd-Tier-Lieferanten)</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="unter-analy py">
        <div class="container">
            <div class="analytics-wrapper">
                <div class="unter-analy-box">
                    <div class="unter-img">
                        <div class="unter-img-text">
                            <div class="com-title">
                                <span> WER WIR ALS UNTERNEHMEN SIND </span>
                                <h2 class="unter">BRANCHEN </h2>
                            </div>
                            <ul>
                                <li>Automobilindustrie</li>
                                <li>Automobilzulieferindustrie</li>
                                <li>Nutzfahrzeugindustrie</li>
                                <li>Luft- & Raumfahrt-Industrie</li>
                                <li>Baumaschinen- und Landmaschinenindustrie</li>
                                <li>Rüstungsindustrie</li>
                                <li>Schiffahrtsindustrie</li>
                                <li>Maschinen- und Anlagenbau</li>
                                <li>Pharma-, Chemieindustrie und Medizintechnik</li>
                                <li>Lebensmittelindustrie</li>
                                <li>Bauindustrie</li>
                                <li>Bahnindustrie</li>
                            </ul>
                        </div>

                        <div class="unter-postion-img">
                            <Image src={unter6} alt="unter image"/>
                        </div>
                    </div>

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
                        <p>Gerne stellen wir Ihnen unser Produkt in einer Videokonferenz oder<br/>
                        einem persönlichen Termin vor.</p>
                    </div>
                    <Link href="/" aria-label="">VEREINBAREN SIE EINEN TERMIN</Link>
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default page