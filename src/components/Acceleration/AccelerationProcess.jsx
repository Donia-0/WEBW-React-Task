import React from "react";
import style from "../../css/AccelerationProcess.module.css"
import { fa1, faRightLong } from '@fortawesome/free-solid-svg-icons';
import Repeated from "./Repeated";


const AccelerationProcess = () => {
    return (
        <div className={style.acceleration}>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.process}>
                        <h1>Acceleration Process to Grow Your Business</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
                        <button class="about us">
                            About Us
                        </button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    {/* -------------passing props---------- */}
                    <Repeated
                        icon={fa1}
                        Header="Market Research"
                        Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                        border="solid 3px #BCBCBC"
                    />
                    <Repeated
                        icon={fa1}
                        Header="Market Research"
                        Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                        border="solid 3px #BCBCBC"
                    />
                    <Repeated
                        icon={fa1}
                        Header="Market Research"
                        Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                    />
                </div>
            </div>
            <div className={style.company_word}>Don't Just Take our Word for it!</div>
        </div>
    )
}

export default AccelerationProcess;