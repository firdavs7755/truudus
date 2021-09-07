import React from "react";
import HeaderForPane from "../../../components/headerForPane";
import leftPointerSimple from "../../../assets/auth/leftPointerSimple.svg";
import {Button, Form, Select} from "antd";
import leftPointer from '../../../assets/auto-ins/leftPointer.svg'
import './check-face.css'
import {Link} from "react-router-dom";
const {Option} =Select;

function CheckFace({match}) {
    return(
        <div>
            <HeaderForPane title={'Регистрация авто'} leftPointer={<img src={leftPointerSimple} alt=""/>} link={'/home/carInsurance'}/>
            <div className={'carIns-wrapper'}>
                <p className={'car-title'}>Выберите свой статус</p>
                <Form.Item>
                    <span className={'inner-label'}>Кто владелец автомобиля?</span>
                    <Form.Item name={'face'} key={'face'}>
                        <Select defaultValue="Физическое лицо">
                            <Option value={''}>Физическое лицо</Option>
                            <Option value={''}>Jis Face</Option>
                        </Select>
                    </Form.Item>
                </Form.Item>{console.log('match',match)}
                <Form.Item>
                    <div className={'d-flex'}>
                        <Link to={'/home/carInsurance'}>
                            <img src={leftPointer} style={{paddingRight:'15px'}} alt=""/>
                        </Link>
                        <Button className={'footer-button'} block>
                            <Link to={`/home/carInsurance/car-nomer`}>Далее</Link>
                        </Button>
                    </div>
                </Form.Item>
            </div>
        </div>
    )
}
export default CheckFace
