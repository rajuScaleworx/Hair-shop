import { useState, useContext } from 'react';
import { TextInput, Container, Grid, Button, Box, Center, Paper, Textarea, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Table } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import CreateProductTypeform from './CreateProductTypeform';
import ListPage from './listPage';
import { ProducttypeContext } from './productTypeContext';

function ProductTypePage() {
    const { showCreateForm, setCreateForm,setUpdateDetail } = useContext(ProducttypeContext)

    const createButton = (type) => {
        setUpdateDetail()
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
                        <Group justify='right'>
                            {/* <Button>Back</Button> */}
                            {showCreateForm === false ?
                                <Button onClick={() => createButton('form')} bg={'blue'}>Create ProductType</Button>
                                :
                                <Button onClick={() => createButton('list')} bg={'blue'}>Go List</Button>
                            }
                        </Group>
                    </Grid.Col>
                    <Grid.Col>
                        {showCreateForm === true ? <CreateProductTypeform /> :
                            <ListPage />
                        }

                    </Grid.Col>
                </Grid>
            </Container>


        </>

    );
}

export default ProductTypePage;
