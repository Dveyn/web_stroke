import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '@@/app/page';

jest.mock('@@/utils/aosInit', () => jest.fn());

describe('HomePage', () => {
  it('renders the contact form', () => {
    render(<HomePage />);
    expect(screen.getByTestId('contact-section')).toBeInTheDocument();
  });
});
