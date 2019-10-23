import React, { Component } from 'react';
import PostData from '../data/posts.json'

class PostList extends Component {
    render() {
  return (
    <div className="PostList">
      <h1>Hello there</h1>
      {PostData.map((postDetail, index) => {
          return <h1>{postDetail.title}</h1>
      })}
    </div>
  );
 }
}
export default PostList;
