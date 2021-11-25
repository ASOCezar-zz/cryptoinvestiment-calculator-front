import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = {
  theme: DefaultTheme;
  dark: boolean;
};

export const Wrapper = styled.div`
  ${({ theme, dark }: WrapperProps) => css`
    background: ${dark ? theme.colors.secondaryColor : theme.colors.white};
    padding-left: 16px;
    width: 100%;
    height: 125px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) {
      width: 303px;
      height: 150px;
    }

    border-radius: 4px;

    border: 1px solid ${theme.colors.lightGrey};

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);

    .icon {
      position: absolute;
      inset-block-end: 20px;
      inset-inline-end: 20px;
    }
  `}
`;

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: 12px;
    color: ${theme.colors.primaryColor};
    margin-bottom: 8px;
  `}
`;

type ValueProps = {
  theme: DefaultTheme;
  dark: boolean;
  value: number;
};

export const Value = styled.h3`
  ${({ theme, dark, value }: ValueProps) => css`
    color: ${value < 0 ? theme.colors.danger : dark ? theme.colors.lightGrey : theme.colors.mediumGrey};
  `}
`;
