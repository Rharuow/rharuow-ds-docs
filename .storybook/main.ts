import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: async (config) => {
    // Ensure automatic JSX runtime for Storybook as well
    if (config.plugins) {
      config.plugins = config.plugins.map((plugin: any) => {
        if (plugin?.name === 'vite:react-babel') {
          return {
            ...plugin,
            config: {
              ...plugin.config,
              jsxRuntime: 'automatic'
            }
          };
        }
        return plugin;
      });
    }
    return config;
  }
};
export default config;