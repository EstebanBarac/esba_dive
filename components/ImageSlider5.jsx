import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {
  const slides = [
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062111964601532476/IMG_8582.jpg?ex=66ab4d19&is=66a9fb99&hm=e8200745814e76c5cb0a65fb4e7d1b6d0a3b896edaed0e86f641d5d6a866b575&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062114410006577262/DSCI0696.JPG?ex=66ab4f60&is=66a9fde0&hm=cc179cbe588c23269b3e32058956083d0f5db9d381bb574402edf6942d6f2eb5&'
    }, 
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062115251329446061/IMG-8564.jpg?ex=66ab5029&is=66a9fea9&hm=97c90ea78b142527dedffa031452736fc50fa8b61f04c926c3ed4ba18c26ecaf&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062127769988890634/GOPR1890.JPG?ex=66ab5bd1&is=66aa0a51&hm=d4039ea3e40607b312a0fd667dd0c0ca4c2c310a9f193bc67441131e798e24f8&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062128323410538586/G0110824.JPG?ex=66ab5c55&is=66aa0ad5&hm=4b0910e425a5b69790f4978b5493cf7b15a7a4afe6d19315d44887cdd8e5b525&'
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