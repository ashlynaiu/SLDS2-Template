import React from 'react';
import { IconSettings } from '@salesforce/design-system-react';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'slds-gray',
      values: [
        {
          name: 'slds-gray',
          value: '#f3f2f2',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'slds-blue',
          value: '#1589ee',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <IconSettings iconPath="https://design-system-react-components.herokuapp.com/assets/icons">
        <div className="slds-scope" style={{ padding: '1rem' }}>
          <Story />
        </div>
      </IconSettings>
    ),
  ],
};

export default preview; 