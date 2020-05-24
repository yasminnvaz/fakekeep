import React, {useContext} from 'react';
import {TextInput} from 'react-native';
import styled, {ThemeContext} from 'styled-components';

const CustomTextInput = styled(TextInput)`
  color: ${({theme}) => theme.INPUT_TEXT_COLOR};
  padding: 10px;
`;

export default ({value, onChangeText, placeholder, ...props}) => {
  const theme = useContext(ThemeContext);

  return (
    <CustomTextInput
      value={value}
      enablesReturnKeyAutomatically
      placeholderTextColor={theme.PLACEHOLDER_TEXT_COLOR}
      placeholder={placeholder}
      onChangeText={onChangeText}
      {...props}
    />
  );
};
