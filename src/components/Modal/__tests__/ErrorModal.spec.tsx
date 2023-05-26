import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ErrorModal from '../ErrorModal';
import { render, screen, act } from '@testing-library/react';
import { DURATION } from '../ErrorModal';
import errorReducer, { setError } from '../errorSlice';

const store = createStore(errorReducer);

jest.useFakeTimers();

describe('ErrorModal component', () => {
  it('should return error message', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <ErrorModal text="API server error" />
      </Provider>
    );

    expect(screen.getByTestId('modal-error')).toBeInTheDocument();
    expect(
      screen.getByText('Error: API server error. Try to generate again.')
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should dispatch setError action', () => {
    render(
      <Provider store={store}>
        <ErrorModal text="API server error" />
      </Provider>
    );

    store.dispatch(setError({ isError: true, message: '' }));

    act(() => {
      jest.advanceTimersByTime(DURATION);
    });

    const { isError, message } = store.getState();
    expect(isError).toBe(false);
    expect(message).toBe('');
  });
});
