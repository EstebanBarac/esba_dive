import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {
  const slides = [
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062080430335086682/PICT0019.jpg?ex=66ab2fbb&is=66a9de3b&hm=02849078380fb6b2a8794fc59924fd380218bed4fc81136bb4b2c523efddbfa2&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062079821913530438/PICT0075.jpg?ex=66ab2f2a&is=66a9ddaa&hm=b0a0d27bf04743668d4d599b87e2eac5da3e1902d2eeea66861b71f51ce7e885&'
    }, 
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062081720494592010/PICT0110.jpg?ex=66ab30ee&is=66a9df6e&hm=be6805a0fff675d832fccf667e42a379be913f1f2c79057642807349087a8dd5&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062082375900733590/PICT0115.jpg?ex=66ab318a&is=66a9e00a&hm=019630ddc5676a217cb26efe5a130003d7f071f470466597415b2b7dfc8ffb7e&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062082806936780830/PICT0101.jpg?ex=66ab31f1&is=66a9e071&hm=514e09a30832f864d41caa7b3450bd3d9ee9da72c218bc340543a4efcf847caa&'
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