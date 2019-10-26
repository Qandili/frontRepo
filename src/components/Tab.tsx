import React from 'react';
import  { useState, useCallback } from 'react';
import Tables from './Plugins'
import {Tabs,Card} from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import Plugins from './Plugins';
import StickyButton from './StickyButton';

const Tab:React.FC = () => {
    const [selected, setSelected] = useState(0);
  
    const handleTabChange = useCallback(
      (selectedTabIndex) => setSelected(selectedTabIndex),
      [],
    );
  
    const tabs = [
        {
            id: 'plugins',
            content:"Plugins",
            accessibilityLabel: 'All customers',
            panelID: '',
        },
      {
        id: 'Sticky Button',
        content: 'Sticky Button',
        accessibilityLabel: 'All customers',
        panelID: '',
      },
      {
        id: 'Notifications',
        content: 'Notifications',
        panelID: '',
      },
      {
        id: 'Badges',
        content: 'Badges',
        panelID: '',
      },
      {
        id: 'Countdown times',
        content: 'ProspecCountdown timests',
        panelID: '',
      },
    ];
  
    return (
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <Card.Section title={tabs[selected].content}>
          {
               selected == 0 ?  <Plugins/>:
              selected == 1 ? <StickyButton/> : null
          }
          </Card.Section>
        </Tabs>
      </Card>
    );
  }

export default Tab;
