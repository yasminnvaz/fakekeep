import React from 'react'
import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context';

const ViewContainer = styled(SafeAreaView)`
    background-color: ${({ theme }) => theme.PRIMARY_BACKGROUND_COLOR};
    flex: 1;
    justify-content: center;
    align-content: center;
    padding-left: 24px;
    padding-right: 24px;
`

export default ({ children }) => {
    return <ViewContainer>{children}</ViewContainer>
}