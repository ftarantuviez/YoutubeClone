import React from 'react'

import {Grid} from '@material-ui/core'
import {VideoItem} from './VideoItem'

export const VideoList = ({videos, onSelectVideo}) => {
    const listOfVideos = videos.map((video, id) =>{
        return(
            <VideoItem key={id} onVideoSelect={onSelectVideo} video={video} />
            )
    })

    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    );
}