import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import styled, { css, DefaultTheme } from 'styled-components';
import Img from 'next/image';

type CardProps = {
  dark?: boolean;
  imgSource: string;
  title: string;
  value: string;
};

export default function Card({ dark = false, imgSource, title, value }: CardProps): JSX.Element {
  return (
    <Wrapper dark={dark}>
      <Title>{title}</Title>
      <Value>{value}</Value>
      <div className="icon">
        <Img width="40px" height="40px" src={imgSource} />
      </div>
    </Wrapper>
  );
}
type WrapperProps = {
  theme: DefaultTheme;
  dark: boolean;
};

const Wrapper = styled.div`
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

    border: 1px solid ${theme.colors.lightGray};

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);

    .icon {
      position: absolute;
      inset-block-end: 20px;
      inset-inline-end: 20px;
    }
  `}
`;

const Title = styled.h4`
  ${({ theme }) => css`
    font-size: 12px;
    color: ${theme.colors.primaryColor};
    margin-bottom: 8px;
  `}
`;

const Value = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
  `}
`;
