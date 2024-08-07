import { useContext, useEffect, useState } from 'react';
import { TextInput, Container, Grid, Button, Box, Center, Paper, Textarea, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Table } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { SizeContext } from './context/sizeContext';
function CreateSizeTypeform() {
    const { submitloading, updateDetail,updateSize,CreateSize } = useContext(SizeContext)
    const form = useForm({
        initialValues: {
            name: '',
            code: "",
            desc: '',
        },
        validate: {
            name: (value) => (value === "" ? 'Name must be at least 6 characters' : null),
            desc: (value) => (value === "" ? 'Desc must be at least 6 characters' : null),

        },
    });

    useEffect(() => {
        if (updateDetail) {
            form.setFieldValue("name", updateDetail.name)
            form.setFieldValue("code", updateDetail.code)
            form.setFieldValue("desc", updateDetail.desc)
        }
    }, [])

    const handleSubmit = (values) => {
        console.log(values);
        if (updateDetail) {
            updateSize(values)
        }
        else {
            CreateSize(values)
        }
        // Handle form submission here
    };

    return (
        <>
               <Paper m="auto" h="100%" p="xl" style={{ width: "30%" }}>
                <Center w="100%" h={"100%"} shadow="md">

                    <form style={{ width: '100%' }} onSubmit={form.onSubmit(handleSubmit)}>

                        <TextInput fz={25}

                            label="Size Name"
                            placeholder=""
                            {...form.getInputProps('name')}
                        />
                        <TextInput fz={25}

                            label="Size Code"
                            placeholder=""
                            {...form.getInputProps('code')}
                        />

                        <Textarea
                            fz={25}
                            label="Description"
                            type="Description"
                            placeholder="desc"
                            mt="md"
                            {...form.getInputProps('desc')}
                        />
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

export default CreateSizeTypeform;