import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../components/layout/footer';

describe('Footer', () => {
  it('should render copyright text', () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(/© Google 2021/i); // Case-insensitive match
    expect(copyrightText).toBeInTheDocument();
  });

  it('should render version text', () => {
    const { getByText } = render(<Footer />);
    const versionText = getByText(/version: 0\.1\.0/i); // Case-insensitive match
    expect(versionText).toBeInTheDocument();
  });
});