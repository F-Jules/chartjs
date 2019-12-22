import * as React from 'react';
import { Main } from './Components/Main';
import { Header } from './Components/Header';
import './App.css';

const App: React.SFC<{}> = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
