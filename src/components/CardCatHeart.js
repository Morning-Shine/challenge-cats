import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCat, removeFavoriteCat } from '../store/favoriteCatsSlice';
import styled from "@emotion/styled";


export default function CardCatHeart({ visible, item }) {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state => state.favoriteCats.cats.find(cat => cat.id === item.id));
    const [heart, setHeart] = useState(isFavorite ? '/assets/img/heart_clicked.png' : '/assets/img/heart.png');

    return (
        <Heart
            hidden={visible}
            onMouseOver={isFavorite ? null : () => setHeart('/assets/img/heart_hovered.png')}
            onMouseLeave={isFavorite ? null : () => setHeart('/assets/img/heart.png')}
            onClick={
                isFavorite
                    ? () => {
                        dispatch(removeFavoriteCat({ item }));
                        setHeart('/assets/img/heart.png')
                    }

                    : () => { dispatch(addFavoriteCat({ item })); 
                        setHeart('/assets/img/heart_clicked.png')
                }
            } 
        >
    <Img src={heart} />
        </Heart >
    )
}

const Heart = styled.div`
    position: absolute;
    right: 21px;
    bottom: 28.3px;
    background-position: center center;
    width: 40px;
    height: 36.7px;
`;

const Img = styled.img`
    cursor: pointer;
`;