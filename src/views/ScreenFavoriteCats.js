import React from 'react';
import { useSelector } from 'react-redux';
import CardCat from '../components/CardCat';
import styled from "@emotion/styled";
import { APP_BAR_HEIGHT, LEFT_INDENT_MAIN } from '../constants/CSS_DIMENTIONS';


export default function ScreenFavoriteCats() {
  const cats = useSelector(state => state.favoriteCats.cats);

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
`