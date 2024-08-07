import { Tabs, Container, Grid, AppShell,Box } from '@mantine/core';
import ProductType from './ProductType/index';
import ProductCategory from './ProductCategory/index';
import ColorPage from './color/index';
import SizePage from './size/index';
import LengthPage from './Length/index';
import CollectionPage from './collection/index';
import companylogog from '../../assets/LOGO.png';

import './admindashboard.scss'
function AdminDashboard() {
    return (
        <AppShell padding={0}>
            <Container fluid={true} h="100vh"
            // style={{minHeight:"100vh"}}
            >
                <Grid h="100%">
                    <Grid.Col span={12} h="100%">
                        <Tabs w="100%" h="100%" defaultValue="dashboard" orientation="vertical">
                            <Grid w="100%" h="100%" gutter={0}>
                                <Grid.Col  h="100%" span={1.5} >

                                    <Tabs.List pt={20} h="100%">
                                    <Box mt={10}>
                                    <img src={companylogog} height="80px" width="150px" />
                                    </Box>
                                        <Tabs.Tab fz={20} pt={15} pb={15} value="dashboard">Dashboard</Tabs.Tab>
                                        <Tabs.Tab fz={20} pt={15} pb={15} value="productlist">Product</Tabs.Tab>
                                        <Tabs.Tab fz={20} pt={15} pb={15} value="product_type">Product Type</Tabs.Tab>
                                        <Tabs.Tab fz={20} pt={15} pb={15} value="product_category">Product Category</Tabs.Tab>
                                        <Tabs.Tab fz={20} pt={15} pb={15} value="color">Color</Tabs.Tab>
                                        <Tabs.Tab fz={20} pt={15} pb={15} value="size">Size</Tabs.Tab>
                                        <Tabs.Tab fz={20} pt={15} pb={15} value="length">Lengths</Tabs.Tab>
                                        <Tabs.Tab fz={20} pt={15} pb={15} value="collection">Collection</Tabs.Tab>



                                    </Tabs.List>
                                </Grid.Col>
                                <Grid.Col span={10.5} h="100%">
                                    <Tabs.Panel h="100%" fz={20} pt={15} pb={15} value="dashboard">Dashboard tab content</Tabs.Panel>
                                    <Tabs.Panel h="100%" fz={20} pt={15} pb={15} value="productlist">productlist tab content</Tabs.Panel>

                                    <Tabs.Panel h="100%" fz={20} pt={15} pb={15} value="product_type">
                                        <ProductType />
                                    </Tabs.Panel>
                                    <Tabs.Panel fz={20} pt={15} pb={15} value="product_category">
                                        <ProductCategory />
                                    </Tabs.Panel>
                                    <Tabs.Panel fz={20} pt={15} pb={15} value="color">
                                        <ColorPage />
                                    </Tabs.Panel>
                                    <Tabs.Panel fz={20} pt={15} pb={15} value="size">
                                        <SizePage />
                                    </Tabs.Panel>
                                    <Tabs.Panel fz={20} pt={15} pb={15} value="length">
                                        <LengthPage />
                                    </Tabs.Panel>
                                    <Tabs.Panel fz={20} pt={15} pb={15} value="collection">
                                    <CollectionPage />
                                    </Tabs.Panel>
                                </Grid.Col>
                            </Grid>
                        </Tabs>
                    </Grid.Col>
                </Grid>
            </Container>
        </AppShell>
    );
}

export default AdminDashboard;