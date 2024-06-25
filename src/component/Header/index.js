import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Title, Modal, Indicator, Avatar, Image, Menu
} from '@mantine/core';
import { useContext, useState, ref } from 'react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import companylogog from '../../assets/LOGO.png';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown, IconShoppingCartFilled, IconChevronRight,
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight
} from '@tabler/icons-react';
import LoginForm from '../Auth/loginPage';
import classes from './HeaderTabs.module.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

function Header() {
  const navigate = useNavigate()
  const { cartNumber } = useContext(CartContext)
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [loginmodal, setLoginmodal] = useState(false);
  const userid = localStorage.getItem('userid') || null;
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
  const clickheader = (type) => {
    navigate(`/list/${type}`)
  }

  const UserButton = (
    ({ image, name, email, icon, ...others }) => (
      <UnstyledButton
        // ref={ref}
        style={{
          padding: 'var(--mantine-spacing-md)',
          color: 'var(--mantine-color-text)',
          borderRadius: 'var(--mantine-radius-sm)',
        }}
        {...others}
      >
        <Group>
          <Avatar src={image} radius="xl" />

          <div style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              {name}
            </Text>

            <Text c="dimmed" size="xs">
              {email}
            </Text>
          </div>

          {icon || <IconChevronRight size="1rem" />}
        </Group>
      </UnstyledButton>
    )
  );

  return (
    <>
      <Box
      //style={{ position: 'relative', zIndex: "9999",margin:'auto', background: '#FFFF' }}
      // style={{background:'#d0d0d0',position:'fixed',top:'0',bottom:'0',width:'100%',height:'60px'}}
      >
        <header className={classes.header}>
          <Group justify="space-between" w="80%" m="auto" h="100%">
            <Group h="100%" gap={0} visibleFrom="sm">
              <a style={{ color: '#000', fontSize: rem(16) }} onClick={() => clickheader('men')} className={classes.link}>
                MEN
              </a>
              <a style={{ color: '#000', fontSize: rem(16) }} onClick={() => clickheader('women')} className={classes.link}>
                LADIES
              </a>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box style={{ color: '#000', fontSize: rem(16) }} component="span" mr={5}>
                        TURBANS
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(18), height: rem(18) }}
                        color={'#000'}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <a style={{ color: '#000', fontSize: rem(16) }} href="#" className={classes.link}>
                HELP & SUPPORT
              </a>
              <a style={{ color: '#000', fontSize: rem(16) }} href="#" className={classes.link}>
                VAT RELIEF
              </a>
            </Group>
            <Image src={companylogog} height={100} width={100} />

            <Group>

            </Group>
            <Group visibleFrom="sm">
              <Indicator m={10} inline label={cartNumber} size={25} mr={30}>
                <IconShoppingCartFilled
                  // size="sm"
                  size={40}
                  color={'#000'}
                  radius="sm"
                  onClick={() => { navigate('/cart') }}
                />
              </Indicator>
              {userid ?
                <Menu shadow="md" width={200} withArrow>
                  <Menu.Target>
                    <Group>
                      <Avatar src="" radius="xl" />

                      <div style={{ flex: 1 }}>
                        <Text size="sm" fw={500}>
                          Raju
                        </Text>

                        <Text c="dimmed" size="xs">
                          email
                        </Text>
                      </div>

                      {<IconChevronRight size="1rem" />}
                    </Group>
                    {/* <Button bg='none' c="blue">Toggle menu</Button> */}
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Label>Application</Menu.Label>
                    <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                      Order History
                    </Menu.Item>
                    <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
                      Messages
                    </Menu.Item>
                    <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
                      Gallery
                    </Menu.Item>
                    <Menu.Item
                      leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
                      rightSection={
                        <Text size="xs" c="dimmed">
                          ⌘K
                        </Text>
                      }
                    >
                      Search
                    </Menu.Item>

                    <Menu.Divider />

                    <Menu.Label>Danger zone</Menu.Label>
                    <Menu.Item
                      leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
                    >
                      Transfer my data
                    </Menu.Item>
                    <Menu.Item
                      color="red"
                      leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                    >
                      Delete my account
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
                :
                <Button size='lg' variant="default" radius='md' bg={'#000'} c={'#ffff'} fs={28} onClick={() => setLoginmodal(true)}>Log in</Button>
              }
              {/* <Button radius='md'>Sign up</Button> */}
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title={<Image src={companylogog} height={100} width={100} />}
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

            <a href="#" className={classes.link}>
              MAN
            </a>
            <a href="#" className={classes.link}>
              LADIES
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  TURBANS
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link}>
              HELP & SUPPORT
            </a>
            <a href="#" className={classes.link}>
              VAT RELIEF
            </a>

            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>

              {/* <Button>Sign up</Button> */}
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
      <Modal opened={loginmodal}
        onClose={() => setLoginmodal(false)} title="Authentication">
        <LoginForm />
      </Modal>
    </>
  );
}
export default Header;