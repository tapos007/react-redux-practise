import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import SearchYoutube from 'youtube-api-v3-search';



class App extends Component {

    constructor(props){
        console.log(API_KEY);
        super(props);
        this.state = {
            videos:[],
            selectedVideo:null,
        };

       // let result = await searchYoutube($YOUTUBE_KEY,options);

        this.videoSearch('nodejs');

    }

    videoSearch(term){
        var self = this;
        SearchYoutube(process.env.API_KEY,{
            q:term,
        },function (data,result) {
            if(data==null){
                self.setState({
                    videos:result.items,
                    selectedVideo:result.items[0]
                });

            }

        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <SearchBar nowText={"nodejs"} onSearchTermChange={term=>this.videoSearch(term)} />
                </div>
                <div className="col-md-12 myPadding">
                    <div className="row">
                        <VideoDetail video={this.state.selectedVideo}/>
                        <VideoList
                            onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                            videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        );
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

module.hot.accept();