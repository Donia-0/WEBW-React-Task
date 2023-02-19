import React from "react";
import style from "../../css/BusinessSolution.module.css"
import { faRightLong, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faBlogger, faGg, faHireAHelper } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RepeatedComponent from "./RepeatedComponent";

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
                            {/* -----------props passing-------- */}
                            <RepeatedComponent
                                icon={faGg}
                                background="#F1291E"
                                Header="Scale Your Activity"
                                Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
                            />
                            <RepeatedComponent
                                icon={faBlogger}
                                background="#36C5AD"
                                Header="BootCamps"
                                Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
                            />
                            <RepeatedComponent
                                icon={faHireAHelper}
                                background="#CB4BF8"
                                Header="High Quality"
                                Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
                            />
                            <RepeatedComponent
                                icon={faBriefcase}
                                background="#56E65B"
                                Header="Get Certification"
                                Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessSolution;