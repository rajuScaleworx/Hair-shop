import { useState } from 'react';
import { TextInput, Container, Grid, Button, Box, Center, Paper, Textarea, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Table } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import CreateProductTypeform from './CreateProductTypeform';
import ProductTypeProvider from './productTypeContext';
import ListPage from './listPage';
import ProductTypePage from './page';
function ProductType() {

    return (
        <>
            <ProductTypeProvider>
                <ProductTypePage />
            </ProductTypeProvider>
        </>

    );
}

export default ProductType;
