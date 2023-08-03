import { useRouter } from 'next/router';
import { FC } from 'react';

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => {
  const router = useRouter();
  return (
    <>
      <header className="z-10 fixed top-0 left-0 w-full transition-all duration-200 bg-white border-b border-b-gray-200">
        <div className="max-w-5xl w-full h-12 md:h-16 mx-auto grid grid-cols-5 px-4">
          <div>
            <button onClick={() => router.back()} className="h-full flex items-center justify-center">
              <svg
                className="w-2.5 md:w-3 object-contain transition-all duration-200"
                viewBox="0 0 11 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.94775 17.1055L1.89561 9.05332L9.94776 1.00117"
                  stroke="#313B49"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="col-span-3 flex items-center justify-center">
            <h1 className="text-dark text-lg md:text-2xl text-center font-bold transition-all duration-200 whitespace-nowrap overflow-hidden text-ellipsis">
              {title ?? 'Book Title'}
            </h1>
          </div>

          <div />
        </div>
      </header>
      <div className="h-12 md:h-16 relative w-full" />
    </>
  );
};

export default Header;
