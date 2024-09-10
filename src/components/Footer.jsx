import React from 'react';

const Footer = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:krishnabhukya321@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Jaya,%0A%0A%20I%20would%20like%20to%20get%20in%20touch%20with%20you.%0A%0AName:%0AEmail:%0AContact:%0A%0AMessage:%0A%0ARegards,%0A[Your%20Name]';
  };

  return (
    <div className='border-t border-neutral-700 flex flex-col items-center justify-center min-h-screen mt-20 p-5'>
      <div className='flex flex-col items-center justify-center w-full max-w-4xl'>
        <button
          onClick={handleContactClick}
          className='p-4 bg-violet-600 text-white rounded-md hover:bg-violet-700'
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Footer;
