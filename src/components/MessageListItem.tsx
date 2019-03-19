import React from 'react';

interface Props {
  opinion: string;
  name?: string;
}

export const MessageListItem = ({ name, opinion }: Props): JSX.Element => (
  <article>
    {opinion}
    {name ? <footer>{name.toUpperCase()}</footer> : null}
  </article>
);

export default MessageListItem;
