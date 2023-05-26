import { useEffect } from 'react';
import { ModalContainer, ModalText } from './ErrorModalStyles';
import { useAppDispatch } from '../../app/hooks';
import { setError } from './errorSlice';

export const DURATION = 5000;

type ErrorModalProps = {
  text?: string;
};

const ErrorModal = ({ text = '' }: ErrorModalProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const visibilityTimer = setTimeout(
      () => dispatch(setError({ isError: false })),
      DURATION
    );

    return () => {
      clearTimeout(visibilityTimer);
    };
  });

  return (
    <ModalContainer>
      <ModalText data-testid="modal-error">
        Error: {text}. Try to generate again.
      </ModalText>
    </ModalContainer>
  );
};

export default ErrorModal;
