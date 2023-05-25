import React, { useState } from 'react';
import './baseStyles.css';
import {
  AppContainer,
  ContentContainer,
  CurrencyTableContainer,
  CurrencyWrapper,
  InteractiveElementsContainer,
  Rates,
  TransparentBackground,
} from './AppStyles';
import CurrencyRatesTable from './components/CurrencyRatesTable/CurrencyRatesTable';
import Button from './components/Button/Button';
import InfoRow from './components/InfoRow/InfoRow';
import { useAppSelector } from './app/hooks';
import SyncLoader from 'react-spinners/SyncLoader';
import Modal from './components/Modal/Modal';

const App = () => {
  const currency = useAppSelector(({ currency }) => currency);
  const error = useAppSelector(({ error }) => error);
  const options = useAppSelector(({ currencies }) => currencies.keys);

  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const buttonText = currency.date !== '---' ? 'Regenerate' : 'Generate';

  return (
    <AppContainer>
      <CurrencyTableContainer>
        {error.isError && <Modal text={error.message} />}
        {currency.isLoading && (
          <TransparentBackground>
            <SyncLoader
              loading={currency.isLoading}
              color="rgb(123, 131, 237)"
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </TransparentBackground>
        )}

        <Rates>Rates</Rates>
        <ContentContainer>
          <CurrencyRatesTable data={currency} />
          <InteractiveElementsContainer>
            <CurrencyWrapper>
              <InfoRow key="Date" title="Date" value={currency.date} />
              <InfoRow
                key="Currency"
                title="Currency"
                value={currency.base}
                options={options}
                setSelectedCurrency={setSelectedCurrency}
              />
            </CurrencyWrapper>
            <Button text={buttonText} currency={selectedCurrency} />
          </InteractiveElementsContainer>
        </ContentContainer>
      </CurrencyTableContainer>
    </AppContainer>
  );
};

export default App;
