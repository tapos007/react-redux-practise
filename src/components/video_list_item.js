import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VideoListDetails extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const video = this.props.video;
        const divStyle = {
            marginBottom: '20px',
        };
        const imageUrl = video.snippet.thumbnails.default.url;
        return (
            <li onClick={()=> this.props.onVideoSelect(video)} className="media" style={divStyle}>
                <img className="mr-3" src={imageUrl} alt="Generic placeholder image"/>
                <div className="media-body">
                    <h5 className="mt-0 mb-1">{video.snippet.title}</h5>
                    {video.snippet.description}
                </div>
            </li>
        );
    }
}

VideoListDetails.propTypes = {};

export default VideoListDetails;
