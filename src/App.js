import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './App.css';

// Twitter/X Icons - Using exact Twitter UI icons
const TwitterIcons = {
  home: '🏠',
  explore: '🔍',
  notifications: '🔔',
  messages: '✉️',
  grok: '🌀',
  bookmarks: '🔖',
  communities: '👥',
  premium: '⭐',
  verified: '⚡',
  profile: '👤',
  more: '⋯',
  search: '🔍',
  image: '🖼️',
  gif: '🎬',
  poll: '📊',
  emoji: '😊',
  schedule: '📅',
  location: '📍',
  reply: '💬',
  repost: '🔄',
  like: '❤️',
  view: '👁️',
  bookmark: '🔖',
  share: '↗️'
};

function App() {
  const [tweets, setTweets] = useState([]);
  const [sortBy, setSortBy] = useState('likes'); // 'likes' or 'reposts'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Read the CSV file
    const loadCSVData = async () => {
      try {
        const response = await fetch('/twitter-posts.csv');
        const csvText = await response.text();
        
                 Papa.parse(csvText, {
           header: true,
           complete: (results) => {
             console.log('CSV parsing complete:', results);
             
             if (results.errors && results.errors.length > 0) {
               console.error('CSV parsing errors:', results.errors);
             }
             
             // Clean and process the data with error handling
             const processedTweets = results.data
               .filter(tweet => tweet.likes && tweet.reposts && tweet.description)
               .map(tweet => {
                 try {
                   let hashtags = [];
                   if (tweet.hashtags) {
                     try {
                       // Try to parse hashtags, handle different formats
                       const cleanHashtags = tweet.hashtags.replace(/"/g, '"').replace(/'/g, '"');
                       hashtags = JSON.parse(cleanHashtags);
                     } catch (hashtagError) {
                       console.log('Hashtag parsing failed for tweet:', tweet.id, 'hashtags:', tweet.hashtags);
                       // If JSON parsing fails, try to extract hashtags manually
                       if (typeof tweet.hashtags === 'string') {
                         hashtags = tweet.hashtags.match(/#\w+/g) || [];
                       }
                     }
                   }
                   
                   return {
                     id: tweet.id || Math.random().toString(36).substr(2, 9),
                     user: tweet.user_posted || 'unknown',
                     name: tweet.name || 'Unknown User',
                     text: tweet.description || '',
                     date: (() => {
                       try {
                         const cleanDate = tweet.date_posted.replace(/"/g, '').replace(/'/g, '');
                         const parsedDate = new Date(cleanDate);
                         return isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
                       } catch (dateError) {
                         console.log('Date parsing failed for tweet:', tweet.id, 'date:', tweet.date_posted);
                         return new Date();
                       }
                     })(),
                     likes: parseInt(tweet.likes) || 0,
                     reposts: parseInt(tweet.reposts) || 0,
                     replies: parseInt(tweet.replies) || 0,
                     views: parseInt(tweet.views) || 0,
                     hashtags: hashtags,
                     profileImage: tweet.profile_image_link,
                     followers: parseInt(tweet.followers) || 0
                   };
                 } catch (error) {
                   console.error('Error processing tweet:', tweet.id, error);
                   return null;
                 }
               })
               .filter(tweet => tweet !== null) // Remove any failed tweets
               .sort((a, b) => b.likes - a.likes); // Default sort by likes
             
             console.log('Processed tweets:', processedTweets.length);
             console.log('First few tweets:', processedTweets.slice(0, 3));
             
             setTweets(processedTweets);
             setLoading(false);
           },
          error: (error) => {
            console.error('Error parsing CSV:', error);
            setLoading(false);
          }
        });
      } catch (error) {
        console.error('Error loading CSV:', error);
        setLoading(false);
      }
    };

    loadCSVData();
  }, []);

  const handleSort = (newSortBy) => {
    setSortBy(newSortBy);
    const sortedTweets = [...tweets].sort((a, b) => b[newSortBy] - a[newSortBy]);
    setTweets(sortedTweets);
  };



  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatDate = (date) => {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1d';
    if (diffDays < 7) return `${diffDays}d`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}w`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo`;
    return `${Math.floor(diffDays / 365)}y`;
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading Twitter data...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Left Sidebar */}
      <div className="left-sidebar">
        <div className="sidebar-content">
          <div className="logo">𝕏</div>
          
          <nav className="nav-menu">
            <a href="#" className="nav-item active">
              <span className="nav-icon">{TwitterIcons.home}</span>
              <span>Home</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">{TwitterIcons.explore}</span>
              <span>Explore</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">{TwitterIcons.notifications}</span>
              <span>Notifications</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">{TwitterIcons.messages}</span>
              <span>Messages</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">{TwitterIcons.grok}</span>
              <span>Grok</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">{TwitterIcons.bookmarks}</span>
              <span>Bookmarks</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">{TwitterIcons.communities}</span>
              <span>Communities</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">{TwitterIcons.premium}</span>
              <span>Premium</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">{TwitterIcons.verified}</span>
              <span>Verified Orgs</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">{TwitterIcons.profile}</span>
              <span>Profile</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">{TwitterIcons.more}</span>
              <span>More</span>
            </a>
          </nav>
          
          <button className="post-btn">Post</button>
          
          <div className="user-profile">
            <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="Profile" />
            <div className="user-info">
              <span className="user-name">User</span>
              <span className="user-handle">@username</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
                 {/* Header */}
         <header className="content-header">
           <h1>Home</h1>
                       <div className="tweet-counter">
              Showing {tweets.length} tweets
            </div>
           <div className="sort-controls">
            <button 
              className={`sort-btn ${sortBy === 'likes' ? 'active' : ''}`}
              onClick={() => handleSort('likes')}
            >
              Sort by Likes
            </button>
            <button 
              className={`sort-btn ${sortBy === 'reposts' ? 'active' : ''}`}
              onClick={() => handleSort('reposts')}
            >
              Sort by Reposts
            </button>
          </div>
        </header>

                 {/* Tweets Feed */}
                   <div className="tweets-container">
            {tweets.map((tweet) => (
            <div key={tweet.id} className="tweet">
              <div className="tweet-header">
                <div className="user-info">
                  <img 
                    src={tweet.profileImage || 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'} 
                    alt={tweet.name}
                    className="profile-image"
                  />
                  <div className="user-details">
                    <span className="display-name">{tweet.name}</span>
                    <span className="username">@{tweet.user}</span>
                    <span className="date">{formatDate(tweet.date)}</span>
                  </div>
                </div>
              </div>
              
              <div className="tweet-content">
                <p className="tweet-text">{tweet.text}</p>
                {tweet.hashtags && tweet.hashtags.length > 0 && (
                  <div className="hashtags">
                    {tweet.hashtags.map((tag, index) => (
                      <span key={index} className="hashtag">#{tag}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="tweet-engagement">
                <div className="engagement-item">
                  <span className="engagement-icon">{TwitterIcons.reply}</span>
                  <span className="engagement-count">{formatNumber(tweet.replies)}</span>
                </div>
                <div className="engagement-item">
                  <span className="engagement-icon">{TwitterIcons.repost}</span>
                  <span className="engagement-count">{formatNumber(tweet.reposts)}</span>
                </div>
                <div className="engagement-item">
                  <span className="engagement-icon">{TwitterIcons.like}</span>
                  <span className="engagement-count">{formatNumber(tweet.likes)}</span>
                </div>
                <div className="engagement-item">
                  <span className="engagement-icon">{TwitterIcons.view}</span>
                  <span className="engagement-count">{formatNumber(tweet.views)}</span>
                </div>
                <div className="engagement-item">
                  <span className="engagement-icon">{TwitterIcons.bookmark}</span>
                </div>
                <div className="engagement-item">
                  <span className="engagement-icon">{TwitterIcons.share}</span>
                </div>
                             </div>
             </div>
           ))}
           
           
         </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar">
        <div className="search-container">
          <div className="search-box">
            <span className="search-icon">{TwitterIcons.search}</span>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        
        <div className="trends-container">
          <h3>What's happening</h3>
          <div className="trend-item">
            <span className="trend-category">Trending</span>
            <span className="trend-tag">#TwitterClone</span>
            <span className="trend-count">{tweets.length} posts</span>
          </div>
        </div>
        
        <div className="who-to-follow">
          <h3>Who to follow</h3>
          <div className="follow-suggestion">
            <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="User" />
            <div className="suggestion-info">
              <span className="suggestion-name">Twitter Clone</span>
              <span className="suggestion-handle">@twitterclone</span>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
