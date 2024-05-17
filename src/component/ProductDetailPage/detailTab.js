import React from 'react'
import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import FaqSimple from './askQuestionPage';
function DetailTab() {
    const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <>
    <Tabs defaultValue="gallery">
      <Tabs.List justify='space-between'>
        <Tabs.Tab w={'33%'} fz={20} c={'darkblue'} value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Details
        </Tabs.Tab>
        <Tabs.Tab w={'33%'} fz={20} value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Rating & Review 
        </Tabs.Tab>
        <Tabs.Tab w={'33%'} fz={20} value="settings" leftSection={<IconSettings style={iconStyle} />}>
        Frequently Asked Questions
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        <FaqSimple />
      </Tabs.Panel>
    </Tabs>
    </>
  )
}

export default DetailTab;