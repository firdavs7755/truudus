import {SET_AUTH_DATA, SET_BANNERS, SET_COMPANIES, SET_LOGIN, SET_REGIONS} from "./action-types";


export const setBanners=(banners)=>({
    type:SET_BANNERS,
    payload:banners
})
export const setCompanies=(companies)=>({
    type:SET_COMPANIES,
    payload:companies
})
export const setLogin=(loginData)=>({
    type:SET_LOGIN,
    payload:loginData
})
export const setAuthData=(form)=>({
    type:SET_AUTH_DATA,
    payload:form
})
export const setRegionsData=(data)=>({
    type:SET_REGIONS,
    payload:data
})
