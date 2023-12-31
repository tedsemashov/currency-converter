import { InfoRowContainer, Title, Value, Dropdown } from './InfoRowStyles';

type InfoRowProps = {
  title: string;
  value: string;
  options?: string[];
  setSelectedCurrency?: (value: string) => void;
};

const InfoRow = ({
  title,
  value,
  options,
  setSelectedCurrency,
}: InfoRowProps) => (
  <InfoRowContainer>
    <Title>{title}:</Title>
    {options ? (
      <Dropdown
        onChange={({ target }) =>
          setSelectedCurrency && setSelectedCurrency(target.value)
        }
      >
        {options.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </Dropdown>
    ) : (
      <Value>{value}</Value>
    )}
  </InfoRowContainer>
);

export default InfoRow;
