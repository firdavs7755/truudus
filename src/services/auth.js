import {axiosInstance} from "./api";
let phoneCheckUrl='/api/v1/account/check-phone/'
const regs='/api/v1/helper/regions';

export const authApi={
    checkPhone:(phone)=>{
        return axiosInstance.post(phoneCheckUrl, {phone})
    },
    bringRegions:()=>{
        return axiosInstance.get(regs);
    }
}
