import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import i18next from './i18n/config';
import reportWebVitals from './reportWebVitals';

import  { store }  from './store/store';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
