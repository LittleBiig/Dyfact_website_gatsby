import React from 'react';
import logoDyfact from "../../images/logos/Logo_Dyfact.png";
const Footer = (props) => (
    <footer className="section">
        <div className="row logo-footer ">
            <div className="col-6 offset-3 text-center "><img src={logoDyfact}
                                                                        alt="" /></div>
        </div>
        <div className="row copyrights ">
            <div className="col-4 offset-4 text-center ">
                <p>{props.footerText}</p>
            </div>
        </div>
    </footer>
);

export default Footer;
