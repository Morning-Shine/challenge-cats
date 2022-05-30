import React, { useState } from 'react';
import CardCatHeart from './CardCatHeart';
import styled from "@emotion/styled";


export default function CardCat({ item }) {
    const [isHeartVisible, setIsHeartVisible] = useState(true);

    return (
        <Card
            style={{ backgroundImage: `url(${item.url})` }}
            onMouseOver={() => setIsHeartVisible(false)}
            onMouseLeave={() => setIsHeartVisible(true)}
        >
            <CardCatHeart visible={isHeartVisible} item={item} />
        </Card>
    )
}

const Card = styled.div`
    position: relative;
    background: no-repeat #FFFFFF;
    background-size: cover;
    width: 225px;
    height: 225px;
    transition: transform 0.5s;
        &:hover {
            transform: scale(1.14, 1.14);
            box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);
        }
`