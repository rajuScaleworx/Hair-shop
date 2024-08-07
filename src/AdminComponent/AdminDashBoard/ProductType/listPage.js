import React, { useEffect } from 'react'
import { useState,useContext } from 'react';
import { TextInput, Container, Grid, Button, Box, Center, Paper, Textarea, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Table } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import {ProducttypeContext} from './productTypeContext';
import moment from 'moment';
const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function ListPage() {
    const {getproducttypeList,producttype,updateProductTypeclick,deleteProductTypeclick}=useContext(ProducttypeContext)
    useEffect(()=>{
        getproducttypeList()
    },[])

    const rows = producttype.map((element) => (
        <Table.Tr key={element.name}>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{moment(element.createdAt).format('DD/MM/YY')}</Table.Td>
            <Table.Td>
                <Group>
                    <IconEdit
                    onClick={()=>{updateProductTypeclick(element)}}
                    size={20} color='blue' />
                    <IconTrash
                    onClick={()=>deleteProductTypeclick(element)}
                    size={20} color='red' />
                </Group>
            </Table.Td>
            {/* <Table.Td>{element.mass}</Table.Td> */}
        </Table.Tr>
    ));

    return (
        <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Product Type</Table.Th>
                    <Table.Th>Create Date</Table.Th>
                    <Table.Th>Action</Table.Th>
                    {/* <Table.Th>Atomic mass</Table.Th> */}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}

export default ListPage;