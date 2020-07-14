import React from 'react'

import { Grid, Paper, Typography } from '@material-ui/core'

export const VideoItem = ({video, onVideoSelect}) => {
    return(
        <Grid id="video-item" item xs={12}>
            <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }} onClick={() => onVideoSelect(video)} >
                <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" style={{marginRight: '20px', width: '60%', height: '100%'}}/>
                <Typography style={{fontSize: '14px'}} variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}