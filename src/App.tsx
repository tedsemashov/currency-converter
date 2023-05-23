import React, {useState} from 'react';
import './baseStyles.css';
import {AppContainer, ContentContainer, CurrencyTableContainer, Rates} from './AppStyles';
import CurrencyRatesTable from './components/CurrencyRatesTable/CurrencyRatesTable';
import Button from './components/Button/Button';

interface CurrencyRates {
    date: string;
    base: string;
    rates: object;
}

const App = () => {
    const [data, setData] = useState<CurrencyRates>({date: '', base: '', rates: {}});

    const fetchData = async () => {
        const loadedData = await fetch('https://api.vatcomply.com/rates');
        const parsedData = await loadedData.json();

        setData(parsedData);
    }

  return (
    <AppContainer>
        <CurrencyTableContainer>
            <Rates>Rates</Rates>
            <ContentContainer>
                <CurrencyRatesTable data={data}/>
                <Button onClick={fetchData} />
            </ContentContainer>
        </CurrencyTableContainer>
    </AppContainer>
  );
}

export default App;
