import React, { useState, useEffect } from 'react'
import ViewContainer from '../containers/ViewContainer'
import { getAllNotes } from '../services/NotesServices'
import { FlatList } from 'react-native-gesture-handler'

import { ActivityIndicator } from 'react-native'

import Note from '../components/Note'

export default () => {

    const [notes, setNotes] = useState([])
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);

    const loadNotes = async () => {
        const pagination = `?page=${page}&per_page=${10}`;
        const listNotes = await getAllNotes(pagination);

        setNotes([...notes, ...listNotes]);
        setLoading(false);
        setPage(page + 1);
    }

    useEffect(() => {
        const getNotes = async () => { await loadNotes() }
        getNotes()
    }, [])

    return (
        <ViewContainer>
            <FlatList
                data={notes}
                numColumns={2}
                renderItem={({ item }) => <Note value={item} />}
                keyExtractor={(item) => item._id}
                onEndReached={loadNotes}
                onEndReachedThreshold={0.1}
                ListFooterComponent={loading && (<ActivityIndicator color="#ccc" size="large" />)}
            />
        </ViewContainer>
    )
}