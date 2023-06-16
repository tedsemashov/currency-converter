import {
  TableContainer,
  CurrenciesList,
  CurrencyRow,
  Currency,
  Highlight,
} from './CurrencyRatesTableStyles';
import { EMPTY_CURRENCY, EMPTY_RATE } from '../../constants/common';

type CurrencyRatesTableProps = {
  currency: {
    base: string;
    rates: {
      [key: string]: number | string;
    };
  };
};

const CURRENCY_AMOUNT = 1;
const VALUES_AFTER_DOT = 3;

const CurrencyRatesTable = ({
  currency: { rates, base },
}: CurrencyRatesTableProps) => (
  <TableContainer>
    <CurrenciesList>
      {Object.entries(rates).map((element) => {
        const CURRENCY = element[0];
        const QUANTITY = element[1];

        return (
          base !== element[0] && (
            <CurrencyRow key={CURRENCY}>
              <Currency>
                {base !== EMPTY_CURRENCY && (
                  <Highlight>{CURRENCY_AMOUNT}</Highlight>
                )}{' '}
                {base}
              </Currency>
              <Currency>
                <Highlight>
                  {QUANTITY !== EMPTY_RATE
                    ? Number(QUANTITY).toFixed(VALUES_AFTER_DOT)
                    : QUANTITY}
                </Highlight>{' '}
                {CURRENCY}
              </Currency>
            </CurrencyRow>
          )
        );
      })}
    </CurrenciesList>
  </TableContainer>
);

export default CurrencyRatesTable;
