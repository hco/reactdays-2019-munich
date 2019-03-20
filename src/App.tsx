import React, { useState, useCallback } from 'react';
import MessageList from './components/MessageList';
import MessageCompose from './components/MessageCompose';
import { configureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

// das machen wir eigentlich in einem useMemo...
const store = configureStore();

export function App() {
  return (
    <Provider store={store}>
      <main>
        <MessageList />
        <MessageCompose />
      </main>
    </Provider>
  );
}

export default App;
