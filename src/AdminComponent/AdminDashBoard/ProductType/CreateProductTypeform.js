import { useContext, useEffect, useState } from 'react';
import { TextInput, Container, Grid, Button, Box, Center, Paper, Textarea, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Table } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { ProducttypeContext } from './productTypeContext';
function CreateProductTypeform() {
    const { submitloading, CreateProductType, updateDetail, updateProductType } = useContext(ProducttypeContext)
    const form = useForm({
        initialValues: {
            name: '',
            desc: '',
        },
        validate: {
            name: (value) => (value === "" ? 'Name must be at least 6 characters' : null),
            //    desc: (value) => (value === "" ? 'Desc must be at least 6 characters' : null),

        },
    });
    useEffect(() => {
        if (updateDetail) {
            form.setFieldValue("name", updateDetail.name)
        }
    }, [])

    const handleSubmit = (values) => {
        console.log(values);
        if (updateDetail) {
            updateProductType(values)
        }
        else {
            CreateProductType(values)
        }
        // Handle form submission here
    };

    return (
        <>
            <Paper m="auto" h="100%" p="xl" style={{ width: "30%" }}>
                <Center w="100%" h={"100%"} shadow="md">

                    <form style={{ width: '100%' }} onSubmit={form.onSubmit(handleSubmit)}>
                        <TextInput fz={25}

                            label="Product Type Name"
                            placeholder="your@email.com"
                            {...form.getInputProps('name')}
                        />
                        {!updateDetail ?
                            <Textarea
                                fz={25}
                                label="Description"
                                type="text"
                                placeholder="Description"
                                mt="md"
                                {...form.getInputProps('desc')}
                            />
                            : ""}
                        {updateDetail ?
                            <Button loading={submitloading} loaderProps={{ type: 'dots' }}  type="submit" fullWidth mt="xl">
                                Update
                            </Button> :

                            <Button loading={submitloading} loaderProps={{ type: 'dots' }} type="submit" fullWidth mt="xl">
                                Submit
                            </Button>
                        }
                    </form>
                </Center>

            </Paper>
        </>
    )
}

export default CreateProductTypeform