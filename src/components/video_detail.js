import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VideoDetails extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        const video = this.props.video;
        const url = video!=null ? `https://www.youtube.com/embed/${video.id.videoId}`:"";
        if(!this.props.video){
            return <div>Loading....</div>
        }
        return (
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-12">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item"
                                    src={url}
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-md-12 myPadding">
                        <div className="card">
                            <div className="card-body">
                                <h3>{video.snippet.title}</h3>
                                <h4>{video.snippet.description}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

VideoDetails.propTypes = {};

export default VideoDetails;
