import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { createHeroRequest } from '../action/creatorHeroAction';

const HeroForm = props => {
  const {createHeroRequest} = props;

  const onSubmit = (values, formikBag) => {
    createHeroRequest(values);
    formikBag.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          nickName: '',
          realName: '',
          originDescription: '',
          catchPhrase: ''
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <Field name='nickName' placeholder='Enter hero nickName' />
          <Field name='realName' placeholder='Enter hero realName' />
          <Field name='originDescription' placeholder='Enter hero discription' />
          <Field name='catchPhrase' placeholder='Enter hero catch phrase' />
          <button type='submit'>Create Hero</button>
        </Form>
      </Formik>
    </div>
  );
};

const mapDispaychToProps = dispatch => ({
  createHeroRequest: values => dispatch(createHeroRequest(values))
});

export default connect(null, mapDispaychToProps)(HeroForm);
