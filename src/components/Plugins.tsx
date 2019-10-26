import React from 'react';
import {Tabs,Card, Page, DataTable, Button} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

const Plugins:React.FC= () => {
    const rows = [
      ['floating button','enabled',<Button primary>enable</Button>],
      ['XXXXXX', 'dsafsaf',<Button primary>enable</Button>],
      ['Hello','hahahahahah',<Button primary>enable</Button>],
    ];
  
    return (
      <Page title="Sales by product">
        <Card>
          <DataTable
            columnContentTypes={[
              'text',
              'text',
              'text',
            ]}
            headings={[
              'Plugins',
              'status',
              'Action',
            ]}
            rows={rows}
            // totals={['', '', '', 255, '$155,830.00']}
          />
        </Card>
      </Page>
    );
  }
  export default Plugins;