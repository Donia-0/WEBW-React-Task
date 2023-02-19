import React from "react";
import style from "../../css/Layout/Navbar.module.css"


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg " >
            <div class="container-fluid">
                <a class={`navbar-brand  ${style.logo}`}>ST<span>V</span>DY</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class={`navbar-nav ${style.navbar_nav}`} style={{ width: "60%", margin: "auto" }}>
                        <li class={`nav-item ${style.nav_item}`}>
                            <a class="nav-link" href="#">Browser</a>
                        </li>
                        <li class={`nav-item ${style.nav_item}`}>
                            <a class="nav-link" href="#">Bootcamps</a>
                        </li>
                        <li class={`nav-item ${style.nav_item}`}>
                            <a class="nav-link" href="#">How it works</a>
                        </li>
                        <li class={`nav-item ${style.nav_item}`}>
                            <a class="nav-link" href="#">Testemonial</a>
                        </li>
                    </ul>
                    <button class={style.about_us}>
                        About Us
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;