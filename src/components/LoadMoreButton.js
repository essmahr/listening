import React from 'react';
import scrollTo from '../lib/scrollTo';

export default function LoadMoreButton(props) {
  function toTop() {
    scrollTo(document.body, 0, 400);
  }

  function spinner() {
    return (
      <div className="dots">
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
      </div>
    );
  }

  return (
    <div className="button-bar">
      <button className="button button-load-more" onClick={props.onClick}>
        {props.isFetching ? spinner() : 'Load More'}
      </button>
      <button className="button button-to-top" onClick={toTop}>&uarr;</button>
    </div>
  )
}

export default LoadMoreButton;
