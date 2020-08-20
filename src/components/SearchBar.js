import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import YTSearch from "youtube-api-search";
import { Videos, selectedVideo } from "../actions";
import "./style.css";
const API_KEY = "AIzaSyAM0PMymJsVy-jVLtkuswdUlYTp7EQ3GVk";

class SearchBar extends Component {
  componentDidMount() {
    this.onInputSubmit("Tariq Mohammad Surah Yousuf");
  }

  // Api Call to youtube
  onInputSubmit(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.props.Videos(videos);
      const defaultVideo = this.props.videos[0];
      this.props.selectedVideo(defaultVideo);
    });
  }

  renderInput = ({ input }) => {
    // console.log(input);
    return <input {...input} />;
  };

  onSubmit = ({ Input }) => {
    this.onInputSubmit(Input);
  };

  render() {
    // console.log(this.props);
    return (
      <div className="search-bar">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field nam e="Input" component={this.renderInput} />
          <button>Search</button>
        </form>
        {/* {this.props.videos.length} */}
      </div>
    );
  }
}

const formWrapped = reduxForm({
  form: "SearchTerm",
})(SearchBar);

const mapStateToProps = (state) => {
  // console.log(state);
  return { videos: state.videos };
};

export default connect(mapStateToProps, { Videos, selectedVideo })(formWrapped);
