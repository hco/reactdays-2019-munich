import React from 'react';
import { Message } from '../domain/Message';

interface Props extends Message {}

export const MessageListItem = ({ message, author }: Props): JSX.Element => (
  <article>
    {message}
    {author ? <footer>{author.toUpperCase()}</footer> : null}
  </article>
);

export default MessageListItem;
