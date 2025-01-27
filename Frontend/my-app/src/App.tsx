import React from 'react';
import { MyProvider } from './context/MyContext';
import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <MyProvider>
      <AppRoutes />
    </MyProvider>
  );
};

export default App;