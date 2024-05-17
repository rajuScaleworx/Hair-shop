import React from 'react';
import { Tabs } from '@mantine/core';
import GusestUserForm from './GusestUserForm';
function PersonalInformation() {

  return (
    <>
     <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" >
          Order as a Guest
        </Tabs.Tab>
        <Tabs.Tab value="messages">
          Sign In
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
       <GusestUserForm />
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>
    </Tabs>
    </>
  )
}

export default PersonalInformation;