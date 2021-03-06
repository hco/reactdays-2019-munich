import React, { memo } from 'react';
import { Message } from '../domain/Message';

interface Props extends Message {}

export const MessageListItemComponent = ({
  message,
  author
}: Props): JSX.Element => (
  <li>
    <article>
      {message}
      {author ? <footer>{author.toUpperCase()}</footer> : null}
    </article>
  </li>
);

export default memo(MessageListItemComponent);
