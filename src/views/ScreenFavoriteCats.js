import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CardCat from '../components/CardCat';
import styled from "@emotion/styled";
import {
  APP_BAR_HEIGHT,
  LEFT_INDENT_MAIN,
  MEDIA_TABLET_WIDTH,
  MEDIA_PHONE_WIDTH,
  CARDS_MARGIN_PHONE
 } from '../constants/CSS_DIMENTIONS';


export default function ScreenFavoriteCats() {
  const cats = useSelector(state => state.favoriteCats.cats);
  let location = useLocation();
  const currentTopScroll = useSelector(state => state.currentScroll[location.pathname]);

  
  useEffect(() => { if (currentTopScroll > 0) window.scrollTo(0, currentTopScroll) },
    [location, currentTopScroll]);

  return (
    <Cont>
      {cats.map(item => <CardCat item={item} key={item.id} />)}
    </Cont>
  )
}

const Cont = styled.div`
  margin: calc(48px + ${APP_BAR_HEIGHT}px) auto 48px ${LEFT_INDENT_MAIN}px;
  display: grid;
  column-gap: 48px;
  row-gap: 48px;
  grid-template-columns: repeat( auto-fill, minmax(225px, 1fr) );
      @media (max-width: ${MEDIA_TABLET_WIDTH}px) {
        justify-items: center;
    }
    @media (max-width: ${MEDIA_PHONE_WIDTH}px) {
        margin: calc(${CARDS_MARGIN_PHONE}px + ${APP_BAR_HEIGHT}px) ${CARDS_MARGIN_PHONE}px auto ${CARDS_MARGIN_PHONE}px;
        grid-template-columns: 1fr
    }
`