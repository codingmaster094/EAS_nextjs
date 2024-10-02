import Image from 'next/image'
import team_bg from "../../../../public/img/team-bg.png";
import team_1 from "../../../../public/img/team-2.jpeg";
import team_2 from "../../../../public/img/team-1.jpeg";
import Link from 'next/link';

const page = () => {
  return (
    <>
         <section class="hero-banner">
            <div class="hero-wrapper">
                <div class="hero-img">
                    <Image src={team_bg} alt="hero"/>
                </div>
                <div class="hero-content">
                    <h1>Geschäftsführung / Board of Management</h1>
                </div>
            </div>
        </section>
        <div class="team py py-b">
            <div class="container">
                <div class="team-wrapper py">
                    <div class="team-box">
                        <div class="team-img">
                            <Image src={team_1} alt="team pepole"/>
                        </div>
                        <div class="team-content">
                            <div class="team-title">
                                <h2>Nicolae Tudor</h2>
                                <span>DIPL.-ING. (UNIV), DR. ING.</span>
                            </div>
                            <div class="team-text">
                                <p>Geschäftsführender und Gesellschafter <br/> EAS GmbH</p>
                            </div>
                            <div class="team-text">
                                <p>Unternehmer Softwareentwickler Wissenschaftler Projektmanager</p>
                            </div>
                            <div class="team-call">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.8038 13.8423L14.8263 12.8648C14.3379 12.3765 13.5463 12.3765 13.0588 12.8648L12.2904 13.6332C12.1188 13.8048 11.8588 13.8623 11.6371 13.7648C10.5238 13.2773 9.42378 12.5382 8.44295 11.5573C7.46628 10.5807 6.72961 9.48567 6.24128 8.3765C6.13961 8.14733 6.19878 7.87817 6.37628 7.70067L7.06461 7.01233C7.62378 6.45317 7.62378 5.66233 7.13545 5.174L6.15795 4.1965C5.50711 3.54567 4.45211 3.54567 3.80128 4.1965L3.25795 4.739C2.64045 5.3565 2.38295 6.24733 2.54961 7.13067C2.96128 9.30817 4.22628 11.6923 6.26711 13.7332C8.30795 15.774 10.6921 17.039 12.8696 17.4507C13.7529 17.6173 14.6438 17.3598 15.2613 16.7423L15.8038 16.1998C16.4546 15.549 16.4546 14.494 15.8038 13.8423V13.8423Z"
                                        stroke="#084887" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M10.833 5.82648C11.6922 5.81481 12.5555 6.13315 13.2113 6.78898"
                                        stroke="#084887" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M15.568 4.43237C14.2605 3.12487 12.5463 2.4707 10.833 2.4707"
                                        stroke="#084887" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M14.1734 9.1674C14.1851 8.30823 13.8668 7.4449 13.2109 6.78906"
                                        stroke="#084887" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M15.5684 4.43237C16.8759 5.73987 17.53 7.45404 17.53 9.16737"
                                        stroke="#084887" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <Link href="tel:+491746145760" aria-label=""><span>Telefon:</span> +49 174 614 57 60</Link>
                            </div>
                            <div class="team-call">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.5 5.66736V5.66736C2.5 6.16736 2.75 6.58402 3.16667 6.91736L8.16667 10.334C9.33333 11.084 10.75 11.084 11.9167 10.334L16.9167 7.00069C17.25 6.58403 17.5 6.16736 17.5 5.66736V5.66736C17.5 4.83403 16.8333 4.16736 16 4.16736H4C3.16667 4.16736 2.5 4.83403 2.5 5.66736Z"
                                        stroke="#084887" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M2.5 5.83398V14.1673C2.5 15.084 3.25 15.834 4.16667 15.834H15.8333C16.75 15.834 17.5 15.084 17.5 14.1673V5.83398"
                                        stroke="#084887" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M2.99023 15.3441L8.06857 10.2657" stroke="#084887" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.9668 10.3007L17.0101 15.344" stroke="#084887" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <Link href="mailto:nt@eas-corporation.com" aria-label=""><span>E-Mail:</span>
                                    nt@eas-corporation.com</Link>
                            </div>
                            <div class="team-text-cont">
                                <p>20 Jahre Automotive-Erfahrung als Führungskraft und Projektleiter in großen
                                    Automobilunternehmen
                                    15 Jahre Einkauf-und Supply-Chain-Management (SQM)
                                    Projekte in der Organisations-, System- und Prozesslandschaft
                                    Produktentwicklung und Produkt-Management-Systeme</p>
                            </div>
                        </div>
                    </div>

                    <div class="team-box">
                        <div class="team-img">
                        <Image src={team_2} alt="team pepole"/>
                        </div>
                        <div class="team-content">
                            <div class="team-title">
                                <h2>Volker P. Zimmerer</h2>
                                <span>DIPL.-BETRW. (FH), MBA (UNIV.)</span>
                            </div>
                            <div class="team-text">
                                <p>Geschäftsführender und Gesellschafter <br/> EAS GmbH</p>
                            </div>
                            <div class="team-text">
                                <p>Unternehmer Softwareentwickler Wissenschaftler Projektmanager</p>
                            </div>
                            <div class="team-call">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.8038 13.8423L14.8263 12.8648C14.3379 12.3765 13.5463 12.3765 13.0588 12.8648L12.2904 13.6332C12.1188 13.8048 11.8588 13.8623 11.6371 13.7648C10.5238 13.2773 9.42378 12.5382 8.44295 11.5573C7.46628 10.5807 6.72961 9.48567 6.24128 8.3765C6.13961 8.14733 6.19878 7.87817 6.37628 7.70067L7.06461 7.01233C7.62378 6.45317 7.62378 5.66233 7.13545 5.174L6.15795 4.1965C5.50711 3.54567 4.45211 3.54567 3.80128 4.1965L3.25795 4.739C2.64045 5.3565 2.38295 6.24733 2.54961 7.13067C2.96128 9.30817 4.22628 11.6923 6.26711 13.7332C8.30795 15.774 10.6921 17.039 12.8696 17.4507C13.7529 17.6173 14.6438 17.3598 15.2613 16.7423L15.8038 16.1998C16.4546 15.549 16.4546 14.494 15.8038 13.8423V13.8423Z"
                                        stroke="#084887" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M10.833 5.82648C11.6922 5.81481 12.5555 6.13315 13.2113 6.78898"
                                        stroke="#084887" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M15.568 4.43237C14.2605 3.12487 12.5463 2.4707 10.833 2.4707"
                                        stroke="#084887" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M14.1734 9.1674C14.1851 8.30823 13.8668 7.4449 13.2109 6.78906"
                                        stroke="#084887" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M15.5684 4.43237C16.8759 5.73987 17.53 7.45404 17.53 9.16737"
                                        stroke="#084887" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <Link href="tel:+491732448376" aria-label=""><span>Telefon:</span> +49 173 244 83 76</Link>
                            </div>
                            <div class="team-call">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.5 5.66736V5.66736C2.5 6.16736 2.75 6.58402 3.16667 6.91736L8.16667 10.334C9.33333 11.084 10.75 11.084 11.9167 10.334L16.9167 7.00069C17.25 6.58403 17.5 6.16736 17.5 5.66736V5.66736C17.5 4.83403 16.8333 4.16736 16 4.16736H4C3.16667 4.16736 2.5 4.83403 2.5 5.66736Z"
                                        stroke="#084887" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M2.5 5.83398V14.1673C2.5 15.084 3.25 15.834 4.16667 15.834H15.8333C16.75 15.834 17.5 15.084 17.5 14.1673V5.83398"
                                        stroke="#084887" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M2.99023 15.3441L8.06857 10.2657" stroke="#084887" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.9668 10.3007L17.0101 15.344" stroke="#084887" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <Link href="mailto:vpz@eas-corporation.com" aria-label=""><span>E-Mail:</span>
                                    vpz@eas-corporation.com</Link>
                            </div>
                            <div class="team-text-cont">
                                <p>20 Jahre Umsetzungserfahrung in uber 40 leistungs-und finanzwirtzschaftlichen
                                    Projekten als Unternehmer & Investor,
                                    Unternehmensberater und als Interims CEO, CRO, CFO, CHRO in der Automobil-und
                                    Zulieferindustrie, des Maschinen-und Anlagenbaus, der Metallverarbeitung und im
                                    Stahlbau. <br/>
                                    Begleitung von Unternehmern und Unternehmen in Sondersituationen; vor allem in allen
                                    Krisen-Phasen von der Stakeholder-Krise bis hin zur Umsetzung von
                                    Insolvenzverfahren.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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