import React, { useState } from 'react';
import { Card, Text, Badge, Group, Divider, Box, Checkbox } from '@mantine/core';
import { IconMapPin, IconLocation, IconCalendarEvent, IconClock, IconPhone } from '@tabler/icons-react';
import classes from './Demo.module.css';

const StorageCard = (props) => {
    const { addlist } = props;
    const [checked, setChecked] = useState(true);
    const onchangeclickcheckbox=(e)=>{
        console.log(e.currentTarget.checked)
        setChecked(e.currentTarget.checked)
    }
    return (
        <>
            {addlist.map((ex, index) => {
                return (
                    <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group position="apart" style={{ marginBottom: 5 }}>
                            <Checkbox
                                checked={checked}
                                onChange={(e) => onchangeclickcheckbox(e)}
                            />
                            <div>
                                <Text weight={500}>Address {index + 1}</Text>
                                {/* <Badge color="green" variant="filled">
                                    MAIN
                                </Badge> */}
                            </div>
                            {/* <Badge color="gray" size="lg">
                                S1
                            </Badge> */}
                        </Group>
                        <Divider my="sm" />
                        <Box style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                            <IconMapPin size={20} />
                            <Text size="sm" style={{ marginLeft: 10 }}>
                                Location
                            </Text>
                            <Text size="sm" style={{ marginLeft: 'auto' }}>
                                {ex.country}
                            </Text>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                            <IconLocation size={20} />
                            <Text size="sm" style={{ marginLeft: 10 }}>
                                Address
                            </Text>
                            <Text size="sm" style={{ marginLeft: 'auto' }}>
                                {ex.address}
                            </Text>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                            <IconCalendarEvent size={20} />
                            <Text size="sm" style={{ marginLeft: 10 }}>
                                Landemark
                            </Text>
                            <Text size="sm" style={{ marginLeft: 'auto' }}>
                                {ex.landemark}
                            </Text>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                            <IconClock size={20} />
                            <Text size="sm" style={{ marginLeft: 10 }}>
                                City
                            </Text>
                            <Text size="sm" style={{ marginLeft: 'auto' }}>
                                {ex.city}
                            </Text>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                            <IconPhone size={20} />
                            <Text size="sm" style={{ marginLeft: 10 }}>
                                Phone number
                            </Text>
                            <Text size="sm" style={{ marginLeft: 'auto' }}>
                                {ex.alternatemobilenumber}
                            </Text>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                            <IconPhone size={20} />
                            <Text size="sm" style={{ marginLeft: 10 }}>
                                Zip Code
                            </Text>
                            <Text size="sm" style={{ marginLeft: 'auto' }}>
                                {ex.zipcode}
                            </Text>
                        </Box>
                        <Group position="apart" mt="md">
                            <Badge color="green" variant="filled">
                                Opened
                            </Badge>
                            <Text size="sm" style={{ marginLeft: 'auto' }}>
                                ...
                            </Text>
                        </Group>
                    </Card>
                )
            })}
        </>
    );
};

export default StorageCard;
