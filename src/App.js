import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LeanCanvas from 'views/LeanCanvas';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import { theme } from 'themes/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Switch>
          <Route path="/" component={LeanCanvas} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
