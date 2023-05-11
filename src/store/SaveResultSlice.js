import { createSlice } from "@reduxjs/toolkit";


const SaveResultSlice= createSlice({
    name: 'save-result',

    initialState,
    reducers: {
        onSaveResults(state){localStorage.setItem('typing-test-results', JSON.stringify(results));},
        onGetResults(state){ const results = localStorage.getItem('typing-test-results');
        return results ? JSON.parse(results) : [];},
        onClearResults(state){localStorage.removeItem('typing-test-results');},
    },
});