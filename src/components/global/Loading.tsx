import styled, { css, DefaultTheme, keyframes } from 'styled-components';

type LoadingProps = {
  isActive?: boolean;
};

export default function Loading({ isActive = false }: LoadingProps) {
  return <Background isActive={isActive} />;
}

type BackgroundProps = {
  isActive?: boolean;
  theme: DefaultTheme;
};

const Background = styled.div`
  ${({ isActive, theme }: BackgroundProps) => css`
    position: fixed;
    display: ${isActive ? 'flex' : 'none'};
    inset: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-width: 0.5rem;
      border-color: transparent;
      border-style: solid;
      border-radius: 50%;
    }
    &:after {
      width: 6rem;
      height: 6rem;
      border-left: 0.5rem solid ${theme.colors.primaryColor};
      animation: ${rotate} 0.6s linear infinite;
    }
    &:before {
      width: 2rem;
      height: 2rem;
      border-left: 0.5rem solid ${theme.colors.primaryColor};
      animation: ${rotate} 1s linear reverse infinite;
    }
  `}
`;

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;
