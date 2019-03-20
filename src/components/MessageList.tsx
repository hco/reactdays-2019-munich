import React from 'react';
import MessageListItem from './MessageListItem';
import { Message } from '../domain/Message';

interface Props {
  messages: ReadonlyArray<Message>;
}

export const MessageListComponent = ({ messages }: Props): JSX.Element => {
  return (
    <ul>
      {messages.map(message => (
        <MessageListItem {...message} key={message.id} />
      ))}
    </ul>
  );
};

export default MessageListComponent;
