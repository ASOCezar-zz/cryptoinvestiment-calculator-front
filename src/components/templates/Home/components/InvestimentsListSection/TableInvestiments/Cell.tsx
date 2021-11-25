import styled, { css, DefaultTheme } from 'styled-components';
import { InvestimentData } from '.';
import convertDate from '../../../../../../utils/convertDate';
import renderIcon from '../../../../../../utils/renderIcon';
import { CustomizedMenu } from '../../CustomizedMenu';

export default function Cell({ id, coinName, investimentValue, profit, date, roi }: InvestimentData) {
  const dateLocale = convertDate(date);

  let componentClass: string;

  if (profit < 0) componentClass = 'negative';

  return (
    <Row componentClass={componentClass}>
      <td>{renderIcon(coinName)}</td>
      <td>{investimentValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
      <td className="profit">{profit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
      <td>{dateLocale}</td>
      <td>{`${roi.toFixed(2)}%`}</td>
      <td>
        <CustomizedMenu id={id} />
      </td>
    </Row>
  );
}

type RowProps = {
  theme: DefaultTheme;
  componentClass: string;
};

const Row = styled.tr`
  ${({ theme, componentClass }: RowProps) => css`
    .profit {
      font-weight: 700;
      color: ${componentClass === 'negative' ? theme.colors.danger : theme.colors.primaryColor};
    }
  `}
`;
