import React from "react";
import { Layout } from 'antd';
import Header1 from "./header/Header1";
import Footer1 from "./footer/Footer1";
import Content1 from "./content/Content1";

const { Header, Footer, Sider, Content } = Layout;

function MainLayout(props) {
    return(
        <>
            <Layout>
                <Header>
                    <Header1/>
                </Header>
                <Content>
                    <Content1/>
                </Content>
                {/*<Footer>*/}
                {/*    <Footer1/>*/}
                {/*</Footer>*/}
            </Layout>
        </>
    )
}
export default MainLayout;
