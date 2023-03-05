import styled from "styled-components";

export const Form = styled.form`
  width: 270px;
  padding: 15px;
  border: 2px solid #f0bbae86;
  border-radius: 5px;
  box-shadow: 10px 10px 25px -4px rgba(0, 0, 0, 0.75);
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
  font-weight: 700;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: #5a1010;
`;
export const Input = styled.input`
  height: 20px;
  border-radius: 3px;
  border: none;
  width: 220px;
`;
export const Button = styled.button`
  border-radius: 5px;
  border: 2px solid #5a1010;
  background-color: white;
  width: 120px;
  height: 25px;
  font-size: 14px;
  cursor: pointer;
  margin-left: auto;
`;