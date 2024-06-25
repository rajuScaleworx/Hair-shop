import React from 'react';
import {  Text } from '@mantine/core';
import { useTheme } from './context/ThemeContext';

const Header = () => {
  const { theme } = useTheme();

  return (
    // <MantineHeader height={60} p="xs" style={{ backgroundColor: theme.colors.primary }}>
      <Text c="white" size="lg">Admin Dashboard</Text>
    // </MantineHeader>
  );
};

export default Header;
