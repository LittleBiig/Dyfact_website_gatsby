import React from "react";
// import welcomeBoard1 from "../../images/welcomeBoard/welcome-1-square_.jpg";
// import welcomeBoard2 from "../../images/welcomeBoard/welcome-2-square_.jpg";
// import welcomeBoard3 from "../../images/welcomeBoard/welcome-3-square_.jpg";
// import welcomeBoard4 from "../../images/welcomeBoard/welcome-4-square_.jpg";
import logoDyfact from "../../images/logos/Logo_Dyfact.png";

const WelcomeBoard = (props) => (
    <div className="row welcome-board" id={"#welcome-board"}>

        <div className=" welcome-board-single ">
            <a className="js-scrollTo welcome-board-text-1" href="#musique">
                <h1>MUSIQUE</h1>
            </a>
            <img src={props.welcomePhoto1} className="welcome-board-image " alt={"welcome-board-1"} />
        </div>
        <div className=" welcome-board-single ">
            <a className="js-scrollTo welcome-board-text-2" href="#infos">
                <h1>INFOS</h1>
            </a>
            <img src={props.welcomePhoto2} className="welcome-board-image " alt={"welcome-board-2"} />
        </div>
        <div className=" welcome-board-single ">
            <a className="js-scrollTo welcome-board-text-3" href="#contact">
                <h1>CONTACT</h1>
            </a>
            <img src={props.welcomePhoto3} className="welcome-board-image " alt={"welcome-board-3"} />
        </div>
        <div className=" welcome-board-single ">
            <a className="js-scrollTo welcome-board-text-4" href="#newsletter">
                <h1>NEWSLETTER</h1>
            </a>
            <img src={props.welcomePhoto4} className="welcome-board-image " alt={"welcome-board-4"} />
        </div>
        <div className="welcome-board-logo">
            <img src={logoDyfact} alt="" className="welcome-board-logo-image" />
        </div>
        <div className="welcome-board-logo-responsive">
            <a href="#welcome-board" className="welcome-board-logo-responsive-image js-scrollTo">
                <img src={logoDyfact} alt="" className="welcome-board-logo-responsive-image" />
            </a>
        </div>


    </div>
);


export default WelcomeBoard;
