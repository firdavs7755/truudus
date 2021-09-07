import React, {useEffect} from "react";
import './insurance-companies.css'
import {createStructuredSelector} from "reselect";
import {selectCompanies} from "../../../redux/actions/homeSelector";
import {connect} from "react-redux";
import MyItem from "../../../components/item";

function InsuranceCompanies({companiesState,match}) {
    const {id} = match.params;
    let comps=companiesState.find(item=>item.id===parseInt(id))?.companys;
    return(
        <div className={'comp-wrapper'}>
            {console.log('companiesState',companiesState)}
            {console.log('id',id)}
            {console.log('comps',comps)}
            {
                (comps.length>0)?
                comps.map(c=>(
                    <MyItem img={c.logo} title={c.name} subTitle={c.description}/>
                ))
                    :'nodata'
            }
        </div>
    )
}

const mstp = createStructuredSelector({
    companiesState:selectCompanies,
})

export default connect(mstp,null)(InsuranceCompanies)
