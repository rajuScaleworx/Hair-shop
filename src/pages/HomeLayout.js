import React from 'react';
import {Container,Divider,Grid} from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/index';
import FooterLinks from './Footer/Footer';
function HomeLayout() {
  return (
    <>
    <Container fluid={true}>
      <Grid>
        <Grid.Col span={12} w={"70%"}  style={{zIndex:'2'}} 
        > <Header /></Grid.Col>
        <Grid.Col span={12}  style={{marginTop:'60px',zIndex:'1'}}><Outlet/></Grid.Col>
        <Grid.Col span={12} >
          <Divider />
          <FooterLinks/></Grid.Col>
      </Grid>
    </Container>
    </>
  )
}

export default HomeLayout;