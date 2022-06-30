import React from 'react';
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeScrollHeight } from '../store/currentScrollSlice';
import styled from "@emotion/styled";
import { MENU_ITEMS } from '../constants/ROUTS';
import { COLOR_PRIMARY_ACTIVE } from '../constants/CSS_COLORS';
import { MEDIA_TABLET_WIDTH } from '../constants/CSS_DIMENTIONS';


const setActive = ({ isActive }) => ({
    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.7)',
    backgroundColor: isActive ? COLOR_PRIMARY_ACTIVE : 'transparent'
});

export default function AppBarBtn({ text, routing }) {
    let location = useLocation();
    const dispatch = useDispatch();

    return (
        <StyledLink
            to={routing}
            style={setActive}
            onClick={() => {
                dispatch(changeScrollHeight({ path: location.pathname, height: window.pageYOffset }))
            }}
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
            @media (max-width: ${MEDIA_TABLET_WIDTH}px) {
                font-size: 20px;
                line-height: 20px;
                width: calc(100vw / ${MENU_ITEMS.length});
                margin: auto
            }
            `