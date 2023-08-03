import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Footer from '@/components/footer';
import Loader from '@/components/loader';
import NoData from '@/components/noData';
import CommentInput from '@/features/bookDetails/commentInput';
import Comments from '@/features/bookDetails/comments';
import CoverSlider from '@/features/bookDetails/coverSlider';
import Header from '@/features/bookDetails/header';
import { BookDetails } from '@/features/bookDetails/types';

interface Props {
  bookDetails: BookDetails | null;
}

const BookDetails: NextPage<Props> = ({ bookDetails }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  if (!bookDetails) return <NoData />;

  const { description, discountRate, images, price, title } = bookDetails;

  return (
    <div className="flex flex-col min-h-screen">
      <Header title={title ?? 'Book Title'} />

      <main className="flex-1 relative">
        <div className="max-w-5xl w-full mx-auto">
          <CoverSlider images={images ?? []} />

          <div className="p-4">
            <p className="text-black font-semibold text-lg">{title ?? 'Book Title'}</p>
            <p className="mt-2 font-light text-sm">{description ?? ''}</p>

            <div className="mt-3 flex items-center justify-between gap-4">
              <p className="text-[#FF003E] font-bold text-base">{!!discountRate ? `${discountRate}%` : ''}</p>
              <p className="text-dark">
                <span className="text-[#080A0C] text-lg font-bold">{price ?? 0}</span>
                <span className="inline-block ml-1">{`원`}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-t-[#F7F8FA]">
          <Comments />
        </div>

        <div className="w-full border-t border-t-[#F7F8FA]">
          <CommentInput />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{ bookDetails: BookDetails }> = async ({ params }) => {
  // use params.id to fetch book details from API

  const bookDetails: BookDetails = {
    id: '1',
    title: '헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 국회는 선전포고. 국가는 과학기술',
    images: ['/images/book_1.jpg', '/images/book_2.jpg'],
    description: `헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 국회는 선전포고. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다. 정당한 보상을 지급하여야 한다.
    재의의 요구가 있을 때에는 국회는 재의에 붙이고. 국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 학교교육 및 평생교육을 포함한 교육제도와 그 운영. 탄핵결정은 공직으로부터 파면함에 그친다.
    국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다. 군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 모든 권력은 국민으로부터 나온다. 모든 국민은 근로의 권리를 가진다.
    한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다. 국회는 정부의 동의없이 정부가 제출한 지출예산 각항의 금액을 증가하거나 새 비목을 설치할 수 없다. 국회는 의장 1인과 부의장 2인을 선출한다, 사형을 선고한 경우에는 그러하지 아니하다.헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 국회는 선전포고. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다. 정당한 보상을 지급하여야 한다.
    재의의 요구가 있을 때에는 국회는 재의에 붙이고. 국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 학교교육 및 평생교육을 포함한 교육제도와 그 운영. 탄핵결정은 공직으로부터 파면함에 그친다.
    국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다. 군인 또는.`,
    discountRate: 10,
    price: 57600,
  };

  return { props: { bookDetails } };
};

export default BookDetails;
