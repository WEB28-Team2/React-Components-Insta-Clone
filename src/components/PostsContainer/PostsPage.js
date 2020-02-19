import React from "react";
import Post from "./Post.js";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log(props)
  return (
    <div className="posts-container-wrapper">
      {props.dummyData.map(post => {
        return <Post key={post.username} post={post} />
      })}
    </div>
  );
};

export default PostsPage;

