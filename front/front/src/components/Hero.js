import React from 'react';
import { useDispatch } from 'react-redux';

const Hero = props => {
  const{hero:{nickName,realName,discription,chartPhrase}}=props;

  return (
    <>
      <h1>{nickName}</h1>
      <h2>{realName}</h2>
      <p>{discription}</p>
      <span>{chartPhrase}</span>
      <button>update</button>
      <button>delete</button>
    </>
  );
}

export default Hero;
