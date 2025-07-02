import React from 'react';

const Slider = () => {
  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
        <img
          src="https://i.postimg.cc/gJvF3H1Z/ath1.jpg"
          className="w-full h-full object-cover object-center brightness-75"
          alt="Slide 1"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white z-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">Welcome to Athletic Hub</h2>
          <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-sm">
            Discover, Join & Celebrate Local Sports Events Like Never Before!
          </p>
        </div>
        <div className="absolute top-1/2 left-0 right-0 px-6 flex justify-between items-center -translate-y-1/2 z-30">
          <a href="#slide4" className="btn btn-circle bg-base-100 text-base-content shadow hover:bg-primary hover:text-white">❮</a>
          <a href="#slide2" className="btn btn-circle bg-base-100 text-base-content shadow hover:bg-primary hover:text-white">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
        <img
          src="https://i.postimg.cc/WbpLJr8d/ath2.jpg"
          className="w-full h-full object-cover object-center brightness-75"
          alt="Slide 2"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white z-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">Train Like a Champion</h2>
          <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-sm">
            Find top-level athletic training events and sessions near you.
          </p>
        </div>
        <div className="absolute top-1/2 left-0 right-0 px-6 flex justify-between items-center -translate-y-1/2 z-30">
          <a href="#slide1" className="btn btn-circle bg-base-100 text-base-content shadow hover:bg-primary hover:text-white">❮</a>
          <a href="#slide3" className="btn btn-circle bg-base-100 text-base-content shadow hover:bg-primary hover:text-white">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
        <img
          src="https://i.postimg.cc/NFpnxJD5/ath3.png"
          className="w-full h-full object-cover object-center brightness-75"
          alt="Slide 3"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white z-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">Connect With Your Team</h2>
          <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-sm">
            Join group events, make teammates, and build stronger communities.
          </p>
        </div>
        <div className="absolute top-1/2 left-0 right-0 px-6 flex justify-between items-center -translate-y-1/2 z-30">
          <a href="#slide2" className="btn btn-circle bg-base-100 text-base-content shadow hover:bg-primary hover:text-white">❮</a>
          <a href="#slide4" className="btn btn-circle bg-base-100 text-base-content shadow hover:bg-primary hover:text-white">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
        <img
          src="https://i.postimg.cc/02yFNv5m/ath4.jpg"
          className="w-full h-full object-cover object-center brightness-75"
          alt="Slide 4"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white z-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">Experience the Thrill</h2>
          <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-sm">
            Book and participate in thrilling sports events with a click!
          </p>
        </div>
        <div className="absolute top-1/2 left-0 right-0 px-6 flex justify-between items-center -translate-y-1/2 z-30">
          <a href="#slide3" className="btn btn-circle bg-base-100 text-base-content shadow hover:bg-primary hover:text-white">❮</a>
          <a href="#slide1" className="btn btn-circle bg-base-100 text-base-content shadow hover:bg-primary hover:text-white">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
