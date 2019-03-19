import React from 'react';
import MLI, { MessageListItem } from './components/MessageListItem';
import { Message } from './domain/Message';

export function App() {
  const message1: Message = {
    id: '1',
    author: 'Elmar',
    date: Date.now(),
    message: 'React is leuk'
  };

  return (
    <main>
      <MessageListItem {...message1} />
    </main>
  );
}

export default App;
