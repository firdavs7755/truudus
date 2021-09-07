import React from "react";
import HeaderForPane from "../../components/headerForPane";
import './profile.css'
import car from "../../assets/logos/car.svg";
import trueImg from "../../assets/logos/true.svg";
import MyItem from "../../components/item";
import camera from '../../assets/profile/camera.svg'
import qizcha from '../../assets/profile/qizcha.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import kapital from "../../assets/insurances/kapital.svg";
import gross from "../../assets/insurances/gross.svg";
import euroasia from "../../assets/insurances/euroasia.svg";
import kapital2 from "../../assets/insurances/kapital2.svg";
import gross2 from "../../assets/insurances/gross2.svg";
import euroasia2 from "../../assets/insurances/euroasia2.svg";
import rightPointer from "../../assets/profile/rightPointer.svg";
import contarct from "../../assets/profile/contract.svg";
import notification from "../../assets/profile/notification.svg";
import location from "../../assets/profile/location.svg";
import message from "../../assets/profile/message.svg";
import aboutUs from "../../assets/profile/aboutUs.svg";
import language from "../../assets/profile/language.svg";
import safe from "../../assets/profile/safe.svg";
import exit from "../../assets/profile/exit.svg";
import {Switch} from "antd";

function Profile({match}) {
    return(
        <div>
            <HeaderForPane title={'Profile'}/>
            <div className={'profile-wrapper'}>

                <div className='item-wrapper'>
                    <div className='d-flex justify-content-between right-item'>
                        <div className='d-flex'>
                            <div className={'accountImg'}>
                                <img src={qizcha} alt=""/>
                                <img src={camera} className={'camera'} alt=""/>
                            </div>
                            <div>
                                <p className='item-title'>{'title'}</p>
                                <p className='item-sub-title'>{'subTitle'}</p>
                            </div>
                        </div>
                        <img src={trueImg} className='right-btn2' alt='true img'/>
                    </div>
                </div>
                <div className='sectionTitle'>
                    <span>Настройки</span>
                </div>
                <Swiper slidesPerView={'auto'} spaceBetween={30} pagination={{"clickable": true}} className="mySwiper">
                    <SwiperSlide>
                        <MyItem img={euroasia} title={'Euroasia Insurance'} subTitle={'Страхование недвижимости'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MyItem img={euroasia2} title={'Euroasia Insurance'} subTitle={'Страхование недвижимости'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MyItem img={gross} title={'Gross Insurance'} subTitle={'Страхование недвижимости'}/>
                    </SwiperSlide>
                </Swiper>
                <MyItem img={contarct} title={'Способы оплаты'} subTitle={'Наличными'} rightEl={rightPointer}/>
                <MyItem img={notification} title={'Уведомление'} subTitle={'Включено'} rightElTeg={<Switch/>}/>
                <MyItem img={location} title={'Местоположение'} subTitle={'Выключено'} rightElTeg={<Switch/>}/>
                <MyItem img={message} title={'Служба поддержки'} subTitle={'Задавайте вопросы'} rightEl={rightPointer}/>
                <MyItem img={aboutUs} title={'О нас'} subTitle={'Полезная информация'} rightEl={rightPointer} link={`/profile/about-us`}/>
                <MyItem img={language} title={'Язык приложения'} subTitle={'Русский'} rightEl={rightPointer} link={`/profile/language`}/>
                <MyItem img={safe} title={'Безопасность'} subTitle={'Установить пин-код'} rightEl={rightPointer}/>
                <MyItem img={exit} title={'Выход'} subTitle={'Выйти из аккаунта'} rightEl={rightPointer} isLast={true}/>
            </div>
        </div>
    )
}

export default Profile;
