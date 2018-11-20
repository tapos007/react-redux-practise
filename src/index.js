import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import SearchYoutube from 'youtube-api-v3-search';
const API_KEY = '';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            videos:[]
        };
        SearchYoutube({key:API_KEY,term:'surfboards'},function (data) {
            console.log(data);
        })


    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <SearchBar/>
                </div>
                <div className="col-md-12 myPadding">
                    <div className="row">
                        <VideoDetail/>
                        <VideoList/>
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