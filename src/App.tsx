import React from 'react';
import MLI, { MessageListItem } from './components/MessageListItem';

export function App() {
  return (
    <main>
      <MessageListItem name="Elmar" opinion="Reactas finde ich toll" />
      <MLI name="Christian" opinion="PHP finde ich toll" />
    </main>
  );
}

export default App;
