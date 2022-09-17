import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  FaceSmileIcon,
  HeartIcon,
  PaperAirplaneIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
const Post = ({ id, username, userImg, img, caption }) => {
  const { data: session } = useSession();
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
            <HeartIcon className="btn" />
            <ChatBubbleLeftEllipsisIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      <p className="p-5 ">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* comments */}
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="btn text-amber-600" />
          <input
            type="text"
            className="border-none flex-1 focus:ring-0 outline-0"
            placeholder="Add a comment..."
          />
          <button className="font-semibold text-blue-400">Post</button>
        </form>
      )}
    </div>
  );
};
export default Post;
