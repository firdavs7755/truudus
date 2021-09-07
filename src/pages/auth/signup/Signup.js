import React, {useEffect, useState} from "react";
import './signup.css'
import HeaderForPane from "../../../components/headerForPane";
import leftPointerSimple from '../../../assets/auth/leftPointerSimple.svg'
import {Button, DatePicker, Form, Input, Radio, Select, Switch} from "antd";
import {generalsApi} from "../../../services/generalServices";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectRegData} from "../../../redux/actions/homeSelector";
import {setRegionsData} from "../../../redux/actions/homeAction";
import {authApi} from "../../../services/auth";
const { Option } = Select;


function Signup({SET_REG_DATA,regionState}) {
    const[subRegs,setSubRegs] = useState([]);
    const [form] = Form.useForm();

    const getRegs=()=>{
        authApi.bringRegions()
            .then(res=>{
                SET_REG_DATA(res.data)
            })
    }
    useEffect(()=>{
        getRegs();
    },[])
    const regions=regionState.filter(item=>item.parent===1);
    const getSubRegions=(value)=>{
        setSubRegs(regionState.filter(item=>item.parent===value));
    }

    return(
        <div>{console.log('list',regionState)}
            <div className={'signup-wrapper'}>
                <HeaderForPane title={'Registration'} leftPointer={<img src={leftPointerSimple} alt=""/>} link={'/auth/signin'}/>

                <Form
                    className={'mt-5'}
                    name={'signup'}
                    form={form}
                    // onFinish={handleSubmit}
                >
                    <Form.Item style={{padding:'0'}}>
                        <span className={'inner-label'}>first name</span>
                        <Form.Item name={'first_name'} key={'first_name'}>
                            <Input placeholder={'first_name'}/>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <span className={'inner-label'}>last name</span>
                        <Form.Item name={'last_name'} key={'last_name'}>
                            <Input placeholder={'last_name'}/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <span className={'inner-label'}>birthday</span>
                        <Form.Item name={'birthday'} key={'birthday'}>
                            <DatePicker placeholder={'birthday'}/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <span className={'inner-label'}>gender</span>
                        <Form.Item name={'gender'} key={'gender'}>
                            <Select defaultValue="Male">
                                <Option value="1">Male</Option>
                                <Option value="0">Female</Option>
                                <Option value="-1">Another</Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <span className={'inner-label'}>phone number</span>
                        <Form.Item name={'phone_number'} key={'phone_number'}>
                            <Input placeholder={'phone_number'}/>
                        </Form.Item>
                    </Form.Item>


                    <Form.Item>
                        <span className={'inner-label'}>seelct region</span>
                        <Form.Item name={'regions'} key={'regions'}>
                            <Select defaultValue="Select region" onChange={getSubRegions}>
                                <Option value={''} disabled>Select Reg</Option>
                                {
                                    regions.map(item=>(
                                        <Option value={item.id}>
                                            {item.name}
                                        </Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <span className={'inner-label'}>select subregion</span>
                        <Form.Item name={'tuman'} key={'tuman'}>
                            <Select defaultValue="Select subRegion" disabled={(subRegs.length>0)?false:true}>
                                <Option value={''} disabled>Select SubReg</Option>
                                {
                                    subRegs.map(item=>(
                                        <Option value={item.id}>
                                            {item.name}
                                        </Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <Button className={'footer-btn mb-5'} htmlType={'submit'} block>Зарегистрироваться</Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}
const mstp=()=>createStructuredSelector({
    regionState:selectRegData
})
const mdtp=dispatch=>({
    SET_REG_DATA:data=>dispatch(setRegionsData(data))
})
export default connect(mstp,mdtp)(Signup)
