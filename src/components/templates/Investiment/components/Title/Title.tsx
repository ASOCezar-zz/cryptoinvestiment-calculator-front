import styled, { css } from 'styled-components';

export default function Title() {
  return (
    <Header>
      <h1>Investimento</h1>
      <h4>Cadastre um novo investimento</h4>
    </Header>
  );
}

const Header = styled.div`
  ${({ theme }) => css`
    h1 {
      font-size: clamp(10px, 10vw, 25px);
      color: ${theme.colors.grey};
    }

    h4 {
      margin-top: 8px;
      color: ${theme.colors.mediumGrey};
    }
  `}
`;
