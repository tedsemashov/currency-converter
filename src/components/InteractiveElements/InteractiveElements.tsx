import React, { useState } from 'react';
import { CurrencyWrapper, InteractiveElementsContainer } from '../../AppStyles';
import InfoRow from '../InfoRow/InfoRow';
import GenerateButton from '../GenerateButton/GenerateButton';
import { useAppSelector } from '../../app/hooks';
import { EMPTY_CURRENCY } from '../../constants/common';

type InteractiveElementsProps = {
  currency: {
    date: string;
    base: string;
  };
};

const DEFAULT_CURRENCY = 'EUR';

const InteractiveElements = ({
  currency: { date, base },
}: InteractiveElementsProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState(DEFAULT_CURRENCY);
  const options = useAppSelector(({ currencies }) => currencies.keys);

  const buttonText = date === EMPTY_CURRENCY ? 'Generate' : 'Regenerate';

  return (
    <InteractiveElementsContainer>
      <CurrencyWrapper>
        <InfoRow key="Date" title="Date" value={date} />
        <InfoRow
          key="Currency"
          title="Currency"
          value={base}
          options={options}
          setSelectedCurrency={setSelectedCurrency}
        />
      </CurrencyWrapper>
      <GenerateButton text={buttonText} currency={selectedCurrency} />
    </InteractiveElementsContainer>
  );
};

export default InteractiveElements;
