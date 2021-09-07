import React from "react";
import Signin from "./signin/signin";
import './auth.css'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectLogin} from "../../redux/actions/homeSelector";

function Auth({loginState}) {
    return(
        <div className={'auth-wrapper'}>
            <Signin/>
        </div>
    )
}

const mstp=()=>createStructuredSelector({
    loginState:selectLogin
})

export default connect(mstp,null)(Auth);
