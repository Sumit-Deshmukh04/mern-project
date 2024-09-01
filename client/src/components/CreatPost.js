import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  const handleCreatePost = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/posts',
        { title, content },
        {
          headers: {
            Authorization: Bearer ${token},
          },
        }
      );
      history.push('/');
    } catch (err) {
      console.error('Create post failed', err);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
}

export default CreatePost;