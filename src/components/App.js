import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

export class App extends Component {
  render() {
    return (
      <div className="ui container">
        {/* Search Bar  */}
        <SearchBar />
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
        <VideoDetails />
        <VideoList />
        {/* </div> */}
      </div>
    );
  }
}

export default App;
