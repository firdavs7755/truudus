import {Form, Input} from "antd";
import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectAuthForm} from "../../../redux/actions/homeSelector";
import {setAuthData, setCompanies} from "../../../redux/actions/homeAction";

function Pass({formState,SET_AUTH_DATA}) {
    return(
        <>
            <Form.Item>
                <span className={'inner-label'}>password</span>
                <Form.Item
                    name={'password'}
                    key={'password'}
                >
                    <Input.Password onChange={e=>SET_AUTH_DATA({...formState,password:e.target.value})} placeholder={'password'}/>
                </Form.Item>
            </Form.Item>

        </>
    )
}
const mstp=()=>createStructuredSelector({
    formState:selectAuthForm
})
const mdtp=(dispatch)=>({
    SET_AUTH_DATA:data=>dispatch(setAuthData(data))
})

export default connect(mstp,mdtp)(Pass)
