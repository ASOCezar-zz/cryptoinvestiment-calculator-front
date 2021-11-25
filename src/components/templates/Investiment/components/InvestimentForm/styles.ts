import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 70px;
    padding: 70px 15px 15px 15px;

    gap: 77px;

    .input {
      width: 100%;

      input {
        font-size: clamp(10px, 3vw, 15px);
      }
    }

    .buttons {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      button {
        font-size: clamp(10px, 5vw, 15px);
      }

      .save_button {
        color: white;
      }

      .cancel_button {
        background-color: ${theme.colors.white};
        color: ${theme.colors.danger};
      }
    }
  `}
`;
