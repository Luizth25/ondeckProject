import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #e9d9c6;
  border-radius: 10px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 512px;
  height: 512px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  flex: 2;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  align-items: center;
`;

export const ContainerCheckboxInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.corPrimaria};
  font-family: "Poppins";
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  font-family: "Poppins";
  color: red;
`;
