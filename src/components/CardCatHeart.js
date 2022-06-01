import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCat, removeFavoriteCat } from '../store/favoriteCatsSlice';
import styled from "@emotion/styled";
import emptyHeart from '../assets/img/heart.png';
import hoveredHeart from '../assets/img/heart_hovered.png';
import clickedHeart from '../assets/img/heart_clicked.png';



export default function CardCatHeart({ hidden, item }) {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state => state.favoriteCats.cats.find(cat => cat.id === item.id));
    const [heart, setHeart] = useState(isFavorite ? clickedHeart : emptyHeart);

    return (
        <Heart
            hidden={hidden}
            onMouseOver={isFavorite ? null : () => setHeart(hoveredHeart)}
            onMouseLeave={isFavorite ? null : () => setHeart(emptyHeart)}
            onClick={
                isFavorite
                    ? () => {
                        dispatch(removeFavoriteCat({ item }));
                        setHeart(emptyHeart)
                    }

                    : () => {
                        dispatch(addFavoriteCat({ item }));
                        setHeart(clickedHeart)
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