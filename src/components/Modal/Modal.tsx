import { useEffect } from 'react';
import { ModalContainer, ModalText } from './ModalStyles';
import { useAppDispatch } from '../../app/hooks';
import { setError } from '../../slices/errorSlice';

type ModalProps = {
  text?: string;
};

const Modal = ({ text = '' }: ModalProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const visibilityTimer = setTimeout(
      () => dispatch(setError({ isError: false })),
      5000
    );

    return () => {
      clearTimeout(visibilityTimer);
    };
  });

  return (
    <ModalContainer>
      <ModalText>Error: {text}. Try to generate again.</ModalText>
    </ModalContainer>
  );
};

export default Modal;
