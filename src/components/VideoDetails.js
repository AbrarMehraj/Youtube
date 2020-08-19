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

  console.log(Video);
  return (
    <div>
      <div>
        <iframe title="myframe" src={url}></iframe>
      </div>
      <div>
        <div>{Video.snippet.title}</div>
        <div>{Video.snippet.description}</div>
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
