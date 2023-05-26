import App from '../App';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../app/store';

describe('App component', () => {
  it('should return common UI', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should return spinner', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const fetchDataButton = screen.getByText('Generate');
    act(() => fireEvent.click(fetchDataButton));

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should return fulfilled UI', async () => {
    const mockData = {
      date: '2023-05-25',
      base: 'USD',
      rates: {
        EUR: 0.85,
      },
      isLoading: true,
    };

    const mockCurrencies = {
      USD: 'United States Dollar',
      EUR: 'Euro',
    };

    const mockFetch = jest.fn();
    global.fetch = mockFetch;

    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });
    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockCurrencies),
    });

    const { asFragment } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const fetchDataButton = screen.getByText('Generate');
    await act(() => fireEvent.click(fetchDataButton));

    expect(asFragment()).toMatchSnapshot();
  });
});
