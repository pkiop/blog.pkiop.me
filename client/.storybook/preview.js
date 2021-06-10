import GlobalThemeProvider from "../src/styles/GlobalThemeProvider";
import Provider from "storybook/providerWrapper";
import store, { initialState } from "state/createStore";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <GlobalThemeProvider>
      <Provider store={store(initialState)}>
        <Story />
      </Provider>
    </GlobalThemeProvider>
  ),
];
