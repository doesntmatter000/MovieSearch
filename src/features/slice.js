import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getPopularMovies = createAsyncThunk(
    'popular/getPopularMovies',
    async function({index, bool}) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDQzNTRjMjFiZjVhM2U0Y2Q0Zjc3OTExN2Q4YmVlMyIsInN1YiI6IjY0NmNmMmQwNTRhMDk4MDExYjJjY2RhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_f3aP9GV5fUdmSvkyQX9W43rJR-dVm3J3iA-eBvwBw'
            }
        };

        let Data
        if (bool === false) {
            const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${1}`;
            const response = await axios.get(url, options)
            Data = response.data
        } else if (bool === true) {
            const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${index}`;
            const response = await axios.get(url, options)
            Data = response.data
        }
        return Data
    }
)

export const getUpcomingMovies = createAsyncThunk(
    'popular/getUpcomingMovies',
    async function({index, bool}) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDQzNTRjMjFiZjVhM2U0Y2Q0Zjc3OTExN2Q4YmVlMyIsInN1YiI6IjY0NmNmMmQwNTRhMDk4MDExYjJjY2RhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_f3aP9GV5fUdmSvkyQX9W43rJR-dVm3J3iA-eBvwBw'
            }
        };

        let Data
        if (bool === false) {
            const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${1}`;
            const response = await axios.get(url, options)
            Data = response.data
        } else if (bool === true) {
            const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${index}`;
            const response = await axios.get(url, options)
            Data = response.data
        }
        return Data
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
        indexPopular: 1,
        indexUpcoming: 1
    },
    reducers: {},
     extraReducers: {
        [getPopularMovies.pending]: (state) => {
            state.isLoading = !state.isLoading
        },
        [getPopularMovies.fulfilled]: (state, action) => {
                state.popularMovies = [...state.popularMovies, ...action.payload.results]
                state.indexPopular++
                state.isLoading = !state.isLoading

        },
         [getUpcomingMovies.pending]: (state) => {
             state.isLoading = !state.isLoading
         },
         [getUpcomingMovies.fulfilled]: (state, action) => {
                 state.upcomingMovies = [...state.upcomingMovies, ...action.payload.results]
                 state.indexUpcoming++
                 state.isLoading = !state.isLoading
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