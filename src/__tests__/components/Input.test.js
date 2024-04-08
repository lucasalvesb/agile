import React from 'react';
import { screen, waitFor, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../../components/Input'

describe('Input component', () => {
  it('should render input element', () => {
    const { getByTestId } = render(<Input value='' onChange={() => {}} />);
    expect(getByTestId('input')).toBeInTheDocument();
  });

  it('should render search icon', () => {
    const { getByTestId } = render(<Input value='' onChange={() => {}} />);
    expect(getByTestId('search-icon')).toBeInTheDocument();
  });

  it('should change input value correctly', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Input value='' onChange={onChange} />);
    const inputElement = getByTestId('input');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement).toHaveValue('test');
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should clear input value correctly', () => {
    const onChange = jest.fn();
    const { getByTestId, queryByTestId } = render(<Input value='test' onChange={onChange} />);
    const clearButton = getByTestId('clear-text-icon');
    fireEvent.click(clearButton);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(queryByTestId('input')).toHaveValue('');
  });

  it('should call onChange with updated value', () => {
  const onChange = jest.fn();
  const { getByTestId } = render(<Input value='' onChange={onChange} />);
  const inputElement = getByTestId('input');
  
  fireEvent.change(inputElement, { target: { value: 'test' } });
  
  expect(onChange).toHaveBeenCalledWith(expect.objectContaining({
    target: expect.objectContaining({
      value: 'test'
    })
  }));
});

  it('should be able to clear text', async () => {
    const onChange = jest.fn()
    render(
      <Input value='bird' onChange={onChange} />
    )

    var clearBtn = screen.getByTestId('clear-text-icon')
    fireEvent.click(clearBtn)

    await waitFor(() => {
      expect(onChange).toBeCalled()
      expect(screen.getByTestId('input')).toHaveValue('');
      expect(screen.queryByTestId('clear-text-icon')).toBeNull();
    })
  })
})