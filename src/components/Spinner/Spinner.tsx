import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import { TransparentBackground } from './SpinnerStyles';

const COLOR = 'rgb(123, 131, 237)';
const SIZE = 80;

type SpinnerProps = {
  isLoading: boolean;
};

const Spinner = ({ isLoading }: SpinnerProps) => (
  <TransparentBackground>
    <SyncLoader
      loading={isLoading}
      color={COLOR}
      size={SIZE}
      aria-label="Loading Spinner"
      data-testid="spinner"
    />
  </TransparentBackground>
);

export default Spinner;
