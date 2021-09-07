import React from "react";
import HeaderForPane from "../../../components/headerForPane";
import leftPointerSimple from "../../../assets/auth/leftPointerSimple.svg";
import {Button, DatePicker, Form, Input, Select} from "antd";
import {Link} from "react-router-dom";
import leftPointer from "../../../assets/auto-ins/leftPointer.svg";
const{Option} = Select;

function Identification({match}) {
    return(
        <div>
            <HeaderForPane title='Регистрация авто' leftPointer={<img src={leftPointerSimple}/>} link='/home/carInsurance/owner-info'/>
            <div className='car-data-wrapper'>
                <p className={'car-data-title'}>Идентификация личности</p>
                <Form name={'identification'} >
                    <Form.Item>
                        <span className={'inner-label'}>citizenship</span>
                        <Form.Item name={'citizenship'} key={'citizenship'}>
                            <Input placeholder={'citizenship'}/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <span className={'inner-label'}>passport_series</span>
                        <Form.Item name={'passport_series'} key={'passport_series'}>
                            <Input placeholder={'passport_series'}/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <span className={'inner-label'}>email</span>
                        <Form.Item name={'email'} key={'email'}>
                            <Input placeholder={'email'}/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <div className={'d-flex'}>
                            <Link to={'/home/carInsurance/owner-info'}>
                                <img src={leftPointer} style={{paddingRight:'15px'}} alt=""/>
                            </Link>
                            <Button className={'footer-button'} block>
                                <Link to={`/home/carInsurance/verification`}>Далее</Link>
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Identification;
