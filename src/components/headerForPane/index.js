import React from "react";
import './headerForPane.css'
import {Link} from "react-router-dom";

function HeaderForPane({title,leftPointer,link}) {
    return(
        <div className={'pane-wrapper'}>
            {leftPointer?
                <span className={'rightPointer'}>
                    <Link to={link}>
                        {leftPointer}
                    </Link>
                </span>:""}
            <span className={'title'}>{title}</span>
        </div>
    )
}
export default HeaderForPane;
