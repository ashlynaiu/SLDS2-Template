# SLDS React Prototyping Template

A React application template integrated with [Salesforce Lightning Design System (SLDS)](https://github.com/salesforce-ux/design-system) for rapid prototyping and development.

## 🚀 Features

- **React 18** with modern hooks and patterns
- **Salesforce Lightning Design System** components and styling
- **Storybook** for component development and documentation
- **Pre-built prototype components** for rapid development
- **Responsive design** with SLDS grid system
- **Modern development workflow** with hot reloading

## 📦 Included Components

### Core SLDS Components
- Buttons, Cards, Icons, Modals
- Data Tables with sorting and filtering
- Form elements (Input, Textarea, Checkbox, Radio, Combobox)
- Navigation and App Launcher
- Toast notifications
- Progress indicators

### Prototype Components
- **QuickActionCard** - Reusable action button groups
- **StatusCard** - Metric cards with trends and badges
- **ProcessFlow** - Step-by-step process visualization
- **TeamMembers** - Team member display with avatars
- **TagsSection** - Tag/pill management component
- **TabbedContent** - Tabbed interface component

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v14+ recommended, as per SLDS requirements)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)

3. **Start Storybook (optional):**
   ```bash
   npm run storybook
   ```
   Storybook will be available at [http://localhost:6006](http://localhost:6006)

## 🎯 Quick Start

### Using SLDS Components

```jsx
import React from 'react';
import { Button, Card, Icon, IconSettings } from '@salesforce/design-system-react';

function MyComponent() {
  return (
    <IconSettings iconPath="/assets/icons">
      <div className="slds-scope">
        <Card
          heading="My Card"
          icon={<Icon category="utility" name="apps" />}
        >
          <div className="slds-p-around_medium">
            <Button
              label="Click Me"
              variant="brand"
              onClick={() => console.log('Clicked!')}
            />
          </div>
        </Card>
      </div>
    </IconSettings>
  );
}
```

### Using Prototype Components

```jsx
import React from 'react';
import { QuickActionCard } from './components/PrototypeComponents';
import { Icon } from '@salesforce/design-system-react';

function Dashboard() {
  const actions = [
    { label: 'Create', onClick: () => handleCreate() },
    { label: 'Edit', variant: 'brand', onClick: () => handleEdit() },
    { label: 'Delete', variant: 'destructive', onClick: () => handleDelete() },
  ];

  return (
    <QuickActionCard
      title="Dashboard Actions"
      icon={<Icon category="utility" name="dashboard" />}
      actions={actions}
    />
  );
}
```

## 📱 SLDS Integration

This template includes:

- **SLDS CSS Framework** - Full Lightning Design System stylesheet
- **SLDS React Components** - Pre-built React components from `@salesforce/design-system-react`
- **Icon System** - Complete SLDS icon library with proper configuration
- **Grid System** - Responsive SLDS grid classes for layout
- **Design Tokens** - SLDS color palette, spacing, and typography

### Key SLDS Classes Used

- `slds-scope` - Scopes SLDS styles to prevent conflicts
- `slds-container_large` - Main content container
- `slds-grid`, `slds-col` - Grid system for responsive layouts
- `slds-p-around_*`, `slds-m-*` - Spacing utilities
- `slds-page-header` - Page header components

## 🏗️ Project Structure

```
src/
├── components/
│   ├── PrototypeComponents.js      # Reusable prototype components
│   └── PrototypeComponents.stories.js  # Storybook stories
├── App.js                          # Main application component
├── App.css                         # Custom styles and SLDS overrides
├── index.js                        # Application entry point
└── index.css                       # Global styles

.storybook/
├── main.js                         # Storybook configuration
└── preview.js                      # Storybook preview settings
```

## 🎨 Customization

### Adding Custom Styles

Create CSS files and import them in your components. Use SLDS utility classes when possible:

```css
/* Custom component styles */
.my-custom-component {
  /* Use SLDS design tokens */
  background-color: var(--slds-g-color-neutral-base-95);
  border-radius: var(--slds-g-border-radius-2);
}
```

### Creating New Prototype Components

1. Add your component to `src/components/PrototypeComponents.js`
2. Create stories in `src/components/PrototypeComponents.stories.js`
3. Use SLDS components and classes for consistency

## 📚 Resources

- [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/)
- [SLDS React Components Documentation](https://react.lightningdesignsystem.com/)
- [SLDS GitHub Repository](https://github.com/salesforce-ux/design-system)
- [Storybook Documentation](https://storybook.js.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚡ Tips for Rapid Prototyping

1. **Use Storybook** - Develop components in isolation
2. **Leverage SLDS Utilities** - Use spacing, color, and layout utilities
3. **Component Composition** - Combine small components into larger ones
4. **Design Tokens** - Use SLDS design tokens for consistent theming
5. **Grid System** - Use SLDS grid for responsive layouts

---

Built with ❤️ using [Salesforce Lightning Design System](https://github.com/salesforce-ux/design-system)