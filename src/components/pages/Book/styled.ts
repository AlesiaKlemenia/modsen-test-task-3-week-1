import { Link } from "@mui/material";
import styled from "styled-components";

export const StyledNav = styled.nav`
    width: 100%;
    height: 50px;
    padding: 5vw;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledBackToHomeLink = styled(Link)`
    display: flex;
`

// convert to grid
export const BookInfoWrapper = styled.div`
    width: 100%;
    padding: 10vw;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15vw;
`

export const ImageWrapper = styled.img`
    width: 200px;
    height: 300px;
    margin: auto auto;
`