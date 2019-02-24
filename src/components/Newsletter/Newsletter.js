import React from 'react';

const Newsletter = () => (
    <div className="row section subscribing js-scrollTo "
         id="newsletter">
        <div className="subscribing-background"><img src="./src/compressed/subscribing/subscribing.jpg"
                                                     alt=""/></div>
        <div className="row subscribing-title ">
            <div className="col-sm-12 ">
                <h2 className="text-center "
                    id="myBtn">NEWSLETTER</h2></div>
        </div>
        <div className="row subscribing-content content ">
            <form className="subscribing-content-form"
                  action="https://facebook.us16.list-manage.com/subscribe/post?u=8478ddf03df1c6fec705ebd4f&amp;id=ed4247e49f"
                  method="post"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                  noValidate>
                <input required="required"
                       placeholder="Prenom"
                       type="text"
                       value=""
                       name="NAME">
                    <input required="required"
                           placeholder="Email"
                           type="email"
                           value=""
                           name="EMAIL">

                        <div style="position: absolute; left: -5000px;"
                             aria-hidden="true">
                            <input type="text"
                                   name="b_8478ddf03df1c6fec705ebd4f_ed4247e49f"
                                   tabIndex="-1"
                                   value="" />
                        </div>
                        <!-- <button>Inscription</button> -->
                        <input type="submit"
                               value="Inscription"
                               name="subscribe"
                               id="mc-embedded-subscribe"
                               className="button" >

            </form>


        </div>


    </div>
);

export default Newsletter;