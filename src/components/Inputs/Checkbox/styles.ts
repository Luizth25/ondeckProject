import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 5px;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #868686;
`;

export const label = styled.label`
  font-weight: 500;
  size: 16px;
  font-family: "Poppins";
  color: ${({ theme }) => theme.colors.corTitulo};
`;
