import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  FaceSmileIcon,
  HeartIcon,
  PaperAirplaneIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import Moment from 'react-moment';
const Post = ({ id, username, userImg, img, caption }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        snapshot => {
          setComments(snapshot.docs);
        }
      ),
    [id]
  );
  useEffect(() => {
    return onSnapshot(collection(db, 'posts', id, 'likes'), snapshot => {
      setLikes(snapshot.docs);
    });
  }, [id]);
  useEffect(() => {
    // predicate means condition
    return setHasLiked(
      likes.findIndex(like => like.id === session?.user?.uid) !== -1
    );
  }, [likes, session]);
  const likePostHandler = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      });
    }
  };
  const sendCommentHandler = async e => {
    e.preventDefault();
    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5 ">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="rounded-full h-12 w-12 object-contain border-gray-200 border p-1 mr-3"
          src={userImg}
          alt="user image"
        />
        <p className="flex-1 font-bold">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>

      <img src={img} className="w-full object-cover" alt="contentImage" />

      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex gap-4">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePostHandler}
                className="btn text-red-500"
              />
            ) : (
              <HeartIcon onClick={likePostHandler} className="btn" />
            )}
            <ChatBubbleLeftEllipsisIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      <p className="p-5 ">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}

        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map(comment => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                className="h-7 rounded-full"
                src={comment.data().userImage}
                alt=""
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username} </span>
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="btn text-amber-600" />
          <input
            type="text"
            className="border-none flex-1 focus:ring-0 outline-0"
            placeholder="Add a comment..."
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendCommentHandler}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};
export default Post;
