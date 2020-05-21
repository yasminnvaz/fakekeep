import React from 'react'

import ViewContainer from '../containers/ViewContainer'
import CustomButton from '../components/CustomButton'

export default ({ navigation }) => {

    return (
        <ViewContainer >
            <CustomButton text="Start" onPress={() => navigation.navigate('NotesScreen')} />
        </ViewContainer>
    )
}