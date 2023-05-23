import { useEffect, useState } from 'react';

interface CurrencyRates {
    date: string;
    base: string;
    rates: object;
}
const CurrencyRatesTable = () => {
    const [data, setData] = useState<CurrencyRates>({date: '', base: '', rates: {}});


    useEffect(() => {
        const fetchData = async () => {
            const loadedData = await fetch('https://api.vatcomply.com/rates');
            const parsedData = await loadedData.json();

            setData(parsedData);
        }

        fetchData();

    }, []);

    return <div>
        {data.date}
        {data.base}
        {Object.entries(data.rates).map((element) => <p key={element[0]}>{`${element[0]} - ${element[1]}`}</p>)}
    </div>
}

export default CurrencyRatesTable;