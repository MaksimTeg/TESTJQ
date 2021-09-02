import React from "react";
import "./App.css";
import PostsContainer from "./Components/Posts/PostsContainer";
import { RightBody } from "./Components/RightBody";

export default function App() {
  return (
    <div className="App">
      <h1>All Posts</h1>
      <div className="postcols">
        <div className="postcols-left">
          <PostsContainer />
        </div>
        <div className="postcols-right">
          <RightBody />
        </div>
      </div>
    </div>
  );
}
