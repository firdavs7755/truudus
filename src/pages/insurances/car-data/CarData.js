import React from 'react'
import './car-data.css'
import HeaderForPane from '../../../components/headerForPane';
import leftPointer from "../../../assets/auto-ins/leftPointer.svg";
import leftPointerSimple from "../../../assets/auth/leftPointerSimple.svg";
import {Button, DatePicker, Form, Input, Select} from "antd";
import {Link} from "react-router-dom";
const{Option}=Select;
function CarData({match}){
    return(
        <div>
            <HeaderForPane title='Регистрация авто' leftPointer={<img src={leftPointerSimple}/>} link='/home/carInsurance/car-nomer'/>
            <div className='car-data-wrapper'>
                <p className={'car-data-title'}>Номерной знак автомобиля</p>
                <Form name={'car'} >
                    <Form.Item>
                        <span className={'inner-label'}>marka</span>
                        <Form.Item name={'marka'} key={'marka'}>
                            <Input placeholder={'marka'}/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <span className={'inner-label'}>model</span>
                        <Form.Item name={'model'} key={'model'}>
                            <Input placeholder={'model'}/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <span className={'inner-label'}>release_data</span>
                        <Form.Item name={'release_date'} key={'release_date'}>
                            <DatePicker placeholder={'release_date'}/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <span className={'inner-label'}>Родной двигатель был заменен</span>
                        <Form.Item name={'yes'} key={'yes'}>
                            <Select defaultValue="yes">
                                <Option value="1">yes</Option>
                                <Option value="0">no</Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <span className={'inner-label'}>Объем двигателя</span>
                        <Form.Item name={'yes'} key={'yes'}>
                            <Select defaultValue="До 1200 куб.см включительно">
                                <Option value="1">До 1200 куб.см включительно</Option>
                                <Option value="0">До 1500 куб.см включительно</Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <div className={'d-flex'}>
                            <Link to={'/home/carInsurance/car-nomer'}>
                                <img src={leftPointer} style={{paddingRight:'15px'}} alt=""/>
                            </Link>
                            <Button className={'footer-button'} block>
                                <Link to={`/home/carInsurance/owner-info`}>Далее</Link>
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default CarData;
