import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { updateHeroRequest } from '../action/creatorHeroAction';

const HeroUpdateFrom = props => {
  const {
    hero: { id, nickName, realName, originDescription },
    updateHandler
  } = props;
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(updateHeroRequest({ values, id }));
    formikBag.resetForm();
    updateHandler();
  };
  return (
    <div>
      <Formik
        initialValues={{
          nickName: `${nickName}`,
          realName: `${realName}`,
          originDescription: `${originDescription}`
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <Field name='nickName' placeholder='Enter hero nickName' />
          <Field name='realName' placeholder='Enter hero nickName' />
          <Field name='originDescription' placeholder='Enter hero nickName' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default HeroUpdateFrom;
