import React from "react";
import './item.css';
import pointer from "../../assets/home/pointer.svg";
import {Link} from "react-router-dom";


function MyItem({img,title,subTitle,rightEl,rightElTeg,bottomElImg,bottomElTitle,bottomElBackColor,link,isLast}) {
    return(
        <>
            <div className={isLast?'item-wrapper mb-5':'item-wrapper'}>
                <div className='d-flex justify-content-between right-item'>
                    <Link to={link} style={{textDecoration:'none'}}>
                        <div className='d-flex' >
                            <img src={img} className='' alt='car'/>
                            <div>
                                <p className='item-title'>{title}</p>
                                <p className='item-sub-title'>{subTitle}</p>
                            </div>
                        </div>
                    </Link>

                    {rightEl?
                        <Link to={link}>
                            <img src={rightEl} className='right-btn2' alt='true img'/>
                        </Link>
                        :''}
                    {!rightEl?(rightElTeg?rightElTeg:''):''}
                </div>
                {(bottomElTitle||bottomElImg||bottomElBackColor)?
                    <div className={'bottomBtn'} style={{background:bottomElBackColor}}>
                        <span>{bottomElTitle}</span>
                        <img style={{marginLeft: '10px'}} src={bottomElImg} alt=""/>
                    </div>
                    :''}
            </div>
        </>
    )
}

export default MyItem;
