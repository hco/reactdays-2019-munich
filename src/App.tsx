import React, { useState, useCallback } from 'react';
import MessageList from './components/MessageList';
import MessageCompose from './components/MessageCompose';
import { Message } from './domain/Message';
import { configureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

// das machen wir eigentlich in einem useMemo...
const store = configureStore();

export function App() {
  const [messages, setMessages] = useState<ReadonlyArray<Message>>([
    {
      id: '1',
      author: 'Elmar',
      date: Date.now(),
      message: 'React is leuk'
    },
    {
      id: '2',
      author: 'Christian',
      date: Date.now(),
      message: 'Witten ist toll'
    }
  ]);

  const handleSubmit = useCallback(
    (text: string) => {
      setMessages(currentMessages => [
        ...currentMessages,
        {
          message: text,
          author: 'Ich',
          date: Date.now(),
          id: new Date().toISOString()
        }
      ]);
    },
    [setMessages]
  );

  return (
    <Provider store={store}>
      <main>
        <MessageList />
        <MessageCompose onSubmit={handleSubmit} />
      </main>
    </Provider>
  );
}

export default App;
