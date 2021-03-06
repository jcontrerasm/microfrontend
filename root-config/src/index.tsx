import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Layout } from './styled';
import configureStore from './store/configureStore';
import { App } from './view';
import { LifeCycles, registerApplication, start } from 'single-spa';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <App />
    </Layout>
  </Provider>,
  document.getElementById('root')
);

registerApplication({
  name: "mkp-home",
  app: (): Promise<LifeCycles> => (window as any).System.import("@mkp/home"),
  activeWhen: "/home"
});

start();
