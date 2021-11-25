import styled, { css } from 'styled-components';

type FormsProps = {
  changed: boolean;
};

const defineAnimation = (changed: boolean) =>
  changed
    ? css`
        transform: translatex(0);
      `
    : css`
        transform: translatex(-50%);
        @media (min-width: 768px) {
          transform: translatex(-50%);
        }
      `;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    @media (min-width: 768px) {
      width: 64vw;
    }

    width: 100%;
    height: 100%;
    max-width: 840px;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 50px;

    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);

    background-color: ${theme.colors.white};

    .selectionGroup {
      width: 100%;
      height: auto;
      justify-content: space-evenly;
      align-items: center;
      display: flex;
      flex-direction: row;
      margin-top: 25px;
    }
  `}
`;

export const Forms = styled.div`
  ${({ changed }: FormsProps) => css`
    @media (min-width: 768px) {
      width: 128vw;
    }
    max-width: 1640px;
    width: 200%;

    height: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    transition: transform 0.2s linear;

    ${defineAnimation(changed)};
  `}
`;
