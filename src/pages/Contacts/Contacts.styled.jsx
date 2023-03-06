import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 3px;
`;
export const Section1 = styled.div`
  border-radius: 5px 50px 50px 5px;
  padding: 20px;
  box-shadow: inset 0px 0px 47px -6px rgb(0 0 0 / 55%);
  width: 350px;
  background-color: #dd5050cf;
  margin-left: auto;
  margin-top: 80px;
`;
export const Section2 = styled.div`
  position: relative;
  border-radius: 50px 5px 5px 50px;
  padding: 20px;
  box-shadow: inset 0px 0px 47px -6px rgb(0 0 0 / 55%);
  width: 350px;
  background-color: #dd5050cf;
  margin-right: auto;
  margin-top: 80px;
`;
export const Spinner = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: #5a1010;
`;
