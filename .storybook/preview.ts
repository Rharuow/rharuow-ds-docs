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
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'gray',
          value: '#f3f4f6',
        },
        {
          name: 'dark',
          value: '#1f2937',
        },
      ],
    },
    docs: {
      toc: true,
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'blue',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'blue', title: '🔵 Blue (Default)', left: '🔵' },
          { value: 'red', title: '🔴 Red', left: '🔴' },
          { value: 'green', title: '🟢 Green', left: '🟢' },
          { value: 'purple', title: '🟣 Purple', left: '🟣' },
          { value: 'orange', title: '🟠 Orange', left: '🟠' },
          { value: 'cyan', title: '🟦 Cyan', left: '🟦' },
          { value: 'custom', title: '🎨 Custom', left: '🎨' },
        ],
        showName: true,
      },
    },
    primaryColor: {
      name: 'Primary Color',
      description: 'Custom primary color (when Custom theme is selected)',
      defaultValue: '#2563eb',
      toolbar: {
        icon: 'paintbrush',
        title: 'Primary Color',
        showName: false,
      },
      control: { type: 'color' },
    },
    primaryHover: {
      name: 'Primary Hover',
      description: 'Custom primary hover color (when Custom theme is selected)',
      defaultValue: '#dbeafe',
      toolbar: {
        icon: 'contrast',
        title: 'Primary Hover Color',
        showName: false,
      },
      control: { type: 'color' },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'blue';
      const customPrimaryColor = context.globals.primaryColor || '#2563eb';
      const customPrimaryHover = context.globals.primaryHover || '#dbeafe';

      // Theme presets
      const themeMap = {
        blue: { primary: '#2563eb', hover: '#dbeafe' },
        red: { primary: '#dc2626', hover: '#fecaca' },
        green: { primary: '#059669', hover: '#d1fae5' },
        purple: { primary: '#7c3aed', hover: '#e9d5ff' },
        orange: { primary: '#ea580c', hover: '#fed7aa' },
        cyan: { primary: '#0891b2', hover: '#cffafe' },
        custom: { primary: customPrimaryColor, hover: customPrimaryHover },
      };

      const currentTheme = themeMap[theme as keyof typeof themeMap] || themeMap.blue;
      
      // Apply CSS variables to the document root
      React.useEffect(() => {
        document.documentElement.style.setProperty('--primary', currentTheme.primary);
        document.documentElement.style.setProperty('--primary-hover', currentTheme.hover);
        document.documentElement.style.setProperty('--primary-text', '#fff');
      }, [currentTheme.primary, currentTheme.hover]);

      return React.createElement('div', {
        style: {
          '--primary': currentTheme.primary,
          '--primary-hover': currentTheme.hover,
          '--primary-text': '#fff',
        } as React.CSSProperties
      }, React.createElement(Story));
    },
  ],
};

export default preview;
