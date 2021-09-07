import React from "react";
import heart from "../../../assets/home/heart.svg";
import './about.css';
import HeaderForPane from "../../../components/headerForPane";
import leftPointerSimple from '../../../assets/auth/leftPointerSimple.svg'

function AboutUs() {
    return(
       <>
           <HeaderForPane title={'About us'} leftPointer={<img src={leftPointerSimple} alt=""/>} link={'/profile'}/>
           <div style={{padding:'16px'}}>
               <div className="about-wrapper">
                   <div className={'about-brand'} style={{marginTop:'25px'}}>
                       <span className={'truudus'}>Truudus</span>
                       <img src={heart} className={'heart'} alt=""/>
                   </div>
                   <div className={'about-body'}>
                       <span className={'about-app'}>О приложении</span>
                       <p className={'about-desc'}>
                           Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
                       </p>
                   </div>
               </div>
           </div>
       </>
    )
}

export default AboutUs
