import React, {Component} from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {



    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {

        const listItems = this.props.videos.map((video)=>
            <VideoListItem onVideoSelect={this.props.onVideoSelect} video={video} key={video.etag}/>
        );
        return (
            <div className="col-md-6">
                <h1 className="text-center">video list</h1>
                <ul className="list-item">
                    {listItems}
                </ul>
            </div>
        );
    }
}

VideoList.propTypes = {};

export default VideoList;
