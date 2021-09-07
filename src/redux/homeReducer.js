import {SET_AUTH_DATA, SET_BANNERS, SET_COMPANIES, SET_LOGIN, SET_REGIONS} from "./actions/action-types";


const INITIAL_STATE = {
    banners:[],
    companies:[],
    regData:[],
    loginData:{},
    form:{},
}

const homeReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case SET_BANNERS:
            return {...state,banners:action.payload}
        case SET_COMPANIES:
            return {...state,companies:action.payload}
        case SET_REGIONS:
            return {...state,regData:action.payload}
        case SET_LOGIN:
            return {...state,loginData:action.payload}
        case SET_AUTH_DATA:
            return {...state,form:action.payload}
    default:
        return state
    }
}
export default homeReducer;
