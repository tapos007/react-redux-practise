import React, {Component} from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
    render() {
        return (
            <div className="col-md-6">
                <h1 className="text-center">video list</h1>
                <ul className="list-group">
                    <VideoListItem/>
                    <VideoListItem/>
                    <VideoListItem/>
                    <VideoListItem/>
                    <VideoListItem/>
                </ul>
            </div>
        );
    }
}

VideoList.propTypes = {};

export default VideoList;
