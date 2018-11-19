import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBL4ux4AJhCi2NWnrPMcg80ENoVC5NoOGM';


class App extends Component {
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