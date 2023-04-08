import styled from "styled-components";

export const TooltipText = styled.div`
  padding: 15px;
  text-align: center;
  cursor: pointer;
`;
export const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: -5px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  min-width: 350px;
  max-width: 500px;
  padding: 5px 5px;
  border-radius: 4px;

  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 20px;
    top: -8px;
    position: absolute;

    border: 8px solid red;
    transform: rotate(135deg);
  }
`;

export const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: #fff;
    display: inline;
    width: auto;
    text-align: start;
    padding: 10px 10px;
    &:before {
      border-color: transparent transparent #fff #fff;
    }
  }
`;

export const TooltipLabel = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.corDeTexto};
`;
