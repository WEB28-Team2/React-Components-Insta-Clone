import React, {useState} from 'react';

const LikeSection = props => {

  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper" onClick={() => props.likeHandler(props.likes)}>
        <i className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">Likes: {props.likes}</p>
</div>
  )
};

export default LikeSection;
