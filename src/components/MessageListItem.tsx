import React from 'react';
import { Message } from '../domain/Message';

interface Props extends Message {}

export const MessageListItemComponent = ({
  message,
  author
}: Props): JSX.Element => (
  <li>
    <article>
      {message}
      {author ? <cite>{author.toUpperCase()}</cite> : null}
    </article>
  </li>
);

export default MessageListItemComponent;
