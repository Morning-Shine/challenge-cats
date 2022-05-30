import React from 'react';
import styled from "@emotion/styled";
import { COLOR_PRIMARY_ACTIVE } from '../constants/CSS_COLORS';
import { NavLink } from "react-router-dom";


const setActive = ({ isActive }) => ({
    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.7)',
    backgroundColor: isActive ? COLOR_PRIMARY_ACTIVE : 'transparent'
});

export default function AppBarBtn({ text, routing }) {
    return (
        <StyledLink
            to={routing}
            style={setActive}
        >
            <LinkName>
                {text}
            </LinkName>
        </ StyledLink>
    )
}

const StyledLink = styled(NavLink)`
            display: flex;
            height: 100%;
            background-color: transparent;
            text-decoration: none;
            align-items: center;
            `
const LinkName = styled.div`
            letter-spacing: 0.25px;
            font-family: "Roboto";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            text-align: center;
            width: 100%;
            margin: auto 30px;
            `