import React, {useEffect, useState} from "react";
import './language.css'
import uz from '../../../assets/flags/🇺🇿.svg'
import ru from '../../../assets/flags/🇷🇺.svg'
import en from '../../../assets/flags/en.svg'
import {Radio} from "antd";
import HeaderForPane from "../../../components/headerForPane";
import leftPointerSimple from '../../../assets/auth/leftPointerSimple.svg'
import { useTranslation } from 'react-i18next';
import i18next from "i18next";

function Language() {
    const [value, setValue] = useState('uz');
    const { i18n } = useTranslation();

    const [activeLang, setActiveLang] = useState(i18next.language);

    useEffect(()=>{
        setActiveLang(i18next.language)
    }, [i18next.language])
    const handleLang=()=>{

    }
    return(
        <div style={{height:'550px'}}>
            <HeaderForPane title={'App language'} leftPointer={<img src={leftPointerSimple} alt=""/>} link={'/profile'}/>
            <Radio.Group style={{display:'inline'}} onChange={handleLang} defaultValue={value}>
                <div className={'lang-wrapper'}>
                    <div className="lang-item d-flex justify-content-between">
                        <div className={'d-flex'}>
                            <img src={uz} alt=""/>
                            <h6>O'zbek tili</h6>
                        </div>
                        <Radio value={'uz'} onClick={()=>{i18n.changeLanguage('uz')}}/>
                    </div>
                </div>
                <div className={'lang-wrapper'}>
                    <div className="lang-item d-flex justify-content-between">
                        <div className={'d-flex'}>
                            <img src={uz} alt=""/>
                            <h6>Узбек крилл</h6>
                        </div>
                        <Radio value={'uz-cyrl'} onClick={()=>{i18n.changeLanguage('uz-cyrl')}}/>
                    </div>
                </div>
                <div className={'lang-wrapper'}>
                    <div className="lang-item d-flex justify-content-between">
                        <div className={'d-flex'}>
                            <img src={ru} alt=""/>
                            <h6>Русский язык</h6>
                        </div>
                        <Radio value={'ru'} onClick={()=>{i18n.changeLanguage('ru')}}/>
                    </div>
                </div>
                <div className={'lang-wrapper'}>
                    <div className="lang-item d-flex justify-content-between">
                        <div className={'d-flex'}>
                            <img src={en} alt=""/>
                            <h6>English</h6>
                        </div>
                        <Radio value={'en'} onClick={()=>{i18n.changeLanguage('en')}}/>
                    </div>
                </div>
            </Radio.Group>
        </div>
    )
}

export default Language
