import React from 'react';
import Tweet from './Tweet';
import './Feed.css';

const Feed = ({ tweets, sortBy, onSortChange }) => {
  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
        <div className="sort-controls">
          <span>Sort by:</span>
          <select 
            value={sortBy} 
            onChange={(e) => onSortChange(e.target.value)}
            className="sort-select"
          >
            <option value="likes">Likes</option>
            <option value="reposts">Reposts</option>
            <option value="replies">Replies</option>
            <option value="views">Views</option>
          </select>
        </div>
      </div>
      
      <div className="feed-content">
        {tweets.map((tweet, index) => (
          <Tweet key={tweet.id || index} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
