import styled from "styled-components";

export const ContainerCheckboxInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  gap: 12px;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.corPrimaria};
  font-family: "Poppins";
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  align-items: center;
`;
