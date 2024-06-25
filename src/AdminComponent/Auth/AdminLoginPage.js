import React, { useContext } from 'react';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
    Grid, Container,
    Center
} from '@mantine/core';
import { AuthContext } from '../../pages/Admin/context/AuthContext';

function AdminLoginPage() {
    const [type, toggle] = useToggle(['login', 'register']);
    const { login } = useContext(AuthContext);

    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });
    const handleSubmit = async (values) => {
        console.log(values)
          try {
            await login(values.email, values.password);
            // Redirect or show a success message
    
          } catch (error) {
            // Handle login error
            console.error(error);
          }
      };
    return (
        <>
            <Container fluid={true} >
                <Grid >
                    <Grid.Col col={12} h={"100vh"}>
                        <Center m="auto" h={"100%"} w={{base:'95%',xs:"95%",sm:"90%",md:"50%",lg:"40%",xl:"30%"}}>
                            <Paper m="auto" w={'100%'} radius="md" p="xl" withBorder >
                                <Text size="lg" fw={500} align="center">
                                    ADMIN LOGIN
                                </Text>
                                <Divider  labelPosition="center" my="lg" />

                                <form onSubmit={form.onSubmit(handleSubmit)}>
                                    <Stack>
                                        {type === 'register' && (
                                            <TextInput
                                                label="Name"
                                                placeholder="Your name"
                                                value={form.values.name}
                                                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                                radius="md"
                                            />
                                        )}

                                        <TextInput
                                            required
                                            label="Email"
                                            placeholder="hello@mantine.dev"
                                            value={form.values.email}
                                            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                            error={form.errors.email && 'Invalid email'}
                                            radius="md"
                                        />

                                        <PasswordInput
                                            required
                                            label="Password"
                                            placeholder="Your password"
                                            value={form.values.password}
                                            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                            error={form.errors.password && 'Password should include at least 6 characters'}
                                            radius="md"
                                        />
                                        {type === 'register' && (
                                            <Checkbox
                                                label="I accept terms and conditions"
                                                checked={form.values.terms}
                                                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                                            />
                                        )}
                                    </Stack>
                                    <Group justify="center" mt="xl">
                                        {/* <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                                            {type === 'register'
                                                ? 'Already have an account? Login'
                                                : "Don't have an account? Register"}
                                        </Anchor> */}
                                        <Button fullWidth type="submit" radius="xl">
                                            {upperFirst(type)}
                                        </Button>
                                    </Group>
                                </form>
                            </Paper>
                        </Center>

                    </Grid.Col>
                </Grid>
            </Container>

        </>
    )
}

export default AdminLoginPage;