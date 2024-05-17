import React from 'react'
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

function GusestUserForm() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            firstname: '',lastname:"",email:"",mobileno:"",
        },

        validate: {
        },
    });
    return (
        <>
            <Box mt={18} maw={340} mx="auto">
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput mt={12} size='md'
                        withAsterisk
                        label="First Name"
                        placeholder="Enter Your First Name"
                        {...form.getInputProps('firstname')}
                    />
                    <TextInput mt={12} size='md'
                        withAsterisk
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        {...form.getInputProps('lastname')}
                    />
                    <TextInput mt={12} size='md'
                        withAsterisk
                        label="Email"
                        placeholder="Enter Your Email"
                        {...form.getInputProps('email')}
                    />
                    <TextInput mt={12} size='md'
                        withAsterisk
                        label="Mobile No."
                        placeholder="Enter Your Mobile No."
                        {...form.getInputProps('mobileno')}
                    />
                    <Group mt={12} justify='right'>
                    <Button bg='darkblue' size='md'  align='right'>Continue</Button>

                    </Group>
                    </form>
            </Box>
        </>
    )
}

export default GusestUserForm