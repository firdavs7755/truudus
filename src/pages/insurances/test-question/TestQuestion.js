import React from "react";
import HeaderForPane from "../../../components/headerForPane";
import leftPointerSimple from "../../../assets/auth/leftPointerSimple.svg";
import {Button, Form, Select} from "antd";
import {Link} from "react-router-dom";
import leftPointer from "../../../assets/auto-ins/leftPointer.svg";
const{Option}=Select;

function TestQuestion({match}) {
    return(
        <div>
            <HeaderForPane title='Регистрация авто' leftPointer={<img src={leftPointerSimple}/>} link='/home/carInsurance/ins-history'/>
            <div className='car-data-wrapper'>
                <p className={'car-data-title'}>Вопрос в виде теста</p>
                <Form name={'identification'} >
                    <Form.Item>
                        <span className={'inner-label'}>Несколько вариантов ответа</span>
                        <Form.Item name={'gender'} key={'yes'}>
                            <Select defaultValue="yes">
                                <Option value="1">yes</Option>
                                <Option value="0">no</Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <div className={'d-flex'}>
                            <Link to={'/home/carInsurance/ins-history'}>
                                <img src={leftPointer} style={{paddingRight:'15px'}} alt=""/>
                            </Link>
                            <Button className={'footer-button'} block>
                                <Link to={`${match.url}/`}>Далее</Link>
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default TestQuestion;
