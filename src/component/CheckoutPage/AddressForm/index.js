import React from 'react'
import { TextInput,Textarea, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

function AddressForm() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            firstname: '',lastname:"",email:"",mobileno:"",
        },

        validate: {
        },
    });
  return (
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
        <Textarea mt={12} size='md'
            withAsterisk
            label="Address"
            placeholder="Enter Your Address"
            {...form.getInputProps('email')}
        />
        <TextInput mt={12} size='md'
            withAsterisk
            label="City."
            placeholder="Enter Your City"
            {...form.getInputProps('city')}
        />
         <TextInput mt={12} size='md'
            withAsterisk
            label="Zip Code."
            placeholder="Enter Your Zip Code"
            {...form.getInputProps('city')}
        />
        <TextInput mt={12} size='md'
            withAsterisk
            label="Country"
            placeholder="Enter Your Country"
            {...form.getInputProps('country')}
        />
         <TextInput mt={12} size='md'
            withAsterisk
            label="Country"
            placeholder="Enter Your Mobile No."
            {...form.getInputProps('mobileno')}
        />
        <Group mt={12} justify='right'>
        <Button bg='darkblue' size='md'  align='right'>Continue</Button>

        </Group>
        </form>
</Box>
  )
}

export default AddressForm;