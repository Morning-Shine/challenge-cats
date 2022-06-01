import React, { useState } from 'react';
import CardCatHeart from './CardCatHeart';
import { useDispatch } from 'react-redux';
import { showOriginalPicture } from '../store/viewCatSlice';
import styled from "@emotion/styled";



export default function CardCat({ item }) {
    const [isHeartHidden, setIsHeartHidden] = useState(true);
    const dispatch = useDispatch();

    return (
        <Card
            style={{ backgroundImage: `url(${item.url})` }}
            onMouseOver={() => setIsHeartHidden(false)}
            onMouseLeave={() => setIsHeartHidden(true)}
            onClick={(e) => {
                if (e.target.tagName !== 'DIV') {
                    return
                }
                dispatch(showOriginalPicture({ url: item.url, isHide: false }));
            }
            }
        >
            <CardCatHeart hidden={isHeartHidden} item={item} />
        </Card>
    )
}

const Card = styled.div`
    position: relative;
    background: no-repeat #FFFFFF;
    background-size: cover;
    width: 225px;
    height: 225px;
    cursor: zoom-in;
    transition: transform 0.5s;
        &:hover {
            transform: scale(1.14, 1.14);
            box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);
        }
`