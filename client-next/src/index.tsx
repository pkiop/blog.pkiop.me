// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import type { SidebarStoreState } from 'types/store';
import createStore from './state/createStore';
import App from './App';
import reportWebVitals from './reportWebVitals';

const sidebarPreState: SidebarStoreState = {
  mainCategory: '',
  subCategory: '',
  tag: [],
  isSidebarOpen: false,
};

const store = createStore(sidebarPreState);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
