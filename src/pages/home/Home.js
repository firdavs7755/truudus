import React, {useEffect, useState} from 'react';
import {Button, Spin} from 'antd'
import './home.css'
import { Swiper, SwiperSlide } from "swiper/react";
import pointer from '../../assets/home/pointer.svg'
import car from '../../assets/logos/car.svg'
import disableCar from '../../assets/logos/disableCar.svg'
import plus from '../../assets/logos/plus.svg'
import trueImg from '../../assets/logos/true.svg'
import kapital from '../../assets/insurances/kapital.svg'
import kapital2 from '../../assets/insurances/kapital2.svg'
import gross from '../../assets/insurances/gross.svg'
import gross2 from '../../assets/insurances/gross2.svg'
import euroasia from '../../assets/insurances/euroasia.svg'
import euroasia2 from '../../assets/insurances/euroasia2.svg'
import plane from '../../assets/home/plane.svg'
import {createStructuredSelector} from "reselect";
import {selectBanners, selectCompanies} from "../../redux/actions/homeSelector";
import {connect} from "react-redux";
import {setBanners, setCompanies} from "../../redux/actions/homeAction";
import {axiosInstance} from "../../services/api";
import homeReducer from "../../redux/homeReducer";
import {homeApi} from "../../services/homeServices";
import MyItem from "../../components/item";
import {Link} from "react-router-dom";


function Home({homeState,SETBANNERS,SETCOMPANIES,companiesState,match}){
    const [loading,setLoading] = useState(false);
    const [loading2,setLoading2] = useState(false);
    const bringBanners=()=>{
        setLoading(true);
        homeApi.getBanners()
            .then(res=> {
                SETBANNERS(res.data.results)
                setLoading(false);
            })
    }
    const bringCompanies=()=>{
        setLoading2(true);
        homeApi.getInsurances()
            .then(res=>{
                SETCOMPANIES(res.data)
                setLoading2(false)
            })
    }
    useEffect(()=>{
        bringBanners();
        bringCompanies()
    },[]);

    return(
        <>{console.log('compSt',companiesState)}
            <div className='homeWrap'>
            <Spin spinning={loading}>
                <Swiper className="mySwiper">
                    {
                        homeState.map(bnr=>(
                            <SwiperSlide>
                                <div className='card' style={{background: `url(${bnr.image})`}}>
                                    <span className='title'>{bnr.title}</span>
                                    <div className='cardLeft'>
                                        <span className='process'>{bnr.description}</span>
                                        <div className='addData' style={{alignItems:'center'}}>
                                            <span className='txt'>Добавить данные</span>
                                            <span><img src={pointer} alt=''/></span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Spin>

             <div>
                <div className='sectionTitle'>
                    <span>Мои автомобили</span>
                </div>
                <div className='item-wrapper'>
                    <div className='d-flex justify-content-between right-item'>
                        <div className='d-flex'>
                            <img src={car} className='item' alt='car'/>
                            <div>
                                <p className='item-title'>Chevrolet Malibu 2</p>
                                <p className='item-sub-title'>B 456 VB</p>
                            </div>
                        </div>
                        <Button  className='right-btn1'>Начать</Button>
                    </div>
                </div>
                 <MyItem img={car} title={'Chevrolet Captiva s4'} subTitle={'A 707 AA'} rightEl={trueImg}/>
                 <MyItem img={disableCar} title={'Добавить машину'} subTitle={'Зарегистрировать'} rightEl={plus} link={'/home/carInsurance'}/>

             </div>


            <div className='sectionTitle'>
                <span>Страховые компании</span>
            </div>
            <div>
            <Spin spinning={loading2}>
                <Swiper slidesPerView={'auto'} spaceBetween={30} pagination={{"clickable": true}} className="mySwiper">
                    {companiesState.map(comp=>(
                        <SwiperSlide>
                            <MyItem img={comp.icon} title={comp.name} subTitle={comp.description} link={`/home/insurance-companies/${comp.slug}/${comp.id}`}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Spin>
            </div>
                <div className='sectionTitle'>
                    <span>Мои путешествия </span>
                </div>
                {/*<div className="mb-5">*/}
                    <MyItem img={plane} title={'Ташкент - Сидней'} subTitle={'24.06.21 - 13.07.21'} rightEl={trueImg} isLast={true}/>
                {/*</div>*/}
            </div>
        </>
    )
}
const mstp = createStructuredSelector({
    homeState:selectBanners,
    companiesState:selectCompanies,
})
const mdtp = dispatch =>({
    SETBANNERS:banners=>dispatch(setBanners(banners)),
    SETCOMPANIES:companies=>dispatch(setCompanies(companies)),
})

export default connect(mstp,mdtp)(Home);
