import React, { Suspense } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import themeList from './theme';
import AppRouter from './App.routes';
import { ContextStoreProvider } from './store/context-store'; // eslint-disable-next-line import/no-named-as-default-member

function App() {
  return (
    <div className='App'>
      <ContextStoreProvider>
        <ThemeProvider theme={themeList[0]}>
          <Suspense fallback={<div>Loading...</div>}>
            <AppRouter />
          </Suspense>
        </ThemeProvider>
      </ContextStoreProvider>
    </div>
  );
}

export default App;
