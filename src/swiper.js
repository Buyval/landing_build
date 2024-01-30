import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import React from 'react';

const ImageSlider = () => {
  const items = [
    { id: 1, url: '/L-page_assets/grp_84.png' },
    { id: 2, url: '/L-page_assets/grp_85.png' },
    { id: 3, url: '/L-page_assets/group_83.png' },
  ];

  const responsive = {
    0: { items: 1 },
    480: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  return (
    <AliceCarousel
      items={items.map(item => (
        <img key={item.id} src={item.url} alt={`Slide ${item.id}`} />
      ))}
      responsive={responsive}
      autoPlay
      autoPlayInterval={3000}
    />
  );
};

export default ImageSlider;
