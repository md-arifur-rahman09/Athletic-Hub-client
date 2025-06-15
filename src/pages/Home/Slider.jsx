import React from 'react';

const Slider = () => {
    return (
     <div className="carousel w-full">
  {/* Slide 1 */}
  <div id="slide1" className="carousel-item relative w-full max-h-screen overflow-hidden">
    <img
      src="https://fas.org.sg/wp-content/uploads/2024/12/PD-2024-12-12T000825.840.png"
      className="w-full object-cover h-[80vh] md:h-[90vh] brightness-75"
      alt="Slide 1"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white z-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Welcome to Athletic Hub</h2>
      <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow">
        Discover, Join & Celebrate Local Sports Events Like Never Before!
      </p>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex justify-between items-center -translate-y-1/2 z-20">
      <a href="#slide4" className="btn btn-circle bg-white text-black hover:bg-indigo-200">❮</a>
      <a href="#slide2" className="btn btn-circle bg-white text-black hover:bg-indigo-200">❯</a>
    </div>
  </div>

  {/* Slide 2 */}
  <div id="slide2" className="carousel-item relative w-full max-h-screen overflow-hidden">
    <img
      src="https://dev.coachabilitygroup.com/uploads/shutterstock_2146234303_43cee71b15.jpg"
      className="w-full object-cover h-[80vh] md:h-[90vh] brightness-75"
      alt="Slide 2"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white z-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Train Like a Champion</h2>
      <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow">
        Find top-level athletic training events and sessions near you.
      </p>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex justify-between items-center -translate-y-1/2 z-20">
      <a href="#slide1" className="btn btn-circle bg-white text-black hover:bg-indigo-200">❮</a>
      <a href="#slide3" className="btn btn-circle bg-white text-black hover:bg-indigo-200">❯</a>
    </div>
  </div>

  {/* Slide 3 */}
  <div id="slide3" className="carousel-item relative w-full max-h-screen overflow-hidden">
    <img
      src="https://www.atptour.com/-/media/2024-images/news/2025/01/10/14/04/zverev-djokovic-2025-melbourne-exhibition.jpg"
      className="w-full object-cover h-[80vh] md:h-[90vh] brightness-75"
      alt="Slide 3"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white z-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Connect With Your Team</h2>
      <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow">
        Join group events, make teammates, and build stronger communities.
      </p>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex justify-between items-center -translate-y-1/2 z-20">
      <a href="#slide2" className="btn btn-circle bg-white text-black hover:bg-indigo-200">❮</a>
      <a href="#slide4" className="btn btn-circle bg-white text-black hover:bg-indigo-200">❯</a>
    </div>
  </div>

  {/* Slide 4 */}
  <div id="slide4" className="carousel-item relative w-full max-h-screen overflow-hidden">
    <img
      src="https://mrwallpaper.com/images/hd/running-at-camera-lionel-messi-canommefa4c927mm.jpg"
      className="w-full object-cover h-[80vh] md:h-[90vh] brightness-75"
      alt="Slide 4"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white z-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Experience the Thrill</h2>
      <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow">
        Book and participate in thrilling sports events with a click!
      </p>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex justify-between items-center -translate-y-1/2 z-20">
      <a href="#slide3" className="btn btn-circle bg-white text-black hover:bg-indigo-200">❮</a>
      <a href="#slide1" className="btn btn-circle bg-white text-black hover:bg-indigo-200">❯</a>
    </div>
  </div>
</div>

    );
};

export default Slider;