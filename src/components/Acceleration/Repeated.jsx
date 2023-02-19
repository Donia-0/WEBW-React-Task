import React from "react";
import style from "../../css/AccelerationProcess.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Repeated = ({ icon, Header, Text, border }) => {
    return (
        <div className={style.market_research}>
            <div className={style.header}>
                <FontAwesomeIcon className={style.icon} icon={icon} /> <h2>{Header}</h2>
            </div>
            <p style={{ borderLeft: ` ${border} ` }}>{Text}</p>
        </div>
    )
}

export default Repeated;