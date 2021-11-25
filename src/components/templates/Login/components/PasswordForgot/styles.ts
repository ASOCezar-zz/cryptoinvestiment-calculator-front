import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 2;
    height: 100vh;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;
    color: ${theme.colors.grey};
    padding-bottom: 16px;

    > .button {
      color: ${theme.colors.white};
      font-size: clamp(12px, 3vw, 16px);
      height: 40px;
      width: 100%;
    }

    > .input {
      @media (min-width: 768px) {
        height: 45px;
      }
      font-size: clamp(12px, 3vw, 16px);
      width: 100%;
    }
  `}
`;
