import React, {useContext} from 'react';
import styled from 'styled-components';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import PageTitle from '../components/typography/PageTitle';
import ViewContainer from '../components/ViewContainer';
import Input from '../components/Input';
import ErrorText from '../components/typography/ErrorText';
import Button from '../components/Button';
import {createNote} from '../services/NotesServices';

const FormContainer = styled(View)`
  background-color: ${({theme}) => theme.SECONDARY_BACKGROUND_COLOR};
  margin-top: 20px;
  border-radius: 10px;
`;

const FormItem = styled(View)`
  padding: 10px 0px 10px 0px;
`;

const CreateSchema = Yup.object().shape({
  title: Yup.string().required('required'),
  content: Yup.string(),
});

const initialValues = {title: '', content: ''};

export default ({navigation}) => {
  
  const onSubmit = async (values) => {
    const note = await createNote(values);

    navigation.reset({
      index: 1,
      routes: [{name: 'New note'}],
    });

    navigation.navigate({name: 'Home'});
  };

  return (
    <ViewContainer>
      <PageTitle title="New note" />
      <FormContainer>
        <Formik
          validationSchema={CreateSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}>
          {({handleChange, handleSubmit, values, setFieldTouched, errors}) => (
            <>
              <FormItem>
                <Input
                  placeholder="Title"
                  onChangeText={handleChange('title')}
                  onBlur={() => setFieldTouched('title')}
                  value={values.title}
                  style={{fontSize: 18}}
                />
                {errors.title && <ErrorText>{errors.title}</ErrorText>}
              </FormItem>
              <FormItem>
                <Input
                  multiline
                  placeholder="Note"
                  onChangeText={handleChange('content')}
                  onBlur={() => setFieldTouched('content')}
                  value={values.content}
                />
              </FormItem>
              <Button onPress={handleSubmit} text={'Save'} />
            </>
          )}
        </Formik>
      </FormContainer>
    </ViewContainer>
  );
};
