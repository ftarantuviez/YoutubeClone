import React from 'react'

import {Grid} from '@material-ui/core';

import SearchBar from './components/SearchBar';
import {VideoDetail} from './components/VideoDetail';
import {VideoList} from './components/VideoList';

import './components/styles.css'

import youtube from './api/youtube'

class App extends React.Component{

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount = () => {
        this.handleSubmit('CERN')
    }

    handleSubmit = async (searchTerm) =>{
        const response = await youtube.get('search', { params: {
            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyDjtAYzMM-Ccshr9KPxZtyxB-38yjW6Kwo',
            q: searchTerm,
        } })
        
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) =>{
        this.setState({
            selectedVideo: video 
        })
    }

    render(){
        const { selectedVideo, videos } = this.state;
        return(
            <>
            <Grid justify container spacing={10}> 
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={12} sm={6} style={{height: '420px'}}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={12} sm={4} id="video-list" style={{width: '500px'}}>
                            <VideoList videos={videos} onSelectVideo={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </>
        )
    }
}

export default App;