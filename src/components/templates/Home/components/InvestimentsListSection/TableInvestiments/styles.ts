import styled, { css, DefaultTheme } from 'styled-components';

export const CardsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  margin-top: 16px;
  padding-bottom: 16px;
`;

export const Container = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: collapse;
    margin-top: 50px;

    tr {
      height: 40px;
      border-bottom: 1px solid ${theme.colors.lightGrey};
      text-align: left;
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    position: relative;
    border-radius: 6px;

    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);

    width: 100%;

    background: ${theme.colors.lightGrey};

    padding: 28px 16px 0 16px;
  `}
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    font-size: clamp(10px, 5vw, 18px);
  }
`;

export const Content = styled.div``;

type InfosProps = {
  theme: DefaultTheme;
  componentClass: string;
};

export const Infos = styled.div`
  ${({ theme, componentClass }: InfosProps) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    gap: 5px;
    justify-content: space-between;

    #profit {
      h3 {
        color: ${componentClass === 'negative' ? theme.colors.danger : theme.colors.primaryColor};
      }
    }
    .info {
      h4 {
        font-size: 10px;
        color: ${theme.colors.grey};
      }
      h3 {
        color: ${theme.colors.mediumGrey};
      }
    }
  `}
`;

export const Options = styled.div`
  position: absolute;
  height: 100%;
  inset-inline-end: 0;
  inset-block-start: 0;
`;
