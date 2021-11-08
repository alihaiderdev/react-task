import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Post from './pages/Post';
import Posts from './pages/Posts';

const App = () => {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:postId' element={<Post />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
