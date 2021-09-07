import {axiosInstance} from "./api";
let banners='/api/v1/helper/banners/'
let insuraceCompanies='/api/v1/store/insuranse-companys/?lan=ru'
export const homeApi = {
    getBanners:()=>{
        return axiosInstance.get(banners);
    },
    getInsurances:()=>{
        return axiosInstance.get(insuraceCompanies);
    }
}
