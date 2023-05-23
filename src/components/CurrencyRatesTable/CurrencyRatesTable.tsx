import { TableContainer, CurrenciesList, CurrencyRow, Currency, Highlight } from './CurrencyRatesTableStyles';

type CurrencyRatesTableProps = {
    data: {
        date: string,
        base: string,
        rates: object
    }
}

const CurrencyRatesTable = ({ data }: CurrencyRatesTableProps) => {

    return <TableContainer>
        <CurrenciesList>
            {Object.entries(data.rates).map((element) =>
                data.base !== element[0] &&
                    <CurrencyRow key={element[0]}>
                        <Currency>
                            <Highlight>1</Highlight> {data.base}
                        </Currency>
                        <Currency><Highlight>{element[1]}</Highlight> {element[0]}</Currency>
                    </CurrencyRow>
            )}
        </CurrenciesList>
    </TableContainer>
}

export default CurrencyRatesTable;