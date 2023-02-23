import React from "react";
import style from "../../css/BusinessSolution.module.css"
import { faRightLong, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RepeatedComponent from "./RepeatedComponent";
import { HighQuality } from "@mui/icons-material";
// import { SiBoost } from 'react-icons/si';
import { BsFillBootstrapFill } from "react-icons/bs"
import boost from "../../Images/Icon simple-boost.png"

const BusinessSolution = () => {
    return (
        <div className={style.business_sol}>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className={style.text}>
                        <h1>The best business solution for you</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae laudantium minima, fugit assumenda, deserunt necessitatibus quia, autem vero error eum. Ipsa quos possimus libero fugit, quo sequi ex deleniti.</p>
                        <span>Learn About Our Success <div className={style.icon}> <FontAwesomeIcon icon={faRightLong} /></div></span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className={style.icons}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className={style.icon_container} style={{ backgroundColor: "#F1291E" }}>
                                    {/* <SiBoost style={{ color: "#FFFFFF" }} /> */}
                                    <img src={boost} style={{ width: "80%" }} />
                                </div>
                                {/* -----------props passing-------- */}
                                <RepeatedComponent
                                    Header="Scale Your Activity"
                                    Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className={style.icon_container} style={{ backgroundColor: "#36C5AD" }}>
                                    <BsFillBootstrapFill />
                                </div>
                                {/* -----------props passing-------- */}
                                <RepeatedComponent
                                    Header="BootCamps"
                                    Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className={style.icon_container} style={{ backgroundColor: "#CB4BF8" }}>
                                    <HighQuality />
                                </div>
                                {/* -----------props passing-------- */}
                                <RepeatedComponent
                                    Header="High Quality"
                                    Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className={style.icon_container} style={{ backgroundColor: "#56E65B" }}>
                                    <FontAwesomeIcon icon={faBriefcase} />
                                </div>
                                {/* -----------props passing-------- */}
                                <RepeatedComponent
                                    Header="Get Certification"
                                    Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessSolution;