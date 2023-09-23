import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    articles: [],
    articleDetail:null,
    error: null
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticlesStart:state => {
            state.isLoading = true
        },
        getArticleSuccess:(state, action) => {
            state.isLoading = false
            state.articles = action.payload
        },
        getArticleFailure:(state, action) =>{
            state.error = action.payload
        },
        getArticleDetailStart:(state,action) => {
            state.articles = action.payload
            state.isLoading = true
        },
        getArticleDetailSuccess:(state, action) => {
            state.isLoading = true
            state.articleDetail = action.payload
        },
        getArticleDetailFailure:state => {
            state.isLoading = false

        },
    },
})
export const {
    getArticlesStart,
    getArticleSuccess,
    getArticleFailure,
    getArticleDetailFailure,
    getArticleDetailStart,
    getArticleDetailSuccess
} = articleSlice.actions
export default articleSlice.reducer