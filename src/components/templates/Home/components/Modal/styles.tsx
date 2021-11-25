import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = {
  theme: DefaultTheme;
  open: boolean;
};

export const Wrapper = styled.div`
  ${({ open }: WrapperProps) => css`
    opacity: ${open ? 1 : 0};
    visibility: ${open ? 'visible' : 'hidden'};
    position: fixed;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    inset: 0;
    justify-content: center;
    display: flex;
    flex-direction: column;
    z-index: 4;
    transition: opacity 0.3s linear;
    align-items: center;

    .modalBackground {
      background-color: rgba(0, 0, 0, 0.7);
      width: 100%;
      height: 100%;
      position: absolute;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    z-index: 5;
    padding: 5%;

    width: 65vw;
    max-width: 350px;

    height: 30vh;
    max-height: 250px;

    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-evenly;

    h1 {
      font-size: clamp(10px, 5vw, 20px);
    }

    em {
      font-size: clamp(10px, 3vw, 15px);
    }

    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      button {
        font-size: clamp(10px, 3vw, 15px);
      }
    }
  `}
`;
