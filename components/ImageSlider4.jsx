import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {
  const slides = [
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062102112567308409/DSCN1286.JPG?ex=66ab43ec&is=66a9f26c&hm=7d4cf795e605c7165df79f878eb5f85b33133f6ab437559f387cd6169b9137d0&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062102110981857430/DSCN0457.JPG?ex=66ab43ec&is=66a9f26c&hm=952e0fc56a5cb90da8526641d15dfe6753b356450e169a6143d4ab61ae8df096&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062102112051404800/DSCN1380.JPG?ex=66ab43ec&is=66a9f26c&hm=b303e5853194704b0500d6232574bef5ed5d64108838d940fd24db67951509c5&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062102113129341008/DSCN0533.JPG?ex=66ab43ec&is=66a9f26c&hm=80842ce2fce81405e346d49f776fac2cd423fa3862f12275849b280824db8161&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062102111535509574/DSCN1470.JPG?ex=66ab43ec&is=66a9f26c&hm=2136abb21c58f943ee9f69af4c21b5de7efe7b75fdf037fc4e5d761090465b70&'
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