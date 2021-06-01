import React from 'react';
import Sample from '../sample';
import {render} from '@testing-library/react';

import {axe, toHaveNoViolations, configureAxe} from 'jest-axe';

expect.extend(toHaveNoViolations);
beforeEach(() => {});

it('should be accessible', async () => {
  const {container} = render(<Sample />);

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
