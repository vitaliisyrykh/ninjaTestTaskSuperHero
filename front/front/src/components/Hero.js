import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {deleteHeroRequest} from '../action/creatorHeroAction';

const Hero = props => {
  const {
    hero: { nickName, realName, discription, chartPhrase, id }
  } = props;

  const dispatch = useDispatch();

  const deleteHandler = ()=>{
    dispatch(deleteHeroRequest({id}))
  }
  

  return (
    <>
      <h1>{nickName}</h1>
      <h2>{realName}</h2>
      <p>{discription}</p>
      <span>{chartPhrase}</span>
      <button>update</button>
      <button onClick={deleteHandler}>delete</button>
    </>
  );
};

export default Hero;
