import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

const PostItem = ({ post }) => {
  return (
    <Col className='postItem' key={post.id} xs={12} sm={12} md={6} lg={4} xl={4} xxl={3}>
      <Link to={`/posts/${post.id}`}>
        <Card
          hoverable
          cover={
            <img
              alt='example'
              className='card_image'
              src={`https://picsum.photos/id/${post.id === 97 ? 101 : post.id === 86 ? 102 : post.id}/300/300`}
            />
          }
        >
          <Meta title={post.title} description={post.body} />
        </Card>
      </Link>
    </Col>
  );
};

export default PostItem;
