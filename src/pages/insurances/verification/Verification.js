import React from "react";
import HeaderForPane from "../../../components/headerForPane";
import './verification.css'
import leftPointerSimple from "../../../assets/auth/leftPointerSimple.svg";
import {Button, Form, Input} from "antd";
import {Link} from "react-router-dom";
import leftPointer from "../../../assets/auto-ins/leftPointer.svg";

function Verification({match}) {
    return(
        <div>
            <HeaderForPane title='Регистрация авто' leftPointer={<img src={leftPointerSimple}/>} link='/home/carInsurance/identification'/>
            <div className='car-data-wrapper'>
                <p className={'car-data-title'}>Верификация почтового адреса</p>
                <Form name={'identification'} >
                    <Form.Item>
                        <span className={'inner-label'}>Введите код</span>
                        <Form.Item name={'citizenship'} key={'citizenship'}>
                            <Input placeholder={'citizenship'}/>
                        </Form.Item>
                        <span className={'verify-title'}>На адрес alisher.muhamedov@gmail.com был отправлен 6-значный код.</span>
                    </Form.Item>
                    <p className={'verify-sub-title'}>Не получили код? <Link to={''} style={{color:'red'}}>Отправить снова</Link></p>
                    <Form.Item>
                        <div className={'d-flex'}>
                            <Link to={'/home/carInsurance/identification'}>
                                <img src={leftPointer} style={{paddingRight:'15px'}} alt=""/>
                            </Link>
                            <Button className={'footer-button'} block>
                                <Link to={`/home/carInsurance/drivers`}>Далее</Link>
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default Verification;
