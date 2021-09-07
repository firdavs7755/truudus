import React from "react";
import './header.css'
import heart from '../../assets/home/heart.svg'
import question from '../../assets/home/question.svg'
import car from '../../assets/home/car.svg'
import plane from '../../assets/home/plane.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom";

function Header1() {
    return(
        <div className='header-wrapper'>
            <div className={'headerLine d-flex justify-content-between'}>
                <div>
                    <span className={'brand'}>Truudus</span>
                    <img src={heart} className={'heart'} alt=""/>
                </div>
                <div>
                    <Link to={'/auth/signin'}>
                        <span className={'help'} style={{marginRight:'30px'}}>login</span>
                    </Link>
                    <span className={'help'}>Помощь</span>
                    <img src={question} alt=""/>
                </div>
            </div>
            <div className="carousel1 d-flex justify-content-between">
                <Swiper slidesPerView={2} spaceBetween={30} pagination={{"clickable": true}} className="mySwiper">
                    <SwiperSlide>
                        <div className={'cItems'}>
                            <img src={car} alt=""/>
                            <span className={'title'}>Авто</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'cItems'}>
                            <img src={plane} alt=""/>
                            <span className={'title'}>Тревел</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'cItems'}>
                            <img src={car} alt=""/>
                            <span className={'title'}>Авто</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'cItems'}>
                            <img src={plane} alt=""/>
                            <span className={'title'}>Тревел</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'cItems'}>
                            <img src={car} alt=""/>
                            <span className={'title'}>Авто</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'cItems'}>
                            <img src={plane} alt=""/>
                            <span className={'title'}>Тревел</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'cItems'}>
                            <img src={car} alt=""/>
                            <span className={'title'}>Авто</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'cItems'}>
                            <img src={plane} alt=""/>
                            <span className={'title'}>Тревел</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Header1
