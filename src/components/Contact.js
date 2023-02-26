import React from "react";
import phone from '../images/call.png';
import mail from '../images/message.png';
import facebook from '../images/facebook.png';
import linkedin from '../images/linkedin.png';

export const ContactComponent = () => {
    return(
        <div>
            <section>
                <h1>KRISTINA ERIKSSON</h1>
                <h4>Student</h4>
            </section>
            <hr></hr>
            <section class="main-section">
                <section class="side-section">
                    <h2 class="info">Personinformation: </h2>
                    <p class="adress">Kristina Eriksson<br/>
                    Norrvägen 32<br/>
                    82460 Forsa<br/>
                    Sverige
                    </p>
                    <p class="contact">0730389194<br/>
                    wetonen@gmail.com<br/>
                    Körkort: Ja
                    </p>
                </section>
                <section class="main-content">
                    <h4>Sammanfattning</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Enim assumenda totam fuga pariatur ab numquam ipsum vero 
                        omnis possimus facere est distinctio dolores necessitatibus 
                        earum iure illum, iusto dolorum beatae?
                    </p>
                    <section className="container">
                        <section class="side-content">
                            <ul class="unList">
                                <li>
                                    <a href="tel:+4630389194">
                                        <img src={phone} role="link" alt="Telefon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:wetonen@gmail.com">
                                        <img src={mail} role="link" alt="Mail"/>
                                    </a>
                                </li>
                            </ul>
                        </section>
                        <section class="main">
                            <ul class="unList">
                                <li>
                                    <a href="https://www.facebook.com/kristina.eriksson.501" target="_blank" rel="noopener noreferrer">
                                        <img src={facebook} role="link" alt="Facebook"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/kristina-eriksson-6202321a5" target="_blank" rel="noopener noreferrer">
                                        <img src={linkedin} role="link" alt="LinkedIn"/>
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    )
}