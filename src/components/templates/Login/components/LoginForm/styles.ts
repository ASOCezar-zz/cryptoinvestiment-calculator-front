import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;

    @media (max-height: 767px) {
      height: 100%;
      justify-content: center;
      align-items: center;
    }

    a {
      text-align: right;
      text-decoration: none;
      font-weight: 900;
      color: ${theme.colors.primaryColor};
    }

    > .button {
      color: ${theme.colors.white};
      height: 40px;
      font-size: clamp(12px, 3vw, 16px);
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
