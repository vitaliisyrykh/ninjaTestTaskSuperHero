import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { createSuperPowerRequest } from '../action/creatorHeroAction';

const SuperPowerForm = (props) => {
  const {id, isCreatehandler}=props;
  const dispatch = useDispatch()
  const onSubmit=(values, formikBag)=>{
    dispatch(createSuperPowerRequest(values, id));
    console.log(values);
    formikBag.resetForm();
    isCreatehandler();
  }
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          discription: ''
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <Field name='name' placeholder='Enter power name'/>
          <Field name='discription' placeholder ='Enter power discription'/>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SuperPowerForm;
