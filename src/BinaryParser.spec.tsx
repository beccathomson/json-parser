import React from 'react';
import { render } from '@testing-library/react';
import BinaryParser, { ParserInputType } from './BinaryParser';

describe('BinaryParser', () => {
  const testData1 = [1, [2], [3, null, [5]]];

  it('renders correctly with parsed tree', () => {
    const { container } = render(<BinaryParser input={testData1 as ParserInputType} />);
    const preElement = container.querySelector('pre');
    expect(preElement).toHaveTextContent(JSON.stringify(testData1, null, 2));
  });

  const testData2 = ["a", ["b"], ["c"]];

  it('renders correctly with parsed tree', () => {
    const { container } = render(<BinaryParser input={testData2 as ParserInputType} />);
    const preElement = container.querySelector('pre');
    expect(preElement).toHaveTextContent(JSON.stringify(testData2, null, 2));
  });
});
