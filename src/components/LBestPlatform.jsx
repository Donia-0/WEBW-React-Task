import React from "react";
import style from "../css/LBestPlatform.module.css"
import report from "../Images/NoPath.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

const LBestPlatform = () => {
    return (
        <div className={style.bestplatform}>
            <div className={style.content}>
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className={style.dashboard}>
                            <img src={report} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className={style.text}>
                            <h1>The best business solution for you</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae laudantium minima, fugit assumenda, deserunt necessitatibus quia, autem vero error eum. Ipsa quos possimus libero fugit, quo sequi ex deleniti.</p>
                            <span>Learn About Our Success <div className={style.icon}> <FontAwesomeIcon icon={faRightLong} /></div></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LBestPlatform;