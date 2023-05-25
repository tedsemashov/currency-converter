import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import { TransparentBackground } from './SpinnerStyles';

const COLOR = 'rgb(123, 131, 237)';
const ARIA_LABEL = 'Loading Spinner';
const DATA_TESTID = 'spinner';
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
      aria-label={ARIA_LABEL}
      data-testid={DATA_TESTID}
    />
  </TransparentBackground>
);

export default Spinner;
