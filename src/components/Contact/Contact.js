import React from 'react';

const Contact = () => (

    <div className="row section contact js-scrollTo "
         id="contact">
        <div className="row contact-title ">
            <div className="col-sm-12 ">
                <h2 className="text-center ">CONTACT</h2></div>
        </div>
        <div className="row contact-content content ">
            <div className="contact-links-box">


                <div className="   contact-links-icones"><img src="src/icones/facebook.svg"
                                                              alt="" /> <a href="https://www.facebook.com/Dyfactmusic/"
                                                                         target=blank>Facebook</a></div>
                <div className="  contact-links-icones"><img src="src/icones/instagram.svg"
                                                             alt="" /> <a href="https://www.instagram.com/dyfact/"
                                                                        target=blank>Instagram</a></div>


                <div className="  contact-links-icones"><img src="src/icones/youtube.svg"
                                                             alt="" />
                    <a href="https://www.youtube.com/channel/UC0jIHcMBGwfCz5mCjnngM_g"
                       target=blank>Youtube</a></div>
                <!-- <div class="  contact-links-icones"> <img src="src/icones/twitter.svg" alt="" /> <a href="http://www.google.com" target=blank>Twitter</a> </div> -->
                <div className="  contact-links-icones"><img src="src/icones/soundcloud.svg"
                                                             alt="" /> <a href="https://soundcloud.com/dyfact"
                                                                        target=blank>Soundcloud</a></div>


                <div className="  contact-links-icones"><img src="src/icones/icone-mail.png"
                                                             alt="" /> <a>Presse / Booking</a></div>
                <div className="contact-links-icones"><a style="font-style:italic;">contact@dyfact.com</a></div>


            </div>
        </div>
    </div>
);

export default Contact;