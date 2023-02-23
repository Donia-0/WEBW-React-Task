import React from "react";
import style from "../css/RBestPlatform.module.css"
import report from "../Images/NoPath.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';


const RBestPlatform = () => {
    return (
        <div className={style.bestplatform}>
            <div className={style.content}>
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className={style.text}>
                            <h1>Best Platform for the Technological Era</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
                            <span>Learn About Our Success <div className={style.icon}> <FontAwesomeIcon icon={faRightLong} /></div></span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className={style.dashboard}>
                            <img src={report} alt="report" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default RBestPlatform;