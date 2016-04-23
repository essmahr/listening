import React from 'react';
import scrollTo from '../lib/scrollTo';

export default function LoadMoreButton(props) {
  function toTop() {
    scrollTo(document.body, 0, 400);
  }

  return (
    <div className="button-bar">
      <button className="button button-load-more" onClick={props.onClick}>Load More</button>
      <button className="button button-to-top" onClick={toTop}>&uarr;</button>
    </div>
  )
}

export default LoadMoreButton;
