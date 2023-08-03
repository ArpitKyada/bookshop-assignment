import { Comment } from './types';

export const comments: Comment[] = [
  {
    id: 1,
    name: `안녕 나 응애`,
    content: `어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭 봐주세용~!`,
    isVerified: true,
    likes: 5,
    profileImage: `/images/person_1.png`,
    replies: [
      {
        id: 1,
        name: `ㅇㅅㅇ`,
        content: `오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다`,
        isVerified: false,
        likes: 5,
        profileImage: `/images/person_2.png`,
      },
    ],
  },
];
