import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

export class App extends Component {
  render() {
    return (
      <div>
        {/* Search Bar  */}
        <SearchBar />
        <VideoDetails />
        <VideoList />
      </div>
    );
  }
}

export default App;
