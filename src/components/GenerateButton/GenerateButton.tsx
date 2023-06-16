import { PrimaryButton } from './GenerateButtonStyles';
import { useAppDispatch } from '../../app/hooks';
import { setData, setLoading } from '../CurrencyRatesTable/currencySlice';
import { setError } from '../Modal/errorSlice';
import { setCurrencies } from './currenciesSlice';
import { RATES_URL, CURRENCIES_URL } from '../../constants/urls';

type ButtonProps = {
  text: string;
  currency: string;
};

type Rate = {
  date: string;
  base: string;
  rates: { [key: string]: number };
};

export type Currency = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

const GenerateButton = ({ text, currency }: ButtonProps) => {
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    dispatch(setLoading(true));

    try {
      const result = await Promise.all([
        fetch(`${RATES_URL}${currency}`),
        fetch(CURRENCIES_URL),
      ]);
      const [loadedData, loadedCurrenciesData]: [Rate, Currency] =
        await Promise.all([result[0].json(), result[1].json()]);

      dispatch(setData(loadedData));
      dispatch(setCurrencies(loadedCurrenciesData));
      dispatch(setLoading(false));
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);

      dispatch(setError({ isError: true, message }));
      dispatch(setLoading(false));
    }
  };

  return <PrimaryButton onClick={fetchData}>{text}</PrimaryButton>;
};

export default GenerateButton;
