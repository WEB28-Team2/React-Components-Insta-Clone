import React from "react";
import Post from "./Post.js";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  if (props.searchItem === props.dummyData[0].username) {
    return (
      <div className="posts-container-wrapper">
        <Post key={props.searchItem} post={props.dummyData[0]} />
      </div>
    );
  } else if (props.searchItem === props.dummyData[1].username) {
    return (
      <div className="posts-container-wrapper">
        <Post key={props.searchItem} post={props.dummyData[1]} />
      </div>
    );
  } else {
    return (
      <div className="posts-container-wrapper">
        {props.dummyData.map(post => {
            return <Post key={post.username} post={post} />
          })}
      </div>
    );
  }

};

export default PostsPage;

