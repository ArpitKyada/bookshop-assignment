export type BookDetails = {
  id: string;
  title: string;
  description: string;
  images: string[];
  discountRate: number;
  price: number;
};

export interface Replies {
  id: number;
  content: string;
  name: string;
  isVerified: boolean;
  likes: number;
  profileImage: string;
}

export interface Comment extends Replies {
  replies: Replies[];
}
