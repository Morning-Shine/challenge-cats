import React from "react";
import styled from "@emotion/styled";
import AppBarItems from "./AppBarItems";
import { APP_BAR_HEIGHT, LEFT_INDENT_MAIN } from "../constants/CSS_DIMENTIONS";
import { COLOR_PRIMARY } from "../constants/CSS_COLORS";


export default function AppBar() {
    return (
        <Cont>
            <AppBarItems />
        </Cont>
    )
}

const Cont = styled.div`
    height: ${APP_BAR_HEIGHT}px;
    /* width: calc(100vw - ${LEFT_INDENT_MAIN}px); */
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    padding-left: ${LEFT_INDENT_MAIN}px;
    background-color: ${COLOR_PRIMARY};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
`