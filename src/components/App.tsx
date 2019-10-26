import React from 'react';
import Tab from './Tab';

import {AppProvider, Page, Card, Button} from '@shopify/polaris';
const App: React.FC = () => {
  return (
    <AppProvider i18n={{Polaris: {}}}>
    <Page title="Example app">
      <Card sectioned>
        <Tab/>
      </Card>
    </Page>
  </AppProvider>
  );
}

export default App;
