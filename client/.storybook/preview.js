import GlobalThemeProvider from '../src/styles/GlobalThemeProvider';
import LaboratoryGlobalStyle from '../src/templates/Laboratory/laboratoryGlobalStyle';
import Provider from 'storybook/providerWrapper';
import store, { initialState } from 'state/createStore';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, { kind }) => {
    const MostOuterCategory = kind.split('/')[0].trim();
    if (MostOuterCategory === 'Laboratory') {
      return (
        <GlobalThemeProvider>
          <LaboratoryGlobalStyle />
          <Provider store={store(initialState)}>
            <Story />
          </Provider>
        </GlobalThemeProvider>
      );
    }
    return (
      <GlobalThemeProvider>
        <Provider store={store(initialState)}>
          <Story />
        </Provider>
      </GlobalThemeProvider>
    );
  },
];
