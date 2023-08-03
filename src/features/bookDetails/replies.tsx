import { FC } from 'react';
import CommentItem from './commentItem';
import { Replies } from './types';

type Props = {
  replies: Replies[];
};

const CommentReplies: FC<Props> = ({ replies }) => {
  return (
    <div>
      {replies.map(({ content, name, profileImage, isVerified, likes, id }, index) => (
        <CommentItem
          content={content}
          name={name}
          profileImage={profileImage}
          isVerified={isVerified}
          likes={likes}
          isReply={true}
          key={`${id}-${index}`}
        />
      ))}
    </div>
  );
};

export default CommentReplies;
