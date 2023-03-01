import React from "react";
import moped from '../images/moped.jpg';
import setup from '../images/setup.jpg';

export const HomeComponent = () => {
    return(
        <section className="main-section">
            <figure className="side-section">
                <img src={moped} className="profile-photo" alt="Bild på mig"/>
            </figure>
            <section className="main-content">
                <h2>Välkommen till min hemsida!</h2>
                <p className="main-text">Jag är en glad tjej med stort intresse för IT och teknik.
                Jag är intresserad av ett jobb där jag kan få möjligheten att utvecklas och växa!</p>
                <p className="main-text">Jag skulle beskriva mig som nyfiken och är en mycket drivande, engagerad och ambitiös person.
                Jag ogillar att lämna något halvdant. Jag har lätt för att samarbeta med andra människor,
                men jag tycker även om att jobba självständigt.</p>
                <figure className="setup">
                <img className="setup-photo" src={setup} alt="Computer setup"/>
            </figure>
            </section>
        </section>
    )
}