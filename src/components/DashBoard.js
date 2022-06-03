import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { CircularProgress, Grid, List } from '@mui/material';
import MovieCard from './MovieCard';
import Suggestion from './Suggestion';

const DashBoard = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [suggestions, setSuggestions] = useState('');

    async function fetchData(url) {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        const moviesFound = json.results;
        setMovies(moviesFound);
        setLoading(false);
    }

    async function fetchSuggestion(url) {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        const moviesFound = json.results;
        setSuggestions(moviesFound.map(m => <Suggestion key={m.id} m={m} onGetMovie={fetchData} />));
        setLoading(false);
    }


    useEffect(() => {
        fetchData('https://api.themoviedb.org/3/trending/movie/day?api_key=25c1b50ad49d75eb0ba9199548ccb16b')
    }, []);

    const searchMovie = (query) => {
        console.log(query);
        if (query === "") {
            setSuggestions('');
            fetchData('https://api.themoviedb.org/3/trending/movie/day?api_key=25c1b50ad49d75eb0ba9199548ccb16b')
        }
        else
            fetchSuggestion(`https://api.themoviedb.org/3/search/movie?api_key=25c1b50ad49d75eb0ba9199548ccb16b&language=en-US&query=${query}&page=1&include_adult=false`)
    }


    return (
        <>
            <Navbar onSearch={searchMovie} />
            {suggestions !== '' && <List sx={{ position: 'absolute', zIndex: 10, right: '60px', width: '200px', bgcolor: 'black', color: 'white' }}>{suggestions}</List>}
            {loading ? <CircularProgress size='50px' variant='indeterminate' sx={{ position: 'fixed', top: "40%" }} /> :
                <main style={{ padding: "20px" }}>
                    <Grid container spacing={4} >
                        {
                            movies.length === 0 ? <Grid item><h1>Movie Not Found</h1></Grid> :
                                movies.map(movie => <MovieCard key={movie.id} movieObj={movie} />)
                        }
                    </Grid>
                </main>
            }
        </>
    )
}

export default DashBoard