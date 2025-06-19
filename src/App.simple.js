import React from 'react';
import { Button, Card, Icon, IconSettings } from '@salesforce/design-system-react';
import './App.css';

function App() {
  return (
    <IconSettings iconPath="https://design-system-react-components.herokuapp.com/assets/icons">
      <div className="App">
        <div className="slds-scope">
          <div className="slds-container_large slds-p-around_large">
            <h1>SLDS React Prototype</h1>
            <Card
              heading="Simple Test Card"
              icon={<Icon category="utility" name="apps" />}
            >
              <div className="slds-p-around_medium">
                <p>This is a simple test to verify SLDS is working.</p>
                <Button
                  label="Test Button"
                  variant="brand"
                  onClick={() => alert('Button clicked!')}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </IconSettings>
  );
}

export default App; 