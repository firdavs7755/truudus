import React, {useState} from "react";
import {Layout, Tabs} from 'antd';
import home from '../../assets/footer/home.svg'
import companies from '../../assets/footer/companies.svg'
import polis from '../../assets/footer/polis.svg'
import notification from '../../assets/footer/notification.svg'
import profile from '../../assets/footer/profile.svg'
import enablehome from '../../assets/footer/enableHome.svg'
import enablecompanies from '../../assets/footer/enableCompany.svg'
import enablepolis from '../../assets/footer/enablePolis.svg'
import enablenotification from '../../assets/footer/enableNotification.svg'
import enableprofile from '../../assets/footer/enableProfile.svg'

import Header1 from "../header/Header1";
import Content1 from "../content/Content1";
import Categories from "../../pages/insurances/companies";
import Polis from "../../pages/polis";
import Notification from "../../pages/notification";
import Profile from "../../pages/profile";
import './footer.css'
import Companies from "../../pages/insurances/companies";
import {Link} from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;


function Footer1() {
    const [tab, setTab] = useState(1);

    return(
        <div className={'p-3 footer-wrapper'}>
                {console.log('tab',tab)}
                {/*<Tabs defaultActiveKey="1" tabPosition='bottom' tabBarGutter={window.innerWidth/8} centered>*/}
                <div className={'d-flex justify-content-around'}
                     activeKey={tab}
                     onChange={key => {
                         setTab(parseInt(key));
                     }}>
                    <Link to={'/home'}>
                        <div onClick={()=>setTab(1)}>
                            {tab===1?<img src={enablehome} alt={'home'}/>:<img src={home} alt={'home'}/>}
                        </div>
                    </Link>
                    <Link to={'/companies'}>
                        <div onClick={()=>setTab(2)}>
                            {tab===2?<img src={enablecompanies} alt={'companies'}/>:<img src={companies} alt={'companies'}/>}
                        </div>
                    </Link>
                    <Link to={'/polis'}>
                        <div onClick={()=>setTab(3)}>
                            {tab===3?<img src={enablepolis} alt={'enablepolis'}/>:<img src={polis} alt={'polis'}/>}
                        </div>
                    </Link>
                    <Link to={'/notification'}>
                        <div onClick={()=>setTab(4)}>
                            {tab===4?<img src={enablenotification} alt={'enablenotification'}/>:<img src={notification} alt={'notification'}/>}
                        </div>
                    </Link>
                    <Link to={'/profile'}>
                        <div onClick={()=>setTab(5)}>
                            {tab===5?<img src={enableprofile} alt={'enableprofile'}/>:<img src={profile} alt={'profile'}/>}
                        </div>
                    </Link>
                </div>
            </div>
    )
}
export default Footer1
