import React from 'react';
import MessageListItem from './MessageListItem';
import { Message } from '../domain/Message';
import { connect } from 'react-redux';
import { ApplicationState } from '../redux/configureStore';

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

const getMessages = (
  messages: ApplicationState['messages']
): ReadonlyArray<Message> => Object.values(messages);

const mapStateToProps = (state: ApplicationState): Props => {
  return {
    messages: getMessages(state.messages)
  };
};

const enhancer = connect(mapStateToProps);

export default enhancer(MessageListComponent);
