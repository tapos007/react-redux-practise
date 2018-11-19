import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VideoDetails extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-12">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-md-12 myPadding">
                        <div className="card">
                            <div className="card-body">
                                <h3>video title</h3>
                                <h4>video description</h4>
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
