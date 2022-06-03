import { Card, CardContent, CardMedia, Container, Grid, Rating, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MovieInfo = () => {
    const [moviesFound, setMoviesFound] = useState({});
    const [moviesCastFound, setMoviesCastFound] = useState([]);
    const movieId = useParams().id;
    const movieCasturl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=25c1b50ad49d75eb0ba9199548ccb16b&language=en-US`
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=25c1b50ad49d75eb0ba9199548ccb16b&language=en-US`
    async function fetchMovieCast(movieUrl, movieCastUrl) {
        const response = await fetch(movieUrl);
        const json = await response.json();
        console.log(json);
        setMoviesFound(
            {
                title: json.title,
                overview: json.overview,
                img: `https://image.tmdb.org/t/p/original/${json.poster_path}`,
                releaseDate: json.release_date,
                vote: +((json.vote_average / 10) * 5).toFixed(1)
            }
        );

        const castResponse = await fetch(movieCastUrl);
        const castJson = await castResponse.json();
        setMoviesCastFound(castJson.cast);
        // console.log(castJson.cast);
    }
    console.log(moviesFound);
    useEffect(() => { fetchMovieCast(movieUrl, movieCasturl) }, []);

    return (
        <>
            <Container>
                {
                    moviesFound.title !== 0 &&
                    <>
                        <Card sx={{ mt: "30px" }}>
                            <Typography variant='h1'>{moviesFound.title}</Typography>
                            <CardMedia component="img"
                                image={moviesFound.img}
                                title='movie poster'
                                height="400px"
                            />
                            <Rating sx={{ mt: '20px', mb: '20px' }} value={moviesFound.vote || ''} precision={0.1} readOnly size='large' />
                            <Typography variant='h5'>Release Date: {moviesFound.releaseDate}</Typography>
                            <CardContent>
                                <Stack>

                                    <Typography variant='h3'>Overview</Typography>
                                    <Typography>{moviesFound.overview}</Typography>
                                </Stack>
                            </CardContent>
                        </Card>

                    </>
                }
                <h2>Movie Cast</h2>
                {
                    <Grid container spacing={4} marginBottom="30px" >
                        {moviesCastFound.length !== 0 &&
                            moviesCastFound.map(mem =>
                                <>
                                    <Grid item xs={6} sm={4} lg={2}>
                                        <Card>
                                            <CardMedia
                                                component="img"
                                                image={`https://image.tmdb.org/t/p/original/${mem.profile_path}`}
                                                title='cast pic'
                                                height="200px"
                                            />
                                            <Typography variant='p'>{mem.name}</Typography>
                                        </Card>
                                    </Grid>
                                </>
                            )}

                    </Grid>

                }
            </Container>

        </>
    )
}

export default MovieInfo