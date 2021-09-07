import React from "react";
import './notification.css'
import HeaderForPane from "../../components/headerForPane";
import MyItem from "../../components/item";
import car from "../../assets/logos/car.svg";
import './notification.css'
import pointer from '../../assets/home/pointer.svg'
import gross from '../../assets/insurances/gross.svg'

function Notification() {
    return(
        <div>
            <HeaderForPane title={'Уведомления'}/>
            <div className={'notification-wrapper'}>
                <div className='sectionTitle'>
                    <span>Мои автомобили</span>
                </div>
                <MyItem img={car} title={'Заполните свои данные'} subTitle={'Страховой помощник Truudus*'} bottomElTitle={'add data'} bottomElImg={pointer} bottomElBackColor={'#56AA85'}/>
                <MyItem img={gross} title={'Gross insurances'} subTitle={'Подтвердил вашу заявку на страхование автомобиля'}/>
                <MyItem img={car} title={'Заполните свои данные'} subTitle={'Страховой помощник Truudus*'} bottomElTitle={'add data'} bottomElImg={pointer} bottomElBackColor={'#326BDE'}/>
                <div className='sectionTitle'>
                    <span>За неделю</span>
                </div>
                <MyItem img={gross} title={'Gross insurances'} subTitle={'Подтвердил вашу заявку на страхование автомобиля'}/>
                <MyItem img={car} title={'Заполните свои данные'} subTitle={'Страховой помощник Truudus*'} bottomElTitle={'add data'} bottomElImg={pointer} bottomElBackColor={'#326BDE'} isLast={true}/>

            </div>
        </div>
    )
}
export default Notification;
