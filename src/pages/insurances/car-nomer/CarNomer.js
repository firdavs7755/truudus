import React, {useState} from "react";
import HeaderForPane from "../../../components/headerForPane";
import leftPointerSimple from "../../../assets/auth/leftPointerSimple.svg";
import {Link} from "react-router-dom";
import './car-nomer.css'
import warning from "../../../assets/auto-ins/warning.svg";
import {Button, Form, Input, Modal} from "antd";
import leftPointer from "../../../assets/auto-ins/leftPointer.svg";
import flaguz from "../../../assets/auto-ins/flaguz.svg";

function CarNomer({match}) {
    const[open,setOpen]=useState(false);
    const handleModal=()=>setOpen(!open);
    return(
        <div>
            <HeaderForPane title={'Регистрация авто'} leftPointer={<img src={leftPointerSimple} alt=""/>} link={'/home/carInsurance/check-face'}/>
            <div className={'carIns-wrapper'}>
                <p className={'car-title'}>Номерной знак автомобиля</p>
                <div className={'d-flex'} style={{alignItems:'center'}}>
                    <div className={'car-nomer1'}>
                        <Form.Item key={'plate'} name={'plate'}>
                            <Input/>
                        </Form.Item>
                    </div>
                    <div className={'car-nomer2'}>
                        <Form.Item key={'nomer'} name={'nomer'}>
                            <Input/>
                        </Form.Item>
                    </div>
                    <div className={'car-nomer3'}>
                        <img src={warning} alt=""/>
                    </div>
                </div>

                <Form.Item>
                    <div className={'d-flex mt-5'}>
                        <Link to={'/home/carInsurance/check-face'}>
                            <img src={leftPointer} style={{paddingRight:'15px'}} alt=""/>
                        </Link>
                        <Button className={'footer-button'} block onClick={()=>handleModal()}>
                            Далее
                        </Button>
                    </div>
                </Form.Item>
            </div>

            <Modal
                centered
                visible={open}
                footer={null}
                onCancel={handleModal}
            >
                <div className="nomer-modal">
                    <span className={'nomer-modal-title'}>Номерной знак автомобиля</span>
                    <div className="nomer-modal-body d-flex">
                        <div className="cont1">
                            <span className={'nomer-txt'}>01</span>
                        </div>
                        <div className="cont2">
                            <span className={'nomer-txt'}>707ZZZ</span>
                        </div>
                        <div className="cont3">
                            <img src={flaguz} style={{paddingTop:'10px'}} alt=""/>
                            <span className={'flag-below'} >UZ</span>
                        </div>
                    </div>
                    <Button className='nomer-modal-ok-btn'>
                        <Link to={`/home/carInsurance/car-data`}>
                            Понятно
                        </Link>
                    </Button>
                </div>
            </Modal>
        </div>
    )
}
export default CarNomer;
