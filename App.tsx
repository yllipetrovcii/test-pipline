import React from 'react';
import MainApp from './src/app';
import Navigation from './src/features/navigation';

function App(): React.JSX.Element {
  return (
    <MainApp>
      <Navigation />
    </MainApp>
  );
}

export default App;
