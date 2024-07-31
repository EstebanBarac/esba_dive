import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {
  const slides = [
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1053383003889479680/DSCI0289.JPG?ex=66ab2f9f&is=66a9de1f&hm=dd89346c1f97bc279f6620448d1f7f709c55f956b8cccb870690f73421b34dc2&'
    },  
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1053383281401413672/DSCI0304.JPG?ex=66ab2fe1&is=66a9de61&hm=7c1dd52e1f1379c5e6fc27abbf72c3a2b8e6ccc6966fecd4ccf7a62315811220&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062071682455576616/DSCI0246.JPG?ex=66ab2795&is=66a9d615&hm=ee19b7e146cd5ecd4f575858b83f6e360527ee2383d903a6cce42a55f763a281&'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062050227214876692/DSCI0408.JPG?ex=66ab139a&is=66a9c21a&hm=91fdb4a2ff626d64d10e55084bd0e10a643eca85107b9e8ae2c346bc08f782df&' 
    }, 
    {
      url: 'https://cdn.discordapp.com/attachments/1053382547800862802/1062074511870144552/DSCI0177.JPG?ex=66ab2a38&is=66a9d8b8&hm=b0ed6648ad644f27cf648f3c32a56224a7ce04a810157e99c40e7b62eaff6346&'
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