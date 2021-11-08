import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState();
  useEffect(async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      setPost(res.data);
    } catch (error) {
      console.log('Error : ', error);
    }
  }, []);

  let imageUrl = '';
  if (postId === 97) imageUrl = `https://picsum.photos/id/${101}/800/300`;
  else if (postId === 86) imageUrl = `https://picsum.photos/id/${102}/800/300`;
  else imageUrl = `https://picsum.photos/id/${postId}/800/300`;
  return (
    <>
      {post && (
        <div className='post my-5'>
          <Link to='/' className='goto_home_button'>
            Home
          </Link>
          <div className='main_heading'>
            <img className='single_page_cover_image my-5' src={`${imageUrl}`} alt={post.title} />
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <p className='my-5'>{post.body}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
