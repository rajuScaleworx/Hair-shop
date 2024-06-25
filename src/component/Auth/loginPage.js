// import { useToggle, upperFirst } from '@mantine/hooks';
// import { useForm } from '@mantine/form';
// import {
//   TextInput,
//   PasswordInput,
//   Text,
//   Paper,
//   Group,
//   PaperProps,
//   Button,
//   Divider,
//   Checkbox,
//   Anchor,
//   Stack,
// } from '@mantine/core';
// import { GoogleButton } from './GoogleButton';
// import { TwitterButton } from './TwitterButton';
// import { useAuth } from '../../pages/Admin/context/AuthContext';

//  function LoginForm() {
//   const { login } = useAuth();

//   const [type, toggle] = useToggle(['login', 'register']);
//   const form = useForm({
//     initialValues: {
//       email: '',
//       password: '',
//     },

//     validate: {
//      // email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
//       password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
//     },
//   });
//   const handleSubmit = async (values) => {
//     console.log(values)
//       try {
//         await login(values.email, values.password);
//         // Redirect or show a success message

//       } catch (error) {
//         // Handle login error
//         console.error(error);
//       }
//   };



//   return (
//     <Paper radius="md" p="xl" withBorder >
//       <Text size="lg" fw={500}>
//         Welcome to Back, {type} with
//       </Text>

//       <Group grow mb="md" mt="md">
//         <GoogleButton radius="xl">Google</GoogleButton>
//         <TwitterButton radius="xl">Twitter</TwitterButton>
//       </Group>

//       <Divider label="Or continue with email" labelPosition="center" my="lg" />

//       <form onSubmit={form.onSubmit(handleSubmit)}>
//         <Stack>
//           {type === 'register' && (
//             <TextInput
//               label="Name"
//               placeholder="Your name"
//               value={form.values.name}
//               onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
//               radius="md"
//             />
//           )}

//           <TextInput
//             required
//             label="Email"
//             placeholder="hello@mantine.dev"
//             value={form.values.email}
//             onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
//             error={form.errors.email && 'Invalid email'}
//             radius="md"
//           />

//           <PasswordInput
//             required
//             label="Password"
//             placeholder="Your password"
//             value={form.values.password}
//             onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
//             error={form.errors.password && 'Password should include at least 6 characters'}
//             radius="md"
//           />

//           {type === 'register' && (
//             <Checkbox
//               label="I accept terms and conditions"
//               checked={form.values.terms}
//               onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
//             />
//           )}
//         </Stack>

//         <Group justify="space-between" mt="xl">
//           <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
//             {type === 'register'
//               ? 'Already have an account? Login'
//               : "Don't have an account? Register"}
//           </Anchor>
//           <Button type="submit"  radius="xl">
//             Login
//           </Button>
//         </Group>
//       </form>
//     </Paper>
//   );
// }

// export default LoginForm;