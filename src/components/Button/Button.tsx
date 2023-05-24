import { PrimaryButton } from './ButtonStyles';
import { useAppDispatch } from '../../app/hooks';
import { setData, setLoading } from '../../slices/appSlice';
import { setError } from '../../slices/errorSlice';

type ButtonProps = {
    text: string;
}

const Button = ({ text }: ButtonProps) => {
    const dispatch = useAppDispatch()

    const fetchData = async () => {
        dispatch(setLoading(true));

        try {
            const loadedData = await fetch('https://api.vatcomply.com/rates');
            const parsedData = await loadedData.json();

            dispatch(setData(parsedData));
            dispatch(setLoading(false));

        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);

            dispatch(setError({ isError: true, message }))
            dispatch(setLoading(false));
        }
    }

    return <PrimaryButton onClick={fetchData}>{text}</PrimaryButton>
}

export default Button;