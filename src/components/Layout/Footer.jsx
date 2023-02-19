import React from "react";
import style from "../../css/Layout/Footer.module.css"
import FooterElements from './FooterElements';


const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footer_elements}>
                <div className="row" style={{ margin: "0" }}>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className={style.study}>
                            {/* ---------------call footer elements------------- */}
                            <FooterElements
                                Header="Study"
                                Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget diam at mi sollicitudin."
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className={style.services}>
                            {/* ---------------call footer elements------------- */}
                            <FooterElements
                                Header="Nos services"
                                Text="Avis clients Mentions légales Plan du site Blog d’Idéematic Le dictionnaire du digital ‹ Notre boutique /›"
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className={style.signup}>
                            {/* ---------------call footer elements------------- */}
                            <FooterElements
                                Header="Sign up for Special Offers!"
                            />
                            <div className={style.mail}>
                                <input type="text" class="form-control" placeholder="Mail" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;