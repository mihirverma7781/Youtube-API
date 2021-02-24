import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetails from "./components/VideoDetails";
import  VideoList  from "./components/VideoList";

export class App extends Component {

state={
    videos:[],
    selectedVideo:null,

}

componentDidMount=()=>{
    this.handleSubmit("gameplay halo")
}

onVideoSelect=(video)=>{
    this.setState({selectedVideo:video})
}
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", { params: { q: searchTerm } });

    this.setState({
        videos:response.data.items,
        selectedVideo: response.data.items[0]
    });
  }
  render() {
      const {selectedVideo,videos }= this.state;
    return (
      <Grid container spacing={10} justify="center">
        <Grid item xs={12} style={{textAlign:'center'}}>
        <h1 style={{color:'red', fontFamily:'Roboto'}}>Youtube API</h1>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              {/* THIS IS FOR SEARCH BAR */}
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>

            <Grid item xs={8}>
              {/* VIDEO DETAILS */}
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              {/* VIDEO LIST */}
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
