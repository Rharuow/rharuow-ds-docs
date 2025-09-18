import "../dist/styles.css";
import type { Preview } from "@storybook/react-vite";
import { createElement, useEffect } from "react";
import type { CSSProperties } from "react";

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
          { value: 'blue', title: '🔵 Blue' },
          { value: 'red', title: '🔴 Red' },
          { value: 'green', title: '🟢 Green' },
          { value: 'purple', title: '🟣 Purple' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'blue';

      // Theme presets
      const themeMap = {
        blue: { primary: '#2563eb', hover: '#dbeafe' },
        red: { primary: '#dc2626', hover: '#fecaca' },
        green: { primary: '#059669', hover: '#d1fae5' },
        purple: { primary: '#7c3aed', hover: '#e9d5ff' },
      };

      const currentTheme = themeMap[theme as keyof typeof themeMap] || themeMap.blue;
      
      // Apply CSS variables to the document root
      useEffect(() => {
        document.documentElement.style.setProperty('--primary', currentTheme.primary);
        document.documentElement.style.setProperty('--primary-hover', currentTheme.hover);
        document.documentElement.style.setProperty('--primary-text', '#fff');
      }, [currentTheme.primary, currentTheme.hover]);

      return createElement('div', {
        style: {
          '--primary': currentTheme.primary,
          '--primary-hover': currentTheme.hover,
          '--primary-text': '#fff',
        } as CSSProperties
      }, createElement(Story));
    },
  ],
};

export default preview;
