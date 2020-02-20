import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comments, setComments] = useState(props.comments);
  const [newComment, setNewComment] = useState("Enter New Comment Here:");

  const onNewCommentSubmit = e => {
    e.preventDefault();
    // setComments([...comments, {username: "Jackson", text: newComment }])
    setComments(comments => [
      ...comments,
      { username: "Jackson", text: newComment }
    ]);
  };

  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <Comment key={index} comment={comment} setComments={setComments} />
        );
      })}

      <CommentInput
        key={props.comments.username}
        newComment={newComment}
        setNewComment={setNewComment}
        onNewCommentSubmit={onNewCommentSubmit}
      />
    </div>
  );
};

export default CommentSection;
