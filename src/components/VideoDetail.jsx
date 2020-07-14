import React from 'react'

import {Paper, Typography} from '@material-ui/core'

export const VideoDetail = ({ video }) =>{
    if(!video) return <div>Loading...</div>
    
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <>
            <Paper elevation={6} style={{height: '100%'}}>
                <iframe src={videoSrc} height="100%" width="100%" title="Video Player" frameBorder="0"></iframe>
            </Paper>
            <Paper elevation={6} style={{padding: '10px'}}>
                <Typography variant="h4">
                    {video.snippet.title} | {video.snippet.channelTitle}
                </Typography>
                <Typography variant="subtitle1">
                    {video.snippet.channelTitle}
                </Typography>
                <Typography variant="subtitle2">
                    {video.snippet.description}
                </Typography>
            </Paper>
        </>
    )
}