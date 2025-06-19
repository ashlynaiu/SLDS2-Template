import React from 'react';
import { Icon } from '@salesforce/design-system-react';
import {
  QuickActionCard,
  StatusCard,
  ProcessFlow,
  TeamMembers,
  TagsSection,
  TabbedContent,
} from './PrototypeComponents';

export default {
  title: 'SLDS Prototype Components',
  parameters: {
    layout: 'padded',
  },
};

// Quick Action Card Story
export const QuickActions = {
  render: () => (
    <QuickActionCard
      title="Quick Actions"
      icon={<Icon category="utility" name="quick_text" />}
      actions={[
        {
          label: 'Create',
          onClick: () => alert('Create clicked'),
        },
        {
          label: 'Edit',
          variant: 'brand',
          onClick: () => alert('Edit clicked'),
        },
        {
          label: 'Delete',
          variant: 'destructive',
          onClick: () => alert('Delete clicked'),
        },
      ]}
    />
  ),
};

// Status Cards Story
export const StatusCards = {
  render: () => (
    <div className="slds-grid slds-wrap slds-grid_pull-padded">
      <div className="slds-col slds-size_1-of-3 slds-p-horizontal_small">
        <StatusCard
          title="Total Users"
          count="1,234"
          trend="+12%"
          trendType="positive"
          icon={<Icon category="utility" name="people" size="large" />}
        />
      </div>
      <div className="slds-col slds-size_1-of-3 slds-p-horizontal_small">
        <StatusCard
          title="Active Sessions"
          count="567"
          trend="-3%"
          trendType="negative"
          icon={<Icon category="utility" name="activity" size="large" />}
        />
      </div>
      <div className="slds-col slds-size_1-of-3 slds-p-horizontal_small">
        <StatusCard
          title="Revenue"
          count="$89.2K"
          trend="+25%"
          trendType="positive"
          icon={<Icon category="utility" name="money" size="large" />}
        />
      </div>
    </div>
  ),
};

// Process Flow Story
export const ProcessFlowExample = {
  render: () => (
    <ProcessFlow
      steps={[
        { label: 'Requirements' },
        { label: 'Design' },
        { label: 'Development' },
        { label: 'Testing' },
        { label: 'Deployment' },
      ]}
      currentStep={2}
    />
  ),
};

// Team Members Story
export const TeamMembersExample = {
  render: () => (
    <TeamMembers
      members={[
        { name: 'John Doe', role: 'Product Manager', initials: 'JD' },
        { name: 'Jane Smith', role: 'UX Designer', initials: 'JS' },
        { name: 'Bob Johnson', role: 'Developer', initials: 'BJ' },
        { name: 'Alice Brown', role: 'QA Engineer', initials: 'AB' },
        { name: 'Charlie Wilson', role: 'DevOps', initials: 'CW' },
        { name: 'Diana Prince', role: 'Data Analyst', initials: 'DP' },
      ]}
    />
  ),
};

// Tags Section Story
export const TagsExample = {
  render: () => (
    <TagsSection
      tags={[
        { label: 'React', variant: 'brand' },
        { label: 'JavaScript' },
        { label: 'SLDS', variant: 'success' },
        { label: 'Prototype' },
        { label: 'UI/UX', variant: 'warning' },
      ]}
      onTagRemove={(index) => alert(`Remove tag at index ${index}`)}
    />
  ),
};

// Tabbed Content Story
export const TabbedContentExample = {
  render: () => (
    <TabbedContent
      tabs={[
        {
          label: 'Overview',
          content: (
            <div>
              <h3>Project Overview</h3>
              <p>This is the main overview of the project with key information and metrics.</p>
              <ul>
                <li>Total components: 25</li>
                <li>Test coverage: 85%</li>
                <li>Performance score: A+</li>
              </ul>
            </div>
          ),
        },
        {
          label: 'Details',
          content: (
            <div>
              <h3>Detailed Information</h3>
              <p>Here you can find more detailed information about the project components and architecture.</p>
              <div className="slds-m-top_medium">
                <strong>Tech Stack:</strong>
                <ul>
                  <li>React 18</li>
                  <li>Salesforce Lightning Design System</li>
                  <li>Storybook</li>
                  <li>Node.js</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          label: 'Settings',
          content: (
            <div>
              <h3>Project Settings</h3>
              <p>Configure your project settings and preferences here.</p>
              <div className="slds-form-element slds-m-top_medium">
                <label className="slds-form-element__label">Environment</label>
                <div className="slds-form-element__control">
                  <select className="slds-select">
                    <option>Development</option>
                    <option>Staging</option>
                    <option>Production</option>
                  </select>
                </div>
              </div>
            </div>
          ),
        },
      ]}
    />
  ),
}; 