import React, {useEffect, useState} from "react";
import './signin.css'
import {Button, Form, Input} from "antd";
import heart from '../../../assets/home/heart.svg'
import {createStructuredSelector} from "reselect";
import {selectAuthForm, selectBanners, selectCompanies, selectLogin} from "../../../redux/actions/homeSelector";
import {setAuthData, setBanners, setCompanies, setLogin} from "../../../redux/actions/homeAction";
import {connect} from "react-redux";
import Phone from "./Phone";
import Pass from "./Pass";
import {authApi} from "../../../services/auth";
import {Spin} from 'antd';
import {useHistory} from 'react-router-dom'


function Signin({formState,SET_LOGIN_DATA,loginState},props) {
    const history = useHistory();
    const [form] = Form.useForm();
    const [loading,setLoading]=useState(false);
    const [tur,setTur]=useState('phone');
    const sameComponent = () => {
        switch(tur) {
            case "phone":
                return <Phone form={form}/>;
            case "pass":
                return <Pass form={form}/>;
            default:
                return <h1>No project match</h1>
        }
    }
    useEffect(()=>{
        console.log('props',props)
    },[])
    const checkPhone=()=>{
        setLoading(true);
        authApi.checkPhone(formState?.phone).then(res => {
            SET_LOGIN_DATA(res.data);
            if(loginState.available){
                setLoading(false)
                setTur('pass')
            }else {
                history.push('/auth/signup')
            }
            console.log('resP:',res)
        })
    }
    const handleSubmit=(values)=>{
    }
    return(
        <div style={{padding:'16px',background:'white'}}>
            <Spin spinning={loading}>
                <div className={'auth-brand'}>
                    <span className={'truudus'}>Truudus</span>
                    <img src={heart} className={'heart'} alt=""/>
                </div>
                <p className={'sign-acc'}>Войти в аккаунт</p>
                <Form
                    name={'auth'}
                    form={form}
                    onFinish={handleSubmit}>
                    <div>
                        {sameComponent()}
                    </div>
                    <div className={'btn-wrapper'}>
                        <Button onClick={()=>checkPhone()} className={tur==='pass'?'d-none':'btn'} block>Продолжить</Button>
                        <Button className={tur==='phone'?'d-none':'btn'} block htmlType="submit">Войти</Button>
                    </div>
                </Form>
            </Spin>
        </div>
    )
}

const mstp = createStructuredSelector({
    formState:selectAuthForm,
    loginState:selectLogin
})

const mdtp = dispatch =>({
    SET_AUTH_DATA:(data)=>dispatch(setAuthData(data)),
    SET_LOGIN_DATA:lData=>dispatch(setLogin(lData))
})
export default connect(mstp,mdtp) (Signin)
