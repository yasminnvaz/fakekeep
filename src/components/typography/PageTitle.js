import React from 'react';
import styled from 'styled-components';
import {Text, View} from 'react-native';

const TitleContainer = styled(View)`
  margin-top: 20px;
`;

const Title = styled(Text)`
  color: ${({theme}) => theme.PRIMARY_TEXT_COLOR};
  font-weight: bold;
  text-align: center;
  font-size: 17px;
`;

export default ({title}) => (
  <TitleContainer>
    <Title>{title}</Title>
  </TitleContainer>
);
