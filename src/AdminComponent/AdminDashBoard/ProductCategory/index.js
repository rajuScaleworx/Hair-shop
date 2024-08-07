
import { useState } from 'react';
import { TextInput, Select, Container, Grid, Button, Box, Center, Paper, Textarea, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Table } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
function ProductCategory() {
    const [showCreateForm, setCreateForm] = useState(false)

    const createButton = (type) => {
        if (type === "list") {
            setCreateForm(false)

        }
        else if (type === "form") {
            setCreateForm(true)
        }
    }

    return (
        <>
            <Container pt="3%" pl="4%" pr="4%" fluid={true}>
                <Grid>
                    <Grid.Col>
                        <Group justify='space-between'>
                            <Button>Back</Button>
                            {showCreateForm === false ?
                                <Button onClick={() => createButton('form')} bg={'blue'}>Create Product Category</Button>
                                :
                                <Button onClick={() => createButton('list')} bg={'blue'}>Go List</Button>
                            }
                        </Group>
                    </Grid.Col>
                    <Grid.Col>
                        {showCreateForm === true ? <CreateForm /> :
                            <Demo />
                        }

                    </Grid.Col>
                </Grid>
            </Container>

        </>

    );
}

export default ProductCategory;

const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
    const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
            <Table.Td>{element.position}</Table.Td>
            <Table.Td>{element.position}</Table.Td>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>
                <Group>
                    <IconEdit size={20} color='blue' />
                    <IconTrash size={20} color='red' />
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
                    <Table.Th>Product Category</Table.Th>
                    <Table.Th>Create Date</Table.Th>
                    <Table.Th>Action</Table.Th>
                    {/* <Table.Th>Atomic mass</Table.Th> */}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}

const CreateForm = () => {
    const form = useForm({
        initialValues: {
            name: '',
            producttype: "",
            desc: '',
        },
        validate: {
            name: (value) => (value === "" ? 'Name must be at least 6 characters' : null),
            desc: (value) => (value === "" ? 'Desc must be at least 6 characters' : null),

        },
    });

    const handleSubmit = (values) => {
        console.log(values);
        // Handle form submission here
    };
    return (
        <>
            <Paper m="auto" h="100%" p="xl" style={{ width: "30%" }}>
                <Center w="100%" h={"100%"} shadow="md">

                    <form style={{ width: '100%' }} onSubmit={form.onSubmit(handleSubmit)}>
                        <Select
                            label="Select Product Type"
                            placeholder="Pick value"
                            data={['React', 'Angular', 'Vue', 'Svelte']}
                            searchable
                            {...form.getInputProps('producttype')}

                        />
                        <TextInput fz={25}

                            label="Product Category Name"
                            placeholder=""
                            {...form.getInputProps('name')}
                        />

                        <Textarea
                            fz={25}
                            label="Description"
                            type="Description"
                            placeholder="desc"
                            mt="md"
                            {...form.getInputProps('desc')}
                        />
                        <Button type="submit" fullWidth mt="xl">
                            Submit
                        </Button>
                    </form>
                </Center>

            </Paper>
        </>
    )
}