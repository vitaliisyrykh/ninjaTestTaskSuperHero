import React, {useState, useEffect} from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import {createHeroImgRequest} from '../action/creatorHeroAction';

const ImgForm = ({id}) => {
  const [img, setImg]=useState(null)
  const dispatch = useDispatch()
  const onChange=({target})=>{
    console.log(target.files);
    const heroImgsArr = Object.entries(target.files).flat(1);

    
    console.log(heroImgsArr);
    //setImg({imgHero:target.files[0]})
    dispatch(createHeroImgRequest({heroImgsArr, id}))
  }
  
  return (
    <div>
      <Formik
      initialValues={{
        imgFile: null
      }}
      enableReinitialize
      >
        <Form >
        <input name='imgFile' type='file' onChange={onChange}/>
        </Form>
      </Formik>
    </div>
  );
}

export default ImgForm;
