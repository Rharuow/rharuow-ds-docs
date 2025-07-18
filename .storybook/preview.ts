import "../dist/styles.css";
import React from "react";
import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    primaryColor: {
      name: 'Primary Color',
      description: 'Theme primary color',
      defaultValue: '#2563eb',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: '#2563eb', title: 'Blue (Default)' },
          { value: '#dc2626', title: 'Red' },
          { value: '#059669', title: 'Green' },
          { value: '#7c3aed', title: 'Purple' },
          { value: '#ea580c', title: 'Orange' },
          { value: '#0891b2', title: 'Cyan' },
        ],
        showName: true,
      },
    },
    primaryHover: {
      name: 'Primary Hover',
      description: 'Theme primary hover color',
      defaultValue: '#dbeafe',
      toolbar: {
        icon: 'contrast',
        items: [
          { value: '#dbeafe', title: 'Blue Light (Default)' },
          { value: '#fecaca', title: 'Red Light' },
          { value: '#d1fae5', title: 'Green Light' },
          { value: '#e9d5ff', title: 'Purple Light' },
          { value: '#fed7aa', title: 'Orange Light' },
          { value: '#cffafe', title: 'Cyan Light' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const primaryColor = context.globals.primaryColor || '#2563eb';
      const primaryHover = context.globals.primaryHover || '#dbeafe';
      
      // Apply CSS variables to the document root
      React.useEffect(() => {
        document.documentElement.style.setProperty('--primary', primaryColor);
        document.documentElement.style.setProperty('--primary-hover', primaryHover);
        document.documentElement.style.setProperty('--primary-text', '#fff');
      }, [primaryColor, primaryHover]);

      return React.createElement('div', {
        style: {
          '--primary': primaryColor,
          '--primary-hover': primaryHover,
          '--primary-text': '#fff',
        } as React.CSSProperties
      }, React.createElement(Story));
    },
  ],
};

export default preview;
