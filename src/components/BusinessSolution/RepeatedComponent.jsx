import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "../../css/BusinessSolution.module.css"
import { HighQuality } from '@mui/icons-material';


const RepeatedComponent = ({ icon, Header, Text, background }) => {
    return (<div className={style.content}>
        {/* <div className={style.icon_container} style={{ backgroundColor: ` ${background} ` }}><FontAwesomeIcon icon={icon} className={style.icon} /></div> */}
        <header>{Header}</header>
        <p>{Text}</p>
        {/* <HighQuality /> */}
    </div>
    )

}


export default RepeatedComponent;