import { PrimaryButton } from './ButtonStyles';

type ButtonProps = {
    onClick: () => void
}

const Button = ({ onClick }: ButtonProps) => {
    return <PrimaryButton onClick={onClick}>Generate</PrimaryButton>
}

export default Button;