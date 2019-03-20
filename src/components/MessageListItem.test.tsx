import React from 'react';
import { render } from 'react-testing-library';
import { MessageListItemComponent } from './MessageListItem';

test('it works', () => {
  expect(1).toBe(1);
});

test('<MessageListItem /> smoke detector', () => {
  render(
    <MessageListItemComponent
      author="Christian"
      date={0}
      message="Test Message"
      id="0"
    />
  );
});

test('<MessageListItem /> shows the author and message', () => {
  // Arrange
  const { container } = render(
    <MessageListItemComponent
      author="Christian"
      date={0}
      message="Hallo Christian"
      id="0"
    />
  );

  // Act

  // Assert
  expect(container.getElementsByTagName('footer')[0]).toHaveTextContent(
    /christian/i
  );
  expect(container).toHaveTextContent('Hallo Christian');
});
