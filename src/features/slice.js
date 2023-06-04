import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getPopularMovies = createAsyncThunk(
    'popular/getPopularMovies',
    async function(index) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDQzNTRjMjFiZjVhM2U0Y2Q0Zjc3OTExN2Q4YmVlMyIsInN1YiI6IjY0NmNmMmQwNTRhMDk4MDExYjJjY2RhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_f3aP9GV5fUdmSvkyQX9W43rJR-dVm3J3iA-eBvwBw'
            }
        };

        const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${index}`;
        const response = await axios.get(url, options)
        return response.data
    }
)

export const getUpcomingMovies = createAsyncThunk(
    'popular/getUpcomingMovies',
    async function(index) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDQzNTRjMjFiZjVhM2U0Y2Q0Zjc3OTExN2Q4YmVlMyIsInN1YiI6IjY0NmNmMmQwNTRhMDk4MDExYjJjY2RhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_f3aP9GV5fUdmSvkyQX9W43rJR-dVm3J3iA-eBvwBw'
            }
        };

        const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${index}`;
        const response = await axios.get(url, options)
        return response.data
    }
)

export const getTitleDetail = createAsyncThunk(
    'popular/getTitleDetail',
    async function(title ) {

        const url = `https://www.omdbapi.com/?t=${title}&apikey=167ca1c0`
        const response = await axios.get(url)
        return response.data
    }
)

 const popularSlice = createSlice({
    name: "popular",
    initialState: {
        popularMovies: [],
        upcomingMovies: [],
        isLoading: false,
        titleDetail: [],
        pageIndex: 1
    },
    reducers: {},
     extraReducers: {
        [getPopularMovies.pending]: (state) => {
            state.isLoading = !state.isLoading
        },
        [getPopularMovies.fulfilled]: (state, action) => {
            state.popularMovies = [...state.popularMovies, ...action.payload.results]
            state.pageIndex++
            state.isLoading = !state.isLoading
        },
         [getUpcomingMovies.pending]: (state) => {
             state.isLoading = !state.isLoading
         },
         [getUpcomingMovies.fulfilled]: (state, action) => {
             state.upcomingMovies = [...state.upcomingMovies, ...action.payload.results]
             state.isLoading = !state.isLoading
             state.pageIndex++
         },
        [getTitleDetail.pending]: (state) => {
            state.isLoading = !state.isLoading
        },
        [getTitleDetail.fulfilled]: (state, action) => {
            state.titleDetail = action.payload
            state.isLoading = !state.isLoading
        }
     }
})

export default popularSlice.reducer