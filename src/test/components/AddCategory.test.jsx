import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../components/AddCategory';

const categoryName = '';

describe('Test of <AddCategory/>', () => {
  
  test('Should change input value', () => {
    render(<AddCategory addCategory={() => {}} categoryName={categoryName} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Goku' } });
    expect(input.value).toBe('Goku');
  });

  test('Should call addCategory function if the input has a value', () => {
    const inputValue = 'Goku';
    const addCategory = jest.fn();
    render(<AddCategory addCategory={addCategory} categoryName={categoryName}/>);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.change(input, {target: { value: inputValue }});
    fireEvent.submit(form);
    expect(input.value).toBe('');
    expect(addCategory).toHaveBeenCalled();
    expect(addCategory).toHaveBeenCalledWith(inputValue);
  });

  test('Should not call addCategory function if the input is empty', () => {
    const addCategory = jest.fn();
    render(<AddCategory addCategory={addCategory} categoryName={categoryName} />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(addCategory).not.toHaveBeenCalled();
  });
  window.alert = jest.fn();
});
