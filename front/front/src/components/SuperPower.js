import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSuperPowerRequest } from '../action/creatorHeroAction';

const SuperPower = props => {
  const { power, idHero } = props;
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteSuperPowerRequest({ idHero, id: power.id }));
  };

  return (
    <li>
      <h2>{power.name}</h2>
      <span>{power.discription}</span>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default SuperPower;
