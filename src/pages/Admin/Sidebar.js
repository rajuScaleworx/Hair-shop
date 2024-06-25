import React from 'react';
import { Navbar, NavLink } from '@mantine/core';
import { useTheme } from './context/ThemeContext';

const Sidebar = () => {
  const { theme } = useTheme();

  return (
    <Navbar width={{ base: 250 }} p="xs" style={{ backgroundColor: theme.colors.primary }}>
      <NavLink label="Dashboard" style={{ color: theme.colors.text }} />
      <NavLink label="Settings" style={{ color: theme.colors.text }} />
      <NavLink label="Profile" style={{ color: theme.colors.text }} />
    </Navbar>
  );
};

export default Sidebar;
