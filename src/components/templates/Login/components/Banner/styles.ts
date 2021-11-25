import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 2;
    max-height: 100vh;
    position: relative;

    background-image: linear-gradient(360deg, #1f1e5a 21.81%, rgba(31, 30, 90, 0.7) 100%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .infos {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-inline: 5vw;
      color: ${theme.colors.white};
      text-align: center;
      gap: 22px;

      h1 {
        margin-top: 85px;
      }
    }

    .background {
      z-index: -1;
      width: 100%;
    }
  `}
`;
