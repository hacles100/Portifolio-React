import React from "react";
import '../styles/components/information.sass';

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const Information = () => {

    return(
        <section id="information">
            
            <div className="info-card">
                <AiFillPhone id="phone-icon"/>
                <div>
                    <h3>Phone</h3>
                    <p>(+238)5850628</p>
                </div>
            </div>

            <div className="info-card">
                <AiOutlineMail id="email-icon"/>
                <div>
                    <h3>E-mail</h3>
                    <p>haclesrocha200@gmail.com</p>
                </div>
            </div>

            <div className="info-card">
                <AiFillEnvironment id="pin-icon"/>
                <div>
                    <h3>Localization</h3>
                    <p>Santiago, Cape Verde</p>
                </div>
            </div>

        </section>
    )
}

export default Information