import {createSelector} from 'reselect'

const homeSelector = state => state.home

export const selectBanners = createSelector(
    [homeSelector],
    home=>home.banners
)
export const selectCompanies = createSelector(
    [homeSelector],
    home=>home.companies
)
export const selectLogin = createSelector(
    [homeSelector],
    home=>home.loginData
)
export const selectAuthForm = createSelector(
    [homeSelector],
    home=>home.form
)
export const selectRegData = createSelector(
    [homeSelector],
    home=>home.regData
)
