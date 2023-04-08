import styled, { css } from "styled-components";
import { Link as LinkRRD } from "react-router-dom";

export const Link = styled(LinkRRD)`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.corPrimaria};
    text-align: center;
    font-weight: 600;
    font-family: "Poppins";
    cursor: pointer;
  `}
`;
