import React from "react";

const Biography = (props) => (
    <div className="section infos js-scrollTo " id="infos">
        <div className="row infos-title ">
            <div className="col-12 ">
                <h2 className="text-center ">INFOS</h2> </div>
        </div>
        <div className="row infos-content content ">
            <div className="col-10 offset-1 col-sm-8 offset-sm-2 ">
                    <div id="infos-content-collapsed" dangerouslySetInnerHTML={ { __html: props.html } }></div>
            </div>
        </div>
    </div>
);

export default Biography;