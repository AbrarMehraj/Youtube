import React, { Component } from "react";
import { connect } from "react-redux";
import { Videos } from "../actions";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  renderVideoList = () => {
    return this.props.videos.map((video) => {
      return <VideoItem key={video.etag} video={video} />;
    });
  };

  render() {
    // console.log(this.props);
    return <ul className="col-md-4 list-group">{this.renderVideoList()}</ul>;
  }
}

const mapStateToProps = (state) => {
  // console.log(state.videos);
  return { videos: state.videos };
};

export default connect(mapStateToProps, { Videos })(VideoList);
