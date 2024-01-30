import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;

    return (
      <div key={index} className='accord'>
        <div
          className={`accordion-title ${isActive ? 'active' : ''}`}
          onClick={() => onTitleClick(index)}
        >
          {item.title}
          <span>{isActive ? '-' : '+'}</span>
        </div>
        {isActive && <div className="accordion-content">{item.content}</div>}
      </div>
    );
  });

  return <div className="accordion">{renderedItems}</div>;
};

// Example usage
const Appp = () => {
  const accordionItems = [
    {
      title: 'What is Buyval?',
      content: 'Buyval is an online marketplace that offers a wide range of products for purchase through our mobile application.',
    },
    {
      title: 'How do I download the Buyval App?',
      content: 'You can download the Buyval App from the App Store (for iOS devices) or Google Play Store (for Android devices). Visit the respective store on your device, search for "Buyval," and follow the installation instructions.',
    },
    {
      title: 'How do I create a Buyval account?',
      content: 'To create a Buyval account, open the app, and click on the "Sign Up" or "Create Account" option. Follow the prompts to provide necessary information and set up your account.',
    },
  ];

  return (
    <div className='accordion_wrapper'>
      <h1>Frequently Asked Questions</h1>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default Appp;
