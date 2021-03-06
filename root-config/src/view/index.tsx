import React from 'react';
import { CenterBox } from './styled';
import { Header } from './components/Header';

export const App = () => (
  <>
    <Header />
    <CenterBox>
      <div>
        <div id="single-spa-application:home"></div>
      </div>
    </CenterBox>
  </>
);
