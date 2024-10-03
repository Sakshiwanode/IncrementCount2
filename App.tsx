import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import CounterScreen from './src/components/CounterScreen';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  );
};

export default App;
