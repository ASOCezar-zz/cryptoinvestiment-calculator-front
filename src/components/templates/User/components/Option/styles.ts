import styled, { css } from 'styled-components';

export const Checkbox = styled.input`
  display: none;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primaryColor};
    font-size: clamp(10px, 5vw, 22px);
    position: relative;
    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 0;
      height: 2px;
      background: ${theme.colors.danger};
      left: 50%;
      transition: all 0.2s ease-in-out;
    }
    :hover {
      color: ${theme.colors.primaryColor};
    }
  `}
`;

export const Item = styled.li`
  ${() => css`
    list-style: none;
    margin-bottom: 10px;
    text-align: center;

    > ${Checkbox}:checked + ${Label} {
      ::after {
        width: 50%;
        left: 25%;
      }
    }
  `}
`;
