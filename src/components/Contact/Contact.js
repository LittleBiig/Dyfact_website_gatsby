import React from 'react';

const Contact = () => (

    <div className="section contact js-scrollTo "
         id="contact">
        <div className="row contact-title ">
            <div className="col-sm-12 ">
                <h2 className="text-center ">CONTACT</h2></div>
        </div>
        <div className="row contact-content content ">
            <div className="contact-links-box">
                <div className="   contact-links-icones">
                    <img src="src/icones/facebook.svg" alt="" />
                    { /* eslint-disable-next-line */ }
                    <a href="https://www.facebook.com/Dyfactmusic/" target="_blank"  rel="noopener noreferrer">Facebook</a>
                </div>

                <div className="  contact-links-icones">
                    <img src="src/icones/instagram.svg" alt="" />
                    { /* eslint-disable-next-line */ }
                    <a href="https://www.instagram.com/dyfact/" target="_blank"  rel="noopener noreferrer">Instagram</a>
                </div>

                <div className="  contact-links-icones">
                    <img src="src/icones/youtube.svg" alt="" />
                    { /* eslint-disable-next-line */ }
                    <a href="https://www.youtube.com/channel/UC0jIHcMBGwfCz5mCjnngM_g"
                       target="_blank"  rel="noopener noreferrer">Youtube</a>
                </div>
                <div className="  contact-links-icones">
                    <img src="src/icones/soundcloud.svg" alt="" />
                    { /* eslint-disable-next-line */ }
                    <a href="https://soundcloud.com/dyfact" target="_blank"  rel="noopener noreferrer">Soundcloud</a>
                </div>

                <div className="  contact-links-icones">
                    <img src="src/icones/icone-mail.png" alt="" />
                    { /* eslint-disable-next-line */ }
                    <a>Presse / Booking</a>
                </div>
                <div className="contact-links-icones">
                    { /* eslint-disable-next-line */ }
                    <a style={{fontStyle:"italic"}}>contact@dyfact.com</a>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;