import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 50px;
  padding: 20px;
  box-shadow: 2px 2px 19px -7px rgba(0, 0, 0, 0.75);
  background-color: #dd5050;
`;
export const StyledNavLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 500;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  text-decoration: none;
  color: #5a1010;
  :hover {
    color: white;
    transition: all ease-out 200ms;
  }
`;