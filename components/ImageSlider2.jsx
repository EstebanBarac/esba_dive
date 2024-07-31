import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {
  const slides = [
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062051740763045898/DSCI0211.JPG?ex=66ab1502&is=66a9c382&hm=3418f9bc0415096165f4e3817a659a5a6c724b4563e750b014b974bcf7316af5&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062096853472129115/DSCN2435.JPG?ex=66ab3f06&is=66a9ed86&hm=2c4b84984ad90130f796dd47dd24e2318cf8ada64b9d57e0d8024854c75aefd7&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062096851135909978/DSCN3351.JPG?ex=66ab3f06&is=66a9ed86&hm=0109a64becf2cbe9a7d08b786ec94bcc9f3b74140f5a66f100e5f04f3b624568&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062096851731497092/DSCN3100.JPG?ex=66ab3f06&is=66a9ed86&hm=1de02a6e6618e9befa82b0dfcbbc598ea025ac23de9d7faf84e1e5f4641c4f92&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062096852926873600/DSCN2624.JPG?ex=66ab3f06&is=66a9ed86&hm=20d95a49ae5ccf45dc7d351d3b70015469df33e298b7561937ac5077bf31c969&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062096850548703374/DSCN3404.JPG?ex=66ab3f05&is=66a9ed85&hm=12f181063fb67f706e97f3e8de1bc8b7b1b5ac1ab64d329436862d068dba4161&'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            className='text-2xl cursor-pointer'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;