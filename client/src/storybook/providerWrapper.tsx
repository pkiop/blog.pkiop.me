import React from 'react';
import { Provider } from 'react-redux';

const ProviderWrapper = ({ children, store }: any) => {
  return (
    <Provider store={store}>
      {/* <Router> */}
      {children}
      {/* </Router> */}
    </Provider>
  );
};

export default ProviderWrapper;
