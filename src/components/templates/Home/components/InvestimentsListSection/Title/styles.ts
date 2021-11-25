import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 768px) {
      gap: 0;
      flex-direction: row;
    }

    justify-content: space-between;
    align-items: center;
    margin-top: 48px;

    h1 {
      color: ${theme.colors.grey};
    }

    h4 {
      margin-top: 8px;
      color: ${theme.colors.mediumGrey};
    }

    .newInvestimentButton {
      color: ${theme.colors.white};
      font-size: clamp(12px, 5vw, 18px);
    }
  `}
`;
