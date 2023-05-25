import { PrimaryButton } from './ButtonStyles';
import { useAppDispatch } from '../../app/hooks';
import { setData, setLoading } from '../../slices/appSlice';
import { setError } from '../../slices/errorSlice';
import { setCurrencies } from '../../slices/currenciesSlice';

type ButtonProps = {
  text: string;
  currency?: string;
};

const Button = ({ text, currency = 'EUR' }: ButtonProps) => {
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    dispatch(setLoading(true));

    try {
      const loadedData = await fetch(
        `https://api.vatcomply.com/rates?base=${currency}`
      );
      const loadedCurrenciesData = await fetch(
        'https://api.vatcomply.com/currencies'
      );
      const parsedData = await loadedData.json();
      const parsedCurrencies = await loadedCurrenciesData.json();

      dispatch(setData(parsedData));
      dispatch(setCurrencies(parsedCurrencies));
      dispatch(setLoading(false));
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);

      dispatch(setError({ isError: true, message }));
      dispatch(setLoading(false));
    }
  };

  return <PrimaryButton onClick={fetchData}>{text}</PrimaryButton>;
};

export default Button;
