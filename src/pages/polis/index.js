import React from "react";
import './polis.css'
import HeaderForPane from "../../components/headerForPane";
import car from '../../assets/logos/car.svg'
import {Button, Progress} from "antd";
import call from '../../assets/home/call.svg'
import documents from '../../assets/home/documents.svg'
import MyItem from "../../components/item";

function Polis() {
    return(
        <>
            <div>
                <HeaderForPane title={'Активные полисы'}/>
                <div className={'polis-wrapper'}>
                    <div className='item-wrapper'>
                        <div className='d-flex justify-content-between right-item'>
                            <div className='d-flex'>
                                <img src={car} className='item' alt='car'/>
                                <div>
                                    <p className='item-title'>{'title'}</p>
                                    <p className='item-sub-title'>{'subTitle'}</p>
                                </div>
                            </div>
                            <Button type={'success'} className={'btn'}>Продлить</Button>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className={'progress-title'}>Осталось:</span>
                            <span className={'day'}>14 дней</span>
                        </div>
                        <Progress strokeColor={{
                            '0%': '#87d068',
                            '100%': 'rgba(234,33,33,0.65)',
                        }} percent={100} />
                        <div className={'d-flex justify-content-between'}>
                            <MyItem img={documents} title={'Документы'} subTitle={'Скачать'} />
                            <MyItem img={call} title={'Колл-центр'} subTitle={'Позвонить'} />
                        </div>
                    </div>
                </div>
                <div className={'polis-wrapper'}>
                    <div className='item-wrapper'>
                        <div className='d-flex justify-content-between right-item'>
                            <div className='d-flex'>
                                <img src={car} className='item' alt='car'/>
                                <div>
                                    <p className='item-title'>{'title'}</p>
                                    <p className='item-sub-title'>{'subTitle'}</p>
                                </div>
                            </div>
                            <Button type={'success'} className={'btn'}>Продлить</Button>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className={'progress-title'}>Осталось:</span>
                            <span className={'day'}>14 дней</span>
                        </div>
                        <Progress strokeColor={{
                            '0%': '#87d068',
                            '100%': 'rgba(234,33,33,0.65)',
                        }} percent={100} />
                        <div className={'d-flex justify-content-between'}>
                            <MyItem img={documents} title={'Документы'} subTitle={'Скачать'} />
                            <MyItem img={call} title={'Колл-центр'} subTitle={'Позвонить'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Polis;
