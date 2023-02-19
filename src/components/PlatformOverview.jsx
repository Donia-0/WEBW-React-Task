import React from "react";
import style from "../css/PlatformOverview.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const PlatformOverview = () => {
    return (
        <div className={style.overview}>
            <div className="row" style={{ margin: "0" }}>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className={style.text}>
                        <header>Advanced Customer Service Platform</header>
                        <h1>PLatform Overview</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <Swiper slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Navigation]}
                        className={style.swiper}
                    >
                        <SwiperSlide className={style.swiper_slide}></SwiperSlide>
                        <SwiperSlide className={style.swiper_slide}></SwiperSlide>
                        <SwiperSlide className={style.swiper_slide}></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default PlatformOverview;