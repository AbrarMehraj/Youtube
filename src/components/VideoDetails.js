import React from "react";
import { connect } from "react-redux";
import { Videos, selectedVideo } from "../actions";

function VideoDetails({ Video }) {
  if (!Video) {
    return <div>Loading...</div>;
  }
  //   console.log(currentVideo);
  const videoId = Video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  // console.log(Video);
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          title="myframe"
          src={url}
        ></iframe>
      </div>
      <div className="details">
        <div>{Video.snippet.title}</div>
        {/* <div className="details-des">{Video.snippet.description}</div> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { Video: state.selectedVideo };
};

export default connect(mapStateToProps, { Videos, selectedVideo })(
  VideoDetails
);
