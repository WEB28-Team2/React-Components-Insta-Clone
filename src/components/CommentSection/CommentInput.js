import React from "react";

const CommentInput = props => {

  return (
    <form className="comment-form" onSubmit={(e) => {props.onNewCommentSubmit(e)}}>
      <input
        type="text"
        value={props.newComment}
        onChange={e => {
          props.setNewComment(e.target.value);
        }}
      />
    </form>
  );
};

export default CommentInput;
