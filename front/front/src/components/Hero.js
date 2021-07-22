import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteHeroRequest } from '../action/creatorHeroAction';
import SuperPower from './SuperPower';
import HeroUpdateFrom from './HeroUpdateFrom';
import SuperPowerForm from './SuperPowerForm';
import ImgForm from './ImgForm';

const Hero = props => {
  const {
    hero: { nickName, realName, originDescription, chartPhrase, id, SuperPowers,Images },
    hero
  } = props;
  const [isUpdate, setIsUpdate]= useState(false)
  const [isCreatePower,setIsCreate]=useState(false)
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteHeroRequest({ id }));
  };
  const updateHandler = () => {
    setIsUpdate(prevIsUpdate=>prevIsUpdate=!isUpdate)
  };
  const isCreatehandler = ()=>{
    setIsCreate(prevIsCreate=>prevIsCreate = !isCreatePower);
  }
  
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
          {isCreatePower&& <SuperPowerForm id={id} isCreatehandler={isCreatehandler}/>}
          <ImgForm id={id}/>
          <ul>
            {SuperPowers.map(power => (
              <SuperPower key={power.id} power={power} idHero={id} />
            ))}
          </ul>
          <ul>
            {Images.map(img=>(
             <li key={img.id}>
                <img src={img.path}/>
             </li> 
            ))}
          </ul>
        </div>
      )} 
      
      <button onClick={updateHandler}>update</button>
      <button onClick={deleteHandler}>delete</button>
      <button onClick={isCreatehandler}>Add power</button>
    </li>
  );
};

export default Hero;
