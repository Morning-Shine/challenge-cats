import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Guid } from 'js-guid';
import CardCat from '../components/CardCat';
import styled from "@emotion/styled";
import { fetchCats } from '../store/catsSlice';
import {
    APP_BAR_HEIGHT,
    LEFT_INDENT_MAIN,
    CARDS_MARGIN_MAIN,
    CARDS_MARGIN_PHONE,
    MEDIA_TABLET_WIDTH,
    MEDIA_PHONE_WIDTH
} from '../constants/CSS_DIMENTIONS';
import { trottle } from '../utils/trottle';
import { changeScrollHeight } from '../store/allCatsCurrentScrollSlice';
// import { useLocation } from 'react-router-dom';


export default function AllCats() {
    const { cats, status, error } = useSelector(state => state.cats);
    // const currentTopScroll = useSelector(state => state.scrollAllCats.scrollTopAllCats);
    const dispatch = useDispatch();
    const lastCallFuncScrollHeight = useRef(document.documentElement.offsetTop + document.documentElement.offsetHeight);
    // let location = useLocation();
    // if (currentTopScroll > 0) window.scrollTo(0, currentTopScroll);
    // console.log('currentScroll: ', currentTopScroll);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    const scrollHandler = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight;
        const scrollTop = e.target.documentElement.scrollTop;
        const clientHeight = e.target.documentElement.clientHeight;
        if (scrollHeight - scrollTop - clientHeight < 225
            && scrollHeight > lastCallFuncScrollHeight.current
        ) {
            dispatch(fetchCats());
            lastCallFuncScrollHeight.current = scrollHeight;
        }
    }

    return (
        <>
            <Cont>
                {/* <button
                    style={{ height: '50px', width: '100px' }}
                    onClick={() => {
                        dispatch(fetchCats());
                        console.log('onClick запущен dispatch(fetchCats())');
                    }}
                >
                    Получить котиков
                </button> */}
                {cats
                    ? cats.map(item =>
                        <CardCat
                            key={Guid.newGuid().StringGuid}
                            item={item}
                        />)
                    : null
                }
            </Cont>
            {status === 'loading' && <P>... загружаем ещё котиков ...</P>}
            {error && <P>ошибка загрузки данных: {error}</P>}
        </>
    )
}

const Cont = styled.div`
  margin: calc(${CARDS_MARGIN_MAIN}px + ${APP_BAR_HEIGHT}px) 24px 48px ${LEFT_INDENT_MAIN}px;
  display: grid;
  column-gap: ${CARDS_MARGIN_MAIN}px;
  row-gap: ${CARDS_MARGIN_MAIN}px;
  grid-template-columns: repeat( auto-fit, minmax(225px, 1fr) );
    @media (max-width: ${MEDIA_TABLET_WIDTH}px) {
        justify-items: center;
    }
    @media (max-width: ${MEDIA_PHONE_WIDTH}px) {
        margin: calc(${CARDS_MARGIN_PHONE}px + ${APP_BAR_HEIGHT}px) ${CARDS_MARGIN_PHONE}px auto ${CARDS_MARGIN_PHONE}px;
        grid-template-columns: 1fr
    }
`
const P = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  font-style: normal;
  text-align: center;
  letter-spacing: 0.25px;
  margin-bottom: 31px;
`