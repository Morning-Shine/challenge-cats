/* eslint-disable array-callback-return */
import React from 'react';
import { Guid } from 'js-guid';
import AppBarBtn from './AppBarBtn';
import styled from "@emotion/styled";
import { APP_BAR_HEIGHT } from "../constants/CSS_DIMENTIONS";
import { MENU_ITEMS } from '../constants/ROUTS';


export default function AppBarItems() {
    return (
        <Cont>
            {MENU_ITEMS.map(item => (
                <AppBarBtn
                    key={Guid.newGuid().StringGuid}
                    text={item.text}
                    routing={item.routing}
                />)
            )
            }
        </Cont>
    )
}

const Cont = styled.div`
    height: ${APP_BAR_HEIGHT}px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`