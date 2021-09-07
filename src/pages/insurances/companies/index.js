import React from 'react';
import HeaderForPane from "../../../components/headerForPane";
import './companies.css'
import {Button} from "antd";
import kapital from '../../../assets/insurances/kapital.svg'
import kapital2 from '../../../assets/insurances/kapital2.svg'
import gross from '../../../assets/insurances/gross.svg'
import gross2 from '../../../assets/insurances/gross2.svg'
import euroasia from '../../../assets/insurances/euroasia.svg'
import euroasia2 from '../../../assets/insurances/euroasia2.svg'
import MyItem from "../../../components/item";

function Companies() {
    return(
        <>
            <HeaderForPane title={'Companies'}/>
            <div className={'company-wrapper'}>
                <div className='sectionTitle'>
                    <span>Автострахование</span>
                </div>


                <MyItem img={kapital} title={'Kapital Sug’urta'} subTitle={'Страхование иммущества'}/>
                <MyItem img={gross} title={'Gross Insurance'} subTitle={'Надежное автострахование'}/>
                <MyItem img={euroasia} title={'Euroasia Insurance'} subTitle={'Страхование недвижимости'}/>
                <div className='sectionTitle'>
                    <span>Здоровье</span>
                </div>
                <MyItem img={kapital2} title={'Kapital Sug’urta'} subTitle={'Страхование иммущества'}/>
                <MyItem img={gross2} title={'Gross Insurance'} subTitle={'Надежное автострахование'}/>
                <MyItem img={euroasia2} title={'Euroasia Insurance'} subTitle={'Страхование недвижимости'}/>

                <div className='sectionTitle'>
                    <span>Автострахование</span>
                </div>
                <MyItem img={kapital} title={'Kapital Sug’urta'} subTitle={'Страхование иммущества'}/>
                <MyItem img={gross} title={'Gross Insurance'} subTitle={'Надежное автострахование'}/>

            </div>
        </>
    )
}
export default Companies;
