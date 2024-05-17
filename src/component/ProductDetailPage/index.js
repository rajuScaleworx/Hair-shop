import { Container, Grid, Title, Rating, Box, Text, Divider, Group, ActionIcon, Radio, CheckIcon, Button } from '@mantine/core';
import React, { useState } from 'react'
import Imagescroll from './Imagescroll';
import { useCounter } from '@mantine/hooks';
import DetailTab from './detailTab';
function DetailPage() {
    const [valuerating, setValueRating] = useState(4);
    const [count, handlers] = useCounter(0, { min: 0, max: 10 });

    return (
        <>
            <Container mt={100} w={'70%'} fluid={true}>
                <Grid>
                    <Grid.Col span={12}>
                        col-12
                    </Grid.Col>
                </Grid>
                <Grid>

                    <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 12, lg: 5, xl: 5 }}>
                        <Imagescroll />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 12, lg: 7, xl: 7 }}>
                        <Title c={'darkblue'}>Black Hair</Title>
                        <Box display='flex'><Rating value={valuerating} />&nbsp;&nbsp;<Text c={'darkblue'}>({valuerating})</Text></Box>
                        <Box mt={20}><Text c={'darkblue'} fz={22} fw={550}>2500 INR</Text></Box>
                        <Divider mt={20} />
                        <Group mt={20} display='flex' justify="left">
                            <Box>
                                <Text>Available Size</Text>
                                <Group mt={8}>
                                    <ActionIcon fw={600} variant="filled" bg="darkblue" aria-label="Settings">
                                        1
                                    </ActionIcon>
                                    <ActionIcon fw={600} variant="filled" bg={'#ffff'} c={"black"} aria-label="Settings">
                                        2
                                    </ActionIcon>
                                    <ActionIcon fw={600} variant="filled" bg={'#ffff'} c={"black"} aria-label="Settings">
                                        3
                                    </ActionIcon>
                                </Group>
                            </Box>
                            <Box ml={'5%'}>
                                <Text>Available Color</Text>
                                <Group mt={8}>
                                    <Radio iconColor="black" color='black'
                                        label="" name="check3" value="check3" defaultChecked />
                                    <Radio iconColor="darkblue" color='darkblue'
                                        label="" name="check2" value="check2" defaultChecked />


                                </Group>
                            </Box>
                        </Group>
                        <Divider mt={20} />

                        <Box mt={20}><Text>Last Left- make Yours</Text></Box>
                        <Box mt={20}>

                            <Group justify="left">
                                <Button fz={20} bg={'#ffff'} c={'black'} onClick={handlers.decrement}>-</Button>
                                <Text fz={20} fw={600} c={'darkblue'}>{count}</Text>
                                <Button fz={20} bg={'#ffff'} c={'black'} onClick={handlers.increment}>+</Button>
                                <Button ml={20} bg={"darkblue"}>Add to cart</Button>
                            </Group>

                        </Box>
                    </Grid.Col>
                </Grid>
                <Grid>
                    <Grid.Col span={12} mt={20}>
                    <DetailTab />
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}

export default DetailPage;