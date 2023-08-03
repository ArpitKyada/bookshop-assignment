import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

type Props = {
  images: string[];
};

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  pauseOnHover: false,
  easing: 'ease-in',
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2500,
  infinite: true,
  nextArrow: <></>,
  prevArrow: <></>,
};

const CoverSlider: FC<Props> = ({ images }) => {
  return (
    <div className="w-full bg-[#EDEEF3] relative">
      <Image
        className="w-full h-full object-cover absolute top-0 left-0 filter blur-md"
        src={images[0]}
        alt="cover pic"
        width={375}
        height={450}
      />
      <Slider {...settings}>
        {images?.map((item, index) => (
          <div key={index} className="relative z-0 h-96 w-full -mb-2">
            <Image className="w-full h-full object-contain" src={item} alt="cover pic" width={375} height={450} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CoverSlider;
