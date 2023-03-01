import React from "react";
import jag from '../images/DSC_0465.JPG';

 
export const InfoComponent = () => {
    return (
        <section className="main-section">
            <figure className="side-section">
            <img className="profile-img" src={jag} alt="Profilbild på mig"/>
            </figure>
            <section className="main-content">
                <h2>KRISTINA ERIKSSON</h2>
                <h3>Systemutvecklare .NET, Student</h3>
                    <p className="main-text">
                    Som hårt studerande systemutvecklare och teknikintresserad
                    är jag väldigt intresserad av en LIA-plats där jag får möjligheten
                    att utvecklas och växa på!
                    <br/><br/>
                    Jag är en kvinna mitt i livet som studerar Systemutveckling .NET med AI-kompetens
                    på Edugrade i Hudiksvall och har nu påbörjat andra terminen av fyra på utbildningen.
                    Det är en utbildning blandat med teori och praktik och undervisningen bedrivs både på
                    engelska och svenska. Som studerande letar jag nu den bästa LIA-platsen som kan ge mig
                    den bästa möjliga chans till utveckling inför mitt nya kommande yrkesliv.
                    <br/><br/>
                    Jag skulle beskriva mig som nyfiken och är en mycket drivande, engagerad och ambitiös person.
                    Jag ogillar att lämna något halvdant och går därför helhjärtat in i varje projekt jag tar mig an.
                    Jag har lätt för att samarbeta med andra människor, men jag tycker även om att jobba självständigt.
                    <br/><br/>
                    Utöver ett brinnande intresse för IT och teknik tycker jag om att åka snowboard, trädgårdsskötsel och resa.
                    Jag är en kreativ människa och vill gärna sysselsätta mig med något, alltifrån att måla om ett rum eller bygga om en dator
                    och jag räds inte för att testa nya saker. 
                    <br/><br/>
                    Jag hoppas få möjligheten att komma på besök och presentera mig personligen.
                    <br/><br/>
                    Med vänlig hälsning
                    <br/><br/>
                    Kristina Eriksson
                    </p>
            </section>
        </section>
    )
}