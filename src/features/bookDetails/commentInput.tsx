import { FC, FormEvent, useState } from 'react';

const CommentInput: FC = () => {
  const [comment, setComment] = useState<string>('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Commented: ${comment}`);
    setComment('');
  };

  return (
    <form onSubmit={onSubmit} className="px-4 py-3 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <button type="button">
          <svg className="w-6 object-contain" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.47754 23.1836C2.51156 23.1836 1.69047 22.8455 1.01428 22.1693C0.338094 21.4931 0 20.672 0 19.7061V3.47754C0 2.51156 0.338094 1.69047 1.01428 1.01428C1.69047 0.338094 2.51156 0 3.47754 0H19.7061C20.672 0 21.4931 0.338094 22.1693 1.01428C22.8455 1.69047 23.1836 2.51156 23.1836 3.47754V19.7061C23.1836 20.672 22.8455 21.4931 22.1693 22.1693C21.4931 22.8455 20.672 23.1836 19.7061 23.1836H3.47754ZM3.47754 20.8652H19.7061C20.0345 20.8652 20.3096 20.754 20.5314 20.5314C20.754 20.3096 20.8652 20.0345 20.8652 19.7061V3.47754C20.8652 3.14911 20.754 2.87361 20.5314 2.65104C20.3096 2.42925 20.0345 2.31836 19.7061 2.31836H3.47754C3.14911 2.31836 2.87361 2.42925 2.65104 2.65104C2.42925 2.87361 2.31836 3.14911 2.31836 3.47754V19.7061C2.31836 20.0345 2.42925 20.3096 2.65104 20.5314C2.87361 20.754 3.14911 20.8652 3.47754 20.8652ZM4.63672 18.5469L9.27344 13.9102L11.36 15.9677L13.9102 12.751L18.5469 18.5469H4.63672ZM6.95508 9.27344C6.31753 9.27344 5.77194 9.04624 5.31832 8.59184C4.86392 8.13822 4.63672 7.59263 4.63672 6.95508C4.63672 6.31753 4.86392 5.77194 5.31832 5.31832C5.77194 4.86392 6.31753 4.63672 6.95508 4.63672C7.59263 4.63672 8.1386 4.86392 8.593 5.31832C9.04663 5.77194 9.27344 6.31753 9.27344 6.95508C9.27344 7.59263 9.04663 8.13822 8.593 8.59184C8.1386 9.04624 7.59263 9.27344 6.95508 9.27344Z"
              fill="#919EB6"
            />
          </svg>
        </button>

        <input
          type="text"
          placeholder={`댓글을 남겨주세요.`}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 placeholder:text-[#AFB9CA] text-dark outline-none text-sm"
        />

        <button type="submit" className="text-[#919EB6] text-sm">{`등록`}</button>
      </div>
    </form>
  );
};

export default CommentInput;
