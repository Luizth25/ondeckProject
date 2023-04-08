import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.corDeTexto};
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
