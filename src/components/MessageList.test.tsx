import React from 'react';
import { render } from 'react-testing-library';
import { Message } from '../domain/Message';
import { MessageListComponent } from './MessageList';

describe('<MessageList />', () => {
  test('a list with two items renders two messages', () => {
    // Arrange
    const messages: Message[] = [
      {
        id: '1',
        message: 'Message 1',
        author: 'Author 1',
        date: 0
      },
      {
        id: '2',
        message: 'Message 2',
        author: 'Author 2',
        date: 1
      }
    ];

    // Act

    const { container } = render(<MessageListComponent messages={messages} />);

    // Assert
    const actual = container.querySelectorAll('li');

    expect(actual.length).toBe(2);
    expect(Array.from(actual)).toMatchInlineSnapshot(`
Array [
  <li>
    <article>
      Message 1
      <footer>
        AUTHOR 1
      </footer>
    </article>
  </li>,
  <li>
    <article>
      Message 2
      <footer>
        AUTHOR 2
      </footer>
    </article>
  </li>,
]
`);
  });
});
