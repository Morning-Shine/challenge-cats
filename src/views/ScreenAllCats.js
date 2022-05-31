import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllCats from '../components/AllCats';
import { fetchCats } from '../store/catsSlice';


export default function ScreenAllCats() {
  const dispatch = useDispatch();
  const { cats } = useSelector(state => state.cats);

  useEffect(() => {
    if (!cats.length) {
      dispatch(fetchCats());
      console.log('useEffect запущен dispatch(fetchCats())');
    }
  }, [cats.length, dispatch]);

  return (
    <AllCats />
  )
}