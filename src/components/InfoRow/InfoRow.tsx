import { InfoRowContainer, Title, Value } from './InfoRowStyles';

type InfoRowProps = {
    title: string,
    value: string
}

const InfoRow = ({ title, value }: InfoRowProps) => (
    <InfoRowContainer>
        <Title>{title}:</Title>
        <Value>{value}</Value>
    </InfoRowContainer>
)

export default InfoRow;