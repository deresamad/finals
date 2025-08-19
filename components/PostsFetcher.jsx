import React, { useState, useEffect } from 'react';

const PostsFetcher = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch posts: ' + err.message);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="posts-fetcher">
      <h2>Posts from API</h2>
      
      <button onClick={fetchPosts} disabled={loading}>
        {loading ? 'Refreshing...' : 'Refresh Posts'}
      </button>
      
      {/* Error state */}
      {error && <div className="error-message">{error}</div>}
      
      {/* Loading state */}
      {loading && <div className="loading">Loading posts...</div>}
      
      {/* Data display */}
      {!loading && !error && (
        <div className="posts-list">
          {posts.length === 0 ? (
            <p>No posts available.</p>
          ) : (
            <ul>
              {posts.map(post => (
                <li key={post.id} className="post-item">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default PostsFetcher;