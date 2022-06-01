import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardCat from '../components/CardCat';
import styled from "@emotion/styled";
import { fetchCats } from '../store/catsSlice';
import { APP_BAR_HEIGHT, LEFT_INDENT_MAIN } from '../constants/CSS_DIMENTIONS';
import { trottle } from '../utils/trottle';


export default function AllCats() {
    const { cats, status, error } = useSelector(state => state.cats);
    const dispatch = useDispatch();
    const lastCallFuncScrollHeight = useRef(0);

    console.log('lastCallFuncScrollHeight: ', lastCallFuncScrollHeight.current);
    
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    const scrollHandler = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight;
        const scrollTop = e.target.documentElement.scrollTop;
        const clientHeight = e.target.documentElement.clientHeight;
        if (scrollHeight - scrollTop - clientHeight < 321 //TODO добавить переменную в css (225+48*2)
            && scrollHeight > lastCallFuncScrollHeight.current
        ) {
            // console.log('-----: ', scrollHeight - scrollTop - clientHeight);
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