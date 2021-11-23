import React from 'react';
import Navigation from './components/Navigation';
import Page from './components/Page';

export const AppContext = React.createContext()

function App() {



  return (
    <>
      <Navigation />
      <Page />
    </>
  );
}

export default App;
