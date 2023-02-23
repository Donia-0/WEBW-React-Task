import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../css/BusinessSolution.module.css"


const RepeatedComponent = ({ icon, Header, Text, background }) => {
    return (<div className={style.content}>
        {/* <div className={style.icon_container} style={{ backgroundColor: ` ${background} ` }}><FontAwesomeIcon icon={icon} className={style.icon} /></div> */}
        <header>{Header}</header>
        <p>{Text}</p>
    </div>
    )

}


export default RepeatedComponent;