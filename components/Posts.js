import Post from './Post';

const posts = [
  {
    id: '1',
    username: 'modiji',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'This is Caption comment',
  },
  {
    id: '2',
    username: 'modiji',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'This is ',
  },
  {
    id: '3',
    username: 'modiji',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'This is Caption comment',
  },
];
const Posts = () => {
  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};
export default Posts;
