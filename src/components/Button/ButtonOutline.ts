import styled from 'styled-components';

const ButtonOutline = styled.button`
  width: 152px;
  height: 36px;
  border: ${(props): string => props.theme.border || '1px solid #F37724'};
  box-sizing: border-box;
  background: ${(props): string => props.theme.background || '#FFFFFF'};
  border-radius: 4px;
  font-weight: 500;
  color: ${(props): string => props.theme.unclickedColor || '#FFFFFF'};
  &:hover {
    background: ${(props): string => props.theme.backgroundHover || '#FDF1E9'};
    font-weight: ${(props): string => props.theme.fontWeightHover || 500};
  }
  &:active {
    color: #ffffff;
    border: 0;
    background: #f37626;
    box-shadow: inset 0px 2px 0px rgba(0, 0, 0, 0.25);
    font-weight: 500;
  }
`;

export default ButtonOutline;
