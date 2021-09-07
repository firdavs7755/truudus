import React, {useState} from "react";
import {Form, Input} from "antd";
import {createStructuredSelector} from "reselect";
import {selectAuthForm} from "../../../redux/actions/homeSelector";
import {setAuthData} from "../../../redux/actions/homeAction";
import {connect} from "react-redux";

function Phone({SET_AUTH_DATA,formState}) {
    return(
        <>
           <Form.Item>
               <span className={'inner-label'}>phone</span>
               <Form.Item
                   name={'phone'}
                   key={'phone'}
               >
                   <Input onChange={e=>SET_AUTH_DATA({...formState,phone:e.target.value})} placeholder={'phone'}/>
               </Form.Item>
           </Form.Item>
        </>
    )
}

const mstp=()=>createStructuredSelector({
    formState:selectAuthForm
})
const mdtp=dispatch=>({
    SET_AUTH_DATA:data=>dispatch(setAuthData(data))
})

export default connect(mstp,mdtp)(Phone)
