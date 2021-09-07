import React, {useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import MainLayout from "./layouts/MainLayout";
import Companies from "./pages/insurances/companies";
import Polis from "./pages/polis";
import Notification from "./pages/notification";
import Profile from "./pages/profile";
import Footer1 from "./layouts/footer/Footer1";
import { useTranslation } from 'react-i18next';

import CarInsurance from "./pages/insurances/car-insurance";
import InsuranceCompanies from "./pages/insurances/insurance-companies";
import Auth from "./pages/auth";
import Signin from "./pages/auth/signin/signin";
import Signup from "./pages/auth/signup/Signup";
import AboutUs from "./pages/profile/aboutUs/About";
import Language from "./pages/profile/language/Language";
import CheckFace from "./pages/insurances/check-face/CheckFace";
import CarNomer from "./pages/insurances/car-nomer/CarNomer";
import CarData from "./pages/insurances/car-data/CarData";
import OwnerInfo from "./pages/insurances/owner-info/OwnerInfo";
import Identification from "./pages/insurances/identification/Indentification";
import Verification from "./pages/insurances/verification/Verification";
import Drivers from "./pages/insurances/drivers/Drivers";
import InsuranceHistory from "./pages/insurances/insurance-history/InsuranceHistory";
import TestQuestion from "./pages/insurances/test-question/TestQuestion";


function App() {
    const [isFooter,setIsFooter] = useState(false);
    const { t } = useTranslation();

    return (
    <div className="App">
      {/*<MainLayout>*/}
      {/*<p>{t('Registratsiya')}</p>*/}
          <div className={''} >
              <Switch>
                  <Route exact path={'/home'} component={MainLayout}/>
                  <Route exact path={'/home/carInsurance'} component={CarInsurance}/>
                  <Route exact path={'/home/carInsurance/check-face'} component={CheckFace}/>
                  <Route exact path={'/home/carInsurance/car-nomer'} component={CarNomer}/>
                  <Route exact path={'/home/carInsurance/car-data'} component={CarData}/>
                  <Route exact path={'/home/carInsurance/owner-info'} component={OwnerInfo}/>
                  <Route exact path={'/home/carInsurance/identification'} component={Identification}/>
                  <Route exact path={'/home/carInsurance/verification'} component={Verification}/>
                  <Route exact path={'/home/carInsurance/drivers'} component={Drivers}/>
                  <Route exact path={'/home/carInsurance/ins-history'} component={InsuranceHistory}/>
                  <Route exact path={'/home/carInsurance/test-question'} component={TestQuestion}/>
                  <Route exact path={'/home/insurance-companies/:slug/:id'} component={InsuranceCompanies}/>
                  {/*<Route path={'/auth'} component={Auth}/>*/}
                  <Route path={'/auth/signin'} component={Signin}/>
                  <Route path={'/auth/signup'} component={Signup}/>
                  <Route path={'/companies'} component={Companies}/>
                  <Route path={'/polis'} component={Polis}/>
                  <Route path={'/notification'} component={Notification}/>
                  <Route exact path={'/profile'} component={Profile}/>
                  <Route exact path={'/profile/about-us'} component={AboutUs}/>
                  <Route exact path={'/profile/language'} component={Language}/>
                  <Route render={() => <Redirect to="/home"/>}></Route>
              </Switch>
          </div>

        <Footer1/>

    </div>
  );
}

export default(App);
