import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardCat from '../components/CardCat';
import { fetchCats } from '../store/catsSlice';
import styled from "@emotion/styled";
import { APP_BAR_HEIGHT, LEFT_INDENT_MAIN } from '../constants/CSS_DIMENTIONS';


export default function ScreenAllCats() {
  const dispatch = useDispatch();
  const cats = useSelector(state => state.cats.cats);
  const { status, error } = useSelector(state => state.cats);

  useEffect(() => {
    dispatch(fetchCats());
    // console.log('запущен dispatch(fetchCats())');
  }, [dispatch]);

  return (
    <>
      <Cont>
        {cats
          ? cats.map(item => <CardCat key={item.id} item={item} />)
          : null
        }
      </Cont>
      {/* <P>... загружаем ещё котиков ...</P> */}
      {status === 'loading' && <P>... загружаем ещё котиков ...</P>}
      {error && <P>ошибка загрузки данных: {error}</P>}
    </>
  )
}

const Cont = styled.div`
  margin: calc(48px + ${APP_BAR_HEIGHT}px) auto 48px ${LEFT_INDENT_MAIN}px;
  display: grid;
  column-gap: 48px;
  row-gap: 48px;
  grid-template-columns: repeat( auto-fit, minmax(225px, 1fr) );
`

const P = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  font-style: normal;
  text-align: center;
  letter-spacing: 0.25px;
  margin-bottom: 31px;
`