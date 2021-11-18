import { render } from '@testing-library/react';
import { testContentList } from '@fixture/ContentsList';

import Content from '.';

test('Displays the correct title', () => {
  const { container } = render(<Content contentsList={testContentList} />);
  // Assertion
  expect(container.firstChild?.firstChild).toHaveTextContent('글 1');
  // --> Test will pass
});
