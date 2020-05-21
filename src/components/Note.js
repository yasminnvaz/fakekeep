import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import Title from './typography/NoteTitle'
import Text from './typography/NoteText'

const NoteItem = styled(View)`
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
  flex-basis: 0;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.SECONDARY_BACKGROUND_COLOR};
`;

const Note = ({ value }) => {
    return (
        (value && (value.note || value.title) && (
            <NoteItem>
                <Title>{value.title}</Title>
                <Text>{value.note}</Text>
            </NoteItem>
        )) || <Text />
    );
};

export default Note;