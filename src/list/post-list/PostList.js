import { useContext } from 'react';
import { PostProvider } from '../../provider/PostProvider';
import PostListItem from './PostListItem';

function PostList() {
  const { post } = useContext(PostProvider);
  return (
    <div className="container mt-4">
      {post.map((posts) => {
        return <PostListItem posts={posts} key={posts.id} />;
      })}
    </div>
  );
}

export default PostList;
