import style from "../css/LastSection.module.css"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import swiperimg from "../Images/shutterstock_459775861\ \(1\).png"




const LastSection = () => {
    const icons = [
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faStar} />
    ]
    return (
        //  ------------------counter survies---------------
        <div className={style.counter_section}>
            <div className="row" style={{ margin: "0" }}>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className={style.count_item}>
                        <strong>570</strong>
                        <span>Download</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className={style.count_item}>
                        <strong>570</strong>
                        <span>Active User</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className={style.count_item}>
                        <strong>570</strong>
                        <span>Positive Feedback</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className={style.count_item}>
                        <strong>570</strong>
                        <span>+ rating</span>
                    </div>
                </div>
            </div>
            {/* -------------------------------------------------------------------------- */}
            <div className="row" style={{ margin: "0" }}>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    {/* ----------------------swiper---------------------- */}
                    <Swiper slidesPerView={1}
                        spaceBetween={70}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className={style.swiper}
                    >
                        {/* -------------------------slides---------------------- */}
                        {/* -------------slide 1------------------------- */}
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.swiper_text}>
                                <h1>Florrie Jacobs</h1>
                                <span>CEO of Company</span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                                <div className={style.icons} style={{ display: "flex" }}>
                                    {/* get icons */}
                                    {icons.map((staricon, index) => (
                                        <div key={index} style={{ color: "#CB48F9", paddingLeft: "10px" }}>{staricon}</div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* -------------------------------------------------- */}
                        {/* ------------------------------slide 2-------------------------- */}
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.swiper_text}>
                                <h1>Florrie Jacobs</h1>
                                <span>CEO of Company</span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                                <div className={style.icons} style={{ display: "flex" }}>
                                    {/* get icons */}
                                    {icons.map((staricon, index) => (
                                        <div key={index} style={{ color: "#CB48F9", paddingLeft: "10px" }}>{staricon}</div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* -------------------------------------------------- */}
                        {/* ---------------------------slide 3--------------------------------- */}
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.swiper_text}>
                                <h1>Florrie Jacobs</h1>
                                <span>CEO of Company</span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                                <div className={style.icons} style={{ display: "flex" }}>
                                    {/* get icons */}
                                    {icons.map((staricon, index) => (
                                        <div key={index} style={{ color: "#CB48F9", paddingLeft: "10px" }}>{staricon}</div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* ------------------------------------------------- */}
                    </Swiper>
                    {/* ------------------------end swiper---------------------- */}
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className={style.right_side}>
                        <h1>Grow Your Business and Join Our Happy Users</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
                        <button class="about us">
                            About Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastSection;