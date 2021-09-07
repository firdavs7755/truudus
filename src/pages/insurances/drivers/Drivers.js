import React from "react";
import HeaderForPane from "../../../components/headerForPane";
import leftPointerSimple from "../../../assets/auth/leftPointerSimple.svg";
import {Button, Form,Select, Input} from "antd";
import {Link} from "react-router-dom";
import leftPointer from "../../../assets/auto-ins/leftPointer.svg";
const {Option}=Select;

function Drivers({match}) {
    return(
        <div>
            <HeaderForPane title='Регистрация авто' leftPointer={<img src={leftPointerSimple}/>} link='/home/carInsurance/verification'/>
            <div className='car-data-wrapper'>
                <p className={'car-data-title'}>Есть ли другие водители?</p>
                <Form name={'identification'} >
                    <Form.Item>
                        <span className={'inner-label'}>drivers</span>
                        <Form.Item name={'gender'} key={'yes'}>
                            <Select defaultValue="yes">
                                <Option value="1">yes</Option>
                                <Option value="0">no</Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <div className={'d-flex'}>
                            <Link to={'/home/carInsurance/verification'}>
                                <img src={leftPointer} style={{paddingRight:'15px'}} alt=""/>
                            </Link>
                            <Button className={'footer-button'} block>
                                <Link to={`/home/carInsurance/ins-history`}>Далее</Link>
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default Drivers;
