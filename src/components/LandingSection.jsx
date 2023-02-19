import React from "react";
import style from "../css/LandingSection.module.css"
import Navbar from './Layout/Navbar';
import report from "../Images/NoPath.png"
import shopify from "../Images/client-1.png"
import nearpod from "../Images/client-2.png"
import bench from "../Images/client-3.png"
import forbes from "../Images/client-4.png"
import bumble from "../Images/client-5.png"




const LandingSection = () => {
    const images = [
        <img src={shopify} alt="platform" />,
        <img src={nearpod} alt="platform" />,
        <img src={bench} alt="platform" />,
        <img src={forbes} alt="platform" />,
        <img src={bumble} alt="platform" />,
    ]


    return (
        <div className={style.landing}>
            {/* ---------render navbar----------- */}
            <Navbar />
            {/* ----------main landing section------------ */}
            <div className={style.content}>
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className={style.welcome_text}>
                            <header>Advanced Platform</header>
                            <h1>Take your team to the next level</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            <button className={style.contact_btn}>About Us</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className={style.dashboard}>
                            <img src={report} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.platforms}>
                {images.map((image, index) => (
                    <div key={index}>{image}</div>
                ))}
            </div>

        </div>
    )
}

export default LandingSection;