import React, { useContext, useEffect } from 'react'
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { CheckoutContext } from '../context';
function GusestUserForm() {
    const { AddCustomer, userDetail } = useContext(CheckoutContext);
    const form = useForm({
        // mode: 'uncontrolled',
        initialValues: {
            firstname: '', lastname: "", email: "", mobileno: "",
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            firstname: (value) => (value.length > 0 ? null : 'Name is required'),
            lastname: (value) => (value.length > 0 ? null : 'Name is required'),
            //  password: (value) => (value.length >= 6 ? null : 'Password must be at least 6 characters long'),
            mobileno: (value) => (/^\d{10}$/.test(value) ? null : 'Mobile number must be 10 digits'),
        },
    });
    useEffect(() => {
        if (userDetail) {
            form.setFieldValue("firstname", userDetail.name)
            form.setFieldValue("lastname", userDetail.name)
            form.setFieldValue("email", userDetail.email)
            form.setFieldValue("mobileno", userDetail.mobile)
        }
    }, [userDetail])

    return (
        <>
            <Box mt={18} maw={340} mx="auto">
                <form onSubmit={form.onSubmit((values) => AddCustomer(values))}>
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
                        {userDetail ?
                            <Button type="submit" bg='darkblue' size='md' align='right'>Update</Button>

                            :
                            <Button type="submit" bg='darkblue' size='md' align='right'>Continue</Button>
                        }
                    </Group>
                </form>
            </Box>
        </>
    )
}

export default GusestUserForm