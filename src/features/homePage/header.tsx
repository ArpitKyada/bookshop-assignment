import userInformationAtom from '@/recoil/atoms/userInformationAtom';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';

function Header() {
  const { profileImage } = useRecoilValue(userInformationAtom);

  return (
    <>
      <header className="z-10 fixed top-0 left-0 w-full transition-all duration-200 border-b bg-white border-b-gray-200">
        <div className="max-w-5xl w-full h-12 md:h-16 mx-auto grid grid-cols-5 px-4">
          <div />

          <div className="col-span-3 flex items-center justify-center">
            <h1 className="text-dark text-lg md:text-2xl text-center font-bold transition-all duration-200">Books</h1>
          </div>

          <div className="flex items-center justify-end">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full overflow-hidden transition-all duration-200">
              <Image
                src={profileImage ?? '/images/avatar.jpg'}
                alt="profile"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="h-12 md:h-16 relative w-full" />
    </>
  );
}

export default Header;
