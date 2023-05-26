import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import GenerateButton from '../GenerateButton';
import { setLoading, setData } from '../../CurrencyRatesTable/currencySlice';
import { setCurrencies } from '../currenciesSlice';
import { setError } from '../../Modal/errorSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('GenerateButton', () => {
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

  const store = mockStore({});

  it('fetchData dispatches actions correctly when successful', async () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;

    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });
    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockCurrencies),
    });

    render(
      <Provider store={store}>
        <GenerateButton text="Fetch Data" currency="USD" />
      </Provider>
    );

    const fetchDataButton = screen.getByText('Fetch Data');
    fireEvent.click(fetchDataButton);

    expect(store.getActions()).toContainEqual(setLoading(true));

    await waitFor(() => {
      expect(store.getActions()).toContainEqual(setData(mockData));
      expect(store.getActions()).toContainEqual(setCurrencies(mockCurrencies));
    });

    expect(store.getActions()).toContainEqual(setLoading(false));
  });

  it('fetchData dispatches actions correctly when there is an error', async () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    mockFetch.mockRejectedValueOnce(new Error('API error'));

    render(
      <Provider store={store}>
        <GenerateButton text="Fetch Data" currency="USD" />
      </Provider>
    );

    const fetchDataButton = screen.getByText('Fetch Data');
    fireEvent.click(fetchDataButton);

    expect(store.getActions()).toContainEqual(setLoading(true));

    await waitFor(() => {
      expect(store.getActions()).toContainEqual(
        setError({ isError: true, message: 'API error' })
      );
    });

    expect(store.getActions()).toContainEqual(setLoading(false));
  });
});
