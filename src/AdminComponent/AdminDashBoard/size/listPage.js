import { useContext, useState ,useEffect} from 'react';
import { TextInput, Select, Container, Grid, Button, Box, Center, Paper, Textarea, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Table } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import {SizeContext} from './context/sizeContext';
const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function ListPage() {
    const {size,getSizeList,updateSizeclick,deleteSizeclick}=useContext(SizeContext)
    useEffect(()=>{
        getSizeList()
    },[])

    const rows = size.map((element) => (
        <Table.Tr key={element.name}>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.code}</Table.Td>
            <Table.Td>{element.createdAt}</Table.Td>
            <Table.Td>
            <Group>
                    <IconEdit
                    onClick={()=>{updateSizeclick(element)}}
                    size={20} color='blue' />
                    <IconTrash
                    onClick={()=>deleteSizeclick(element)}
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
                    <Table.Th>Size Name</Table.Th>
                    <Table.Th>Size Code</Table.Th>
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