import React from 'react';
import './baseStyles.css';
import {
  AppContainer,
  ContentContainer,
  CurrencyTableContainer,
  Rates,
} from './AppStyles';
import { useAppSelector } from './app/hooks';
import CurrencyRatesTable from './components/CurrencyRatesTable/CurrencyRatesTable';
import ErrorModal from './components/Modal/ErrorModal';
import InteractiveElements from './components/InteractiveElements/InteractiveElements';
import Spinner from './components/Spinner/Spinner';

const App = () => {
  const currency = useAppSelector(({ currency }) => currency);
  const { isError, message } = useAppSelector(({ error }) => error);

  return (
    <AppContainer>
      <CurrencyTableContainer>
        {isError && <ErrorModal text={message} />}
        {currency.isLoading && <Spinner isLoading={currency.isLoading} />}

        <Rates>Rates</Rates>
        <ContentContainer>
          <CurrencyRatesTable currency={currency} />
          <InteractiveElements currency={currency} />
        </ContentContainer>
      </CurrencyTableContainer>
    </AppContainer>
  );
};

export default App;
