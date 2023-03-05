import { NavLink } from "react-router-dom";
import { StyledNavLink } from "../Navigation/Navigation.styled";
import {Container} from "./AuthNav.styled"

export const AuthNav = () => {
    return (
        <Container>
            <StyledNavLink to="/register">
                Register
            </StyledNavLink>
            <StyledNavLink to="/login">
                Log in
            </StyledNavLink>
        </Container>
    )
}