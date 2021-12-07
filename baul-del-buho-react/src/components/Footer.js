import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Esta es para icono estaticos fa
import {faPhoneVolume, faEnvelope} from '@fortawesome/free-solid-svg-icons';
//Esta es para iconos de marcas fab
import {faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import "../index.css";

function Footer () {

    return (
        <footer>
                <div class="content">
                    <div class="left box">
                        <div class="upper">
                                <div class="topic">Sobre nosotros</div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, id modi. Dolorum, quia
                                    deserunt vitae cum aperiam suscipit sapiente porro repellat facilis illum at fugiat alias eos
                                    quod quibusdam! Vel.</p>
                        </div>
                        <div class="lower">
                                <div class="topic">Contáctanos</div>
                                <div class="phone">
                                    <a href="/">
                                        <div class="icono-footer">
                                            <FontAwesomeIcon icon={faPhoneVolume} label="&nbsp; &nbsp; +1 76484377"/>
                                            &nbsp; +1 76484377
                                        </div>
                                    </a>
                                </div>
                                <div class="email">
                                    <a href="mailto:contacto@etecno.com">
                                        <div class="icono-footer">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                            &nbsp; contacto@etecno.com
                                        </div>
                                    </a>
                                </div>
                        </div>
                    </div>

                    <div class="middle box">
                        <div><a href="/">Home</a></div>
                        <div><a href="/">Tienda</a></div>
                        <div><a href="/">Carrito</a></div>
                        <div><a href="/">Contáctenos</a></div>
                        <div class="media-icons">
                                <a href="/">
                                    <div class="icono-footer">
                                        <FontAwesomeIcon icon={faFacebook}/>
                                    </div>
                                </a>
                                <a href="/">
                                    <div class="icono-footer">
                                        <FontAwesomeIcon icon={faInstagram}/>
                                    </div>
                                </a>
                                <a href="/">
                                    <div class="icono-footer">
                                        <FontAwesomeIcon icon={faTwitter}/>
                                    </div>
                                </a>
                                <a href="/">
                                    <div class="icono-footer">
                                        <FontAwesomeIcon icon={faYoutube}/>
                                    </div>
                                </a>
                                <a href="/">
                                    <div class="icono-footer">
                                        <FontAwesomeIcon icon={faLinkedin}/>
                                    </div>
                                </a>
                                <p>Baúl del Buho©️ 2021 All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>

    )
}

export default Footer;
