import React from 'react'

const Suggestion = (props) => {
    return (
        <li style={{ borderBottom: "1px solid white" }} key={props.m.id} onClick={() => props.onGetMovie(`https://api.themoviedb.org/3/search/movie?api_key=25c1b50ad49d75eb0ba9199548ccb16b&language=en-US&query=${props.m.title}&page=1&include_adult=false`)}>{props.m.title}</li>
    )
}

export default Suggestion