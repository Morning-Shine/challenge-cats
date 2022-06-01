import React from 'react';
import { useDispatch } from 'react-redux';
import { closeOriginalPicture } from '../store/viewCatSlice';
import styled from "@emotion/styled";



export default function ViewCat({ isHide, url }) {
    const dispatch = useDispatch();

    return (
        <Cont
            hidden={isHide}
            onClick={(e) => {
                if (e.target.tagName !== 'DIV') {
                    return
                } dispatch(closeOriginalPicture())
            }}
        >
            <Img src={url} />
        </Cont>
    )
}

const Cont = styled.div`
    position: fixed;
    /* border: 1px solid red; */
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Img = styled.img`
    max-width: 50%;
    max-height: 50%; 
    /* align: center; */
`
