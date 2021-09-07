import React from "react";
import HeaderForPane from "../../../components/headerForPane";
import leftPointerSimple from "../../../assets/auth/leftPointerSimple.svg";
import {Button, Form, Select} from "antd";
import {Link} from "react-router-dom";
import leftPointer from "../../../assets/auto-ins/leftPointer.svg";
const{Option}=Select;

function InsuranceHistory({match}) {
    return(
        <div>
            <HeaderForPane title='Регистрация авто' leftPointer={<img src={leftPointerSimple}/>} link='/home/carInsurance/drivers'/>
            <div className='car-data-wrapper'>
                <p className={'car-data-title'}>История страхования</p>
                <Form name={'identification'} >
                    <Form.Item>
                        <span className={'inner-label'}>Была ли страховка ранее?</span>
                        <Form.Item name={'gender'} key={'yes'}>
                            <Select defaultValue="yes">
                                <Option value="1">yes</Option>
                                <Option value="0">no</Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <div className={'d-flex'}>
                            <Link to={'/home/carInsurance/drivers'}>
                                <img src={leftPointer} style={{paddingRight:'15px'}} alt=""/>
                            </Link>
                            <Button className={'footer-button'} block>
                                <Link to={`/home/carInsurance/test-question`}>Далее</Link>
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default InsuranceHistory;
