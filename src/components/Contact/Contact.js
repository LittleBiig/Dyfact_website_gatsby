import React from 'react';
import iconFacebook from "../../images/icones/facebook.svg";
import iconInstagram from "../../images/icones/instagram.svg";
import iconYoutube from "../../images/icones/soundcloud.svg";
import iconSoundcloud from "../../images/icones/youtube.svg";
import iconEmail from "../../images/icones/icone-mail.png";

const Contact = () => (

    <div className="section contact js-scrollTo "
         id="contact">
        <div className="row contact-title ">
            <div className="col-12 ">
                <h2 className="text-center ">CONTACT</h2></div>
        </div>
        <div className="row  ">
                    <div className="  col-12 contact-links-icones">
                        <img src={iconFacebook} alt="" />
                        { /* eslint-disable-next-line */ }
                        <a href="https://www.facebook.com/Dyfactmusic/" target="_blank"  rel="noopener noreferrer">Facebook</a>
                    </div>

                    <div className=" col-12 contact-links-icones">
                        <img src={iconInstagram} alt="" />
                        { /* eslint-disable-next-line */ }
                        <a href="https://www.instagram.com/dyfact/" target="_blank"  rel="noopener noreferrer">Instagram</a>
                    </div>

                    <div className=" col-12 contact-links-icones">
                        <img src={iconYoutube} alt="" />
                        { /* eslint-disable-next-line */ }
                        <a href="https://www.youtube.com/channel/UC0jIHcMBGwfCz5mCjnngM_g"
                           target="_blank"  rel="noopener noreferrer">Youtube</a>
                    </div>
                    <div className=" col-12 contact-links-icones">
                        <img src={iconSoundcloud}  alt="" />
                        { /* eslint-disable-next-line */ }
                        <a href="https://soundcloud.com/dyfact" target="_blank"  rel="noopener noreferrer">Soundcloud</a>
                    </div>

                    <div className=" col-12 contact-links-icones">
                        <img src={iconEmail}  alt="" />
                        { /* eslint-disable-next-line */ }
                        <a>Presse / Booking</a>
                    </div>
                    <div className="col-12 contact-links-icones">
                        { /* eslint-disable-next-line */ }
                        <a style={{fontStyle:"italic"}}>contact@dyfact.com</a>
                    </div>
        </div>
    </div>
);

export default Contact;