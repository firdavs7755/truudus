import React from "react";
import HeaderForPane from "../../../components/headerForPane";
import leftPointerSimple from "../../../assets/auth/leftPointerSimple.svg";
import {Button, DatePicker, Form, Input, Select} from "antd";
import {Link} from "react-router-dom";
import leftPointer from "../../../assets/auto-ins/leftPointer.svg";
const{Option}=Select;

function OwnerInfo({match}) {
    return(
        <div>
            <HeaderForPane title='Регистрация авто' leftPointer={<img src={leftPointerSimple}/>} link='/home/carInsurance/car-data'/>
            <div className='car-data-wrapper'>
                <p className={'car-data-title'}>Информация о владельце</p>
                <Form name={'owner'} >
                    <Form.Item>
                        <span className={'inner-label'}>first_name</span>
                        <Form.Item name={'first_name'} key={'first_name'}>
                            <Input placeholder={'first_name'}/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <span className={'inner-label'}>last_name</span>
                        <Form.Item name={'last_name'} key={'last_name'}>
                            <Input placeholder={'last_name'}/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <span className={'inner-label'}>release_data</span>
                        <Form.Item name={'release_date'} key={'release_date'}>
                            <DatePicker placeholder={'release_date'}/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <span className={'inner-label'}>Пол</span>
                        <Form.Item name={'gender'} key={'yes'}>
                            <Select defaultValue="male">
                                <Option value="1">male</Option>
                                <Option value="0">female</Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <div className={'d-flex'}>
                            <Link to={'/home/carInsurance/car-data'}>
                                <img src={leftPointer} style={{paddingRight:'15px'}} alt=""/>
                            </Link>
                            <Button className={'footer-button'} block>
                                <Link to={`/home/carInsurance/identification`}>Далее</Link>
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default OwnerInfo
