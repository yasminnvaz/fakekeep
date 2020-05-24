import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components';

import {getAllNotes} from '../services/NotesServices';
import ViewContainer from '../components/ViewContainer';
import PageTitle from '../components/typography/PageTitle';

import Note from '../components/Note';

const NoteContainer = styled(View)`
  margin-top: 20px;
`;

export default () => {
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadNotes = async () => {
    const pagination = `?page=${page}&per_page=${10}`;
    const listNotes = await getAllNotes(pagination);

    setNotes([...notes, ...listNotes]);
    setLoading(false);
    setPage(page + 1);
  };

  useEffect(() => {
    const getNotes = async () => {
      await loadNotes();
    };
    getNotes();
  }, []);

  return (
    <ViewContainer>
      <PageTitle title={'Notes'} />
      <NoteContainer>
        <FlatList
          data={notes}
          numColumns={2}
          renderItem={({item}) => <Note value={item} />}
          keyExtractor={(item) => item._id}
          onEndReached={loadNotes}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            loading && <ActivityIndicator color="#ccc" size="large" />
          }
        />
      </NoteContainer>
    </ViewContainer>
  );
};
