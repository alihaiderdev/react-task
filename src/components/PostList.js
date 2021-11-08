import { Row } from 'react-bootstrap';
import PostItem from './PostItem';
import { Spin } from 'antd';

const PostList = ({ posts, loading }) => {
  return (
    <Row className='postList'>
      {loading && <Spin />}
      {posts &&
        posts.length > 0 &&
        posts.map((post) => {
          return <PostItem post={post} />;
        })}
    </Row>
  );
};

export default PostList;
