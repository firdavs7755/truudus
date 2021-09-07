import React from "react";
import './carIns.css'
import HeaderForPane from "../../../components/headerForPane";
import leftPointerSimple from '../../../assets/auth/leftPointerSimple.svg'
import car from '../../../assets/auto-ins/car.svg'
import {Link} from "react-router-dom";

function CarInsurance({match}) {

   return(
        <div>
            <HeaderForPane title={'Автострахование'} leftPointer={<img src={leftPointerSimple} alt=""/>} link={'/home'}/>
            <div className={'carIns-wrapper'}>
                <p className={'car-title'}>Выберите тип страхования</p>
                <div className=" d-flex justify-content-between">
                        <div className={'carBody-wrapper'}>
                            <Link to={`${match.url}/check-face`}>
                                <img src={car} alt=""/>
                                <p className={'type-title'}>Обязательное страхование</p>
                                <span className={'type-sub-title'}>(ОСАГО)</span>
                            </Link>
                        </div>
                    <div className={'carBody-wrapper'}>
                        <Link to={`${match.url}/check-face`}>
                            <img src={car} alt=""/>
                            <p className={'type-title'}>Добровольное автострахование</p>
                            <span className={'type-sub-title'}>(ДСАГО)</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
   )
}

export default CarInsurance;
