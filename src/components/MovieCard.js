import React from 'react'
import { Grid, Card, CardMedia, CardContent, Stack, Typography, Rating } from '@mui/material'

const MovieCard = (props) => {
    const movieRating = +((props.movieObj.vote_average / 10) * 5).toFixed(1);
    const movieImg = `https://image.tmdb.org/t/p/original/${props.movieObj.poster_path}`
    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card>
                    <CardMedia
                        component='img'
                        image={movieImg}
                        title='movie poster'
                        height="200px"
                    />

                    <CardContent>
                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <Typography variant='body2'>{props.movieObj.title}</Typography>
                            <Rating sx={{ fontSize: '15px' }} value={movieRating} precision={0.1} readOnly size='small' />
                        </Stack>
                        <Typography variant='body2'></Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default MovieCard