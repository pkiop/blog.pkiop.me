const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.(js|jsx|ts|tsx|mdx)'],
  typescript: {
    check: false,
    checkOptions: {},
  },
  webpackFinal: async (config) => {
    config.resolve.modules.push(path.resolve('./src'));
    config.resolve.modules.push(path.resolve('./node_modules'));
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  reactDocgen: 'react-docgen-typescript',
  reactDocgenTypescriptOptions: {
    shouldExtractLiteralValuesFromEnum: true,
    propFilter: (prop) =>
      prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-contexts/register',
    // "@storybook/preset-create-react-app"
  ],
};
