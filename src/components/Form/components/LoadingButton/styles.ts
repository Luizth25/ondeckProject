import styled, { css, keyframes } from "styled-components";

import { CiRedo } from "react-icons/ci";

export const LoadingContainer = styled.button`
  ${({ theme }) => css`
    padding: 20px;
    border-radius: 8px;
    border: 2px solid #e9d9c6;
    color: ${theme.colors.corDeTexto};
    background-color: ${theme.colors.background};
    font-size: 18px;
  `}
`;

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to{
  transform: rotate(360deg);
}
`;

export const Spinner = styled(CiRedo)`
  animation: ${rotate} 1s linear infinite;
`;
