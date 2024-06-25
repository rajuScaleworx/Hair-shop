import React, { useContext, useEffect } from 'react'
import { TextInput, Textarea, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { CheckoutContext } from '../context';
import StorageCard from './AddressList';
function AddressForm() {
    const { addcustomerAddress, addlist } = useContext(CheckoutContext);
console.log(addlist.length)
    const form = useForm({
        initialValues: {
            name: '', address: "", city: "", zipcode: "", country: "", mobileno: "",landemark:""
        },

        validate: {
            name: (value) => (value.trim().length > 0 ? null : 'Name is required'),
            address: (value) => (value.trim().length > 0 ? null : 'Address is required'),
            landemark: (value) => (value.trim().length > 0 ? null : 'Address is required'),
            city: (value) => (value.trim().length > 0 ? null : 'City is required'),
            zipcode: (value) => (/^\d{6}(-\d{4})?$/.test(value) ? null : 'Invalid zipcode'),
            country: (value) => (value.trim().length > 0 ? null : 'Country is required'),
            mobileno: (value) => (/^\d{10}$/.test(value) ? null : 'Mobile number must be 10 digits'),
        },
    });
    useEffect(()=>{
        // if (addlist) {
        //     form.setFieldValue("firstname", userDetail.name)
        //     form.setFieldValue("lastname", userDetail.name)
        //     form.setFieldValue("email", userDetail.email)
        //     form.setFieldValue("mobileno", userDetail.mobile)
        // }
    },[addlist])

    return (
       <>
       {addlist.length===0 ?
        <Box mt={18} maw={340} mx="auto">
            <form onSubmit={form.onSubmit((values) => addcustomerAddress(values))}>
                <TextInput mt={12} size='md'
                    withAsterisk
                    label="Name"
                    placeholder="Enter Your First Name"
                    {...form.getInputProps('name')}
                />
                <Textarea mt={12} size='md'
                    withAsterisk
                    label="Address"
                    placeholder="Enter Your Address"
                    {...form.getInputProps('address')}
                />
                <Textarea mt={12} size='md'
                    withAsterisk
                    label="Landemark"
                    placeholder="Enter Near Landemark"
                    {...form.getInputProps('landemark')}
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
                    {...form.getInputProps('zipcode')}
                />
                <TextInput mt={12} size='md'
                    withAsterisk
                    label="Country"
                    placeholder="Enter Your Country"
                    {...form.getInputProps('country')}
                />
                <TextInput mt={12} size='md'
                    withAsterisk
                    label="Alternate Mobile No"
                    placeholder="Enter Your Alternate Mobile No."
                    {...form.getInputProps('mobileno')}
                />
                <Group mt={12} justify='right'>
                    <Button type="submit" bg='darkblue' size='md' align='right'>Continue</Button>

                </Group>
            </form>
        </Box>
        :  <StorageCard addlist={addlist} />}
       </>
    )
}

export default AddressForm;