import React from 'react'
import styled from "styled-components";
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity, View, } from 'react-native';

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

const CustomButtonView = styled(View)`
    background-color: ${({ theme }) => theme.PRIMARY_BUTTON_COLOR};
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

const CustomButtonText = styled(Text)`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
  font-size: 15px;
  font-style: normal;
  font-weight: bold;
  padding: 10px;
`;

export default ({ onPress, text }) => {

    return (
        <Touchable onPress={onPress}>
            <CustomButtonView>
                <CustomButtonText>
                    {text}
                </CustomButtonText>
            </CustomButtonView>
        </Touchable>
    )
}



