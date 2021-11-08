import axios from 'axios';
import { useEffect, useState } from 'react';
import PostList from '../components/PostList';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setLoading(false);
      setPosts(res.data);
    } catch (err) {
      console.log('Error : ', err);
      setError(err);
    }
  }, []);

  return (
    <div className='posts my-5'>
      <h1 className='main_heading mb-5'>Posts & Posts</h1>
      <PostList posts={posts} loading={loading} />
    </div>
  );
};

export default Posts;
