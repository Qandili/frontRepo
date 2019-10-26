import React, { useState, useCallback } from 'react';

import {AppProvider, Page, Card, Button, ColorPicker, Layout, FormLayout} from '@shopify/polaris';
import { SketchPicker } from 'react-color';
import { TextField } from '@shopify/polaris/types/components/Autocomplete/components';

const StickyButton: React.FC = () => {
    const [state,setState]=useState("fff");
    // const handleChangeComplete = (color:any) => {
    //     setState({ background: color.hex });
    //   };
    return (
        <Page>
            <Layout>
                <Layout.AnnotatedSection
                    title="Background color"
                    description="From Here you can customize the background color of your card"
                >
                    <Card  title="" sectioned>
                        <FormLayout>
                            <Layout.Section>
                                <SketchPicker />
                            </Layout.Section>
                            <Layout.Section secondary>
                                <Card title="Tags" sectioned>
                                <p>!!!!! PREVIEW !!!!!</p>
                                </Card>
                            </Layout.Section>
                        </FormLayout>
                        
                    </Card>
 
                </Layout.AnnotatedSection>
            </Layout> 
        </Page>

      );
}

export default StickyButton;