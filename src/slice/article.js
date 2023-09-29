import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    articles: [],
    articleDetail:true,
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
            state.isLoading = false
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
        postArticleStart:state => {
            state.isLoading = false
        },
        postArticleSuccess:state => {
            state.isLoading = false
        },
        postArticleFailure:state => {
            state.isLoading = false
            state.error = 'Error'
        }
    },
})
export const {
    getArticlesStart,
    getArticleSuccess,
    getArticleFailure,
    getArticleDetailFailure,
    getArticleDetailStart,
    getArticleDetailSuccess,
    postArticleStart,
    postArticleSuccess,
    postArticleFailure
} = articleSlice.actions
export default articleSlice.reducer