import React from 'react';

const Footer = (props) => (
    <footer className="row">
        <div className="row logo-footer ">
            <div className="col-md-4 col-md-offset-4 text-center "><img src="src/logos/Logo_Dyfact.png"
                                                                        alt="" /></div>
        </div>
        <div className="row copyrights ">
            <div className="col-md-4 col-md-offset-4 text-center ">
                <p>{props.footerText}</p>
            </div>
        </div>
        <div>
            <img src="src/logos/Logo_Dyfact_black.png"
                 style={{display:"none"}}
                 alt="" />
            <img src="src/logos/logo-colors.png"
                 style={{display:"none"}}
                 alt="" />
            <img src="src/logos/texte_griffures.png"
                 style={{display:"none"}}
                 alt="" />
        </div>
    </footer>
);

export default Footer;
