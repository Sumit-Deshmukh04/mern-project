import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:5000/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>By {post.author.username}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;