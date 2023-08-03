import { FC } from 'react';
import { comments } from './data';
import CommentItem from './commentItem';
import CommentReplies from './replies';

const Comments: FC = () => {
  return (
    <div className="max-w-5xl w-full mx-auto px-4 py-6">
      {comments.map(({ id, content, isVerified, likes, name, replies, profileImage }) => (
        <CommentItem
          key={id}
          isReply={false}
          content={content}
          name={name}
          profileImage={profileImage}
          isVerified={isVerified}
          likes={likes}
          replies={replies}
          commentReplies={<CommentReplies replies={replies} />}
        />
      ))}
    </div>
  );
};

export default Comments;
