import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteHeroRequest, isUpdateAction } from '../action/creatorHeroAction';
import SuperPower from './SuperPower';
import HeroUpdateFrom from './HeroUpdateFrom';

const Hero = props => {
  const {
    hero: { nickName, realName, originDescription, chartPhrase, id, SuperPowers },
    hero
  } = props;
  const [isUpdate, setIsUpdate]= useState(false)
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteHeroRequest({ id }));
  };
  const updateHandler = () => {
    setIsUpdate(prevIsUpdate=>prevIsUpdate=!isUpdate)
  };
  
  return (
    <li>
       {isUpdate ? (
        <HeroUpdateFrom hero={hero} updateHandler={updateHandler}/>
      ) : (
        <div>
          <h1>{nickName}</h1>
          <h2>{realName}</h2>
          <p>{originDescription}</p>
          <span>{chartPhrase}</span>
          <ul>
            {SuperPowers.map(power => (
              <SuperPower key={power.id} power={power} idHero={id} />
            ))}
          </ul>
        </div>
      )} 
      
      <button onClick={updateHandler}>update</button>
      <button onClick={deleteHandler}>delete</button>
    </li>
  );
};

export default Hero;
