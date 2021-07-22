import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHeroesRequest } from '../action/creatorHeroAction';
import Hero from './Hero';

const HeroList = props => {
  const { heroes, isFetching, error } = useSelector(state => state.superHero);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroesRequest({ offset: heroes.length }));
  }, [dispatch]);

  return (
    <div>
      {isFetching && 'LOADING....'}
      {error && JSON.stringify(error, null, 4)}
      <ul>
        {heroes.map(hero => (
          <Hero key={hero.id} hero={hero} />
        ))}
      </ul>
    </div>
  );
};

export default HeroList;
