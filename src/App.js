import React from 'react';
import { BrowserRouter as Router, Route, S } from 'react-router-dom';
import Post from './pages/Post';
import Posts from './pages/Posts';

const App = () => {
  return (
    <Router>
      <Route path='/' element={<Posts />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/posts/:postId' element={<Post />} />
      <Route />
    </Router>
  );
};

export default App;
