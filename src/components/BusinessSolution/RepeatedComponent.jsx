import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "../../css/BusinessSolution.module.css"


const RepeatedComponent = ({ icon, Header, Text, background }) => {
    return <div className="col-lg-6 col-md-6 col-sm-6">
        <div className={style.icon_container} style={{ backgroundColor: ` ${background} ` }}><FontAwesomeIcon icon={icon} className={style.icon} /></div>
        <header>{Header}</header>
        <p>{Text}</p>
    </div >
}


export default RepeatedComponent;