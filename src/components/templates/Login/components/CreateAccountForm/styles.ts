import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    font-size: clamp(12px, 3vw, 16px);

    > .button {
      color: ${theme.colors.white};
      height: 40px;
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
