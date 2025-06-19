import React from 'react';
import {
  Button,
  Card,
  Icon,
  Badge,
  ProgressIndicator,
  ProgressIndicatorStep,
  Tabs,
  TabsDefault,
  TabsPanel,
  Pill,
  PillContainer,
  Avatar,
  ButtonGroup,
} from '@salesforce/design-system-react';

// Quick Action Card Component
export const QuickActionCard = ({ title, actions, icon }) => (
  <Card
    heading={title}
    icon={icon}
    bodyClassName="card-body"
  >
    <div className="slds-p-around_medium">
      <ButtonGroup>
        {actions.map((action, index) => (
          <Button
            key={index}
            label={action.label}
            variant={action.variant || 'neutral'}
            onClick={action.onClick}
          />
        ))}
      </ButtonGroup>
    </div>
  </Card>
);

// Status Cards Component
export const StatusCard = ({ title, count, trend, trendType, icon }) => (
  <Card bodyClassName="card-body">
    <div className="slds-p-around_medium">
      <div className="slds-media">
        <div className="slds-media__figure">
          {icon}
        </div>
        <div className="slds-media__body">
          <div className="slds-text-heading_large slds-m-bottom_x-small">
            {count}
          </div>
          <div className="slds-text-title">{title}</div>
          {trend && (
            <div className="slds-m-top_x-small">
              <Badge 
                content={trend} 
                color={trendType === 'positive' ? 'success' : 'error'} 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </Card>
);

// Process Flow Component
export const ProcessFlow = ({ steps, currentStep }) => (
  <Card
    heading="Process Flow"
    icon={<Icon category="utility" name="flow" />}
    bodyClassName="card-body"
  >
    <div className="slds-p-around_medium">
      <ProgressIndicator>
        {steps.map((step, index) => (
          <ProgressIndicatorStep
            key={index}
            label={step.label}
            isCompleted={index < currentStep}
            isActive={index === currentStep}
            hasError={step.hasError}
          />
        ))}
      </ProgressIndicator>
    </div>
  </Card>
);

// Team Members Component
export const TeamMembers = ({ members }) => (
  <Card
    heading="Team Members"
    icon={<Icon category="utility" name="people" />}
    bodyClassName="card-body"
  >
    <div className="slds-p-around_medium">
      <div className="slds-grid slds-wrap slds-grid_pull-padded">
        {members.map((member, index) => (
          <div key={index} className="slds-col slds-size_1-of-2 slds-medium-size_1-of-3 slds-p-horizontal_x-small slds-m-bottom_small">
            <div className="slds-media">
              <div className="slds-media__figure">
                <Avatar
                  initials={member.initials}
                  title={member.name}
                  variant="circle"
                />
              </div>
              <div className="slds-media__body">
                <div className="slds-text-body_small slds-text-color_default">
                  {member.name}
                </div>
                <div className="slds-text-body_x-small slds-text-color_weak">
                  {member.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Card>
);

// Tags/Pills Component
export const TagsSection = ({ tags, onTagRemove }) => (
  <Card
    heading="Tags & Categories"
    icon={<Icon category="utility" name="tags" />}
    bodyClassName="card-body"
  >
    <div className="slds-p-around_medium">
      <PillContainer>
        {tags.map((tag, index) => (
          <Pill
            key={index}
            labels={{
              label: tag.label,
              title: tag.label,
              removeTitle: `Remove ${tag.label}`,
            }}
            onRequestRemove={onTagRemove ? () => onTagRemove(index) : undefined}
            variant={tag.variant || 'base'}
          />
        ))}
      </PillContainer>
    </div>
  </Card>
);

// Tabbed Content Component
export const TabbedContent = ({ tabs }) => (
  <Card bodyClassName="card-body">
    <TabsDefault>
      {tabs.map((tab, index) => (
        <Tabs
          key={index}
          label={tab.label}
          id={`tab-${index}`}
        >
          <TabsPanel>
            <div className="slds-p-around_medium">
              {tab.content}
            </div>
          </TabsPanel>
        </Tabs>
      ))}
    </TabsDefault>
  </Card>
); 