import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 2;
    height: 100vh;
    align-items: flex-start;
    justify-content: center;
    padding-inline: 5vw;
    gap: 32px;
    color: ${theme.colors.grey};
    padding-block: 32px;

    @media (min-width: 1920px) {
      max-width: 50%;
      padding-inline: 15vw;
    }

    .redirect-link {
      width: 100%;
      display: inline-block;

      a {
        text-decoration: none;
        font-weight: 900;
        color: ${theme.colors.primaryColor};
      }
    }
  `}
`;
