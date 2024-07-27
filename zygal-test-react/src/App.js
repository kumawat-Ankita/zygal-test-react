import React, { useState, useEffect } from 'react';
import './index.css';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const slides = [
    'https://via.placeholder.com/600x200/FF0000/FFFFFF?text=Slide+1',
    'https://via.placeholder.com/600x200/00FF00/FFFFFF?text=Slide+2',
    'https://via.placeholder.com/600x200/0000FF/FFFFFF?text=Slide+3',
  ];
  const avatars = Array.from({ length: 10 }, (_, i) => i + 1);
  const images = Array.from({ length: 10 }, (_, i) => i + 1);

  useEffect(() => {
    validateEmail();
    validatePassword();
  }, [email, password]);

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailPattern.test(email) ? '' : 'Invalid email address');
  };

  const validatePassword = () => {
    setPasswordError(
      password.length >= 6
        ? ''
        : 'Password must be at least 6 characters long'
    );
  };

  return (
    <div className="card-container grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Carousel Section */}
      <div className="card w-80 bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
        <div className="carousel relative w-full">
          <div className="overflow-hidden relative" style={{ height: '300px' }}>
            <div
              className="carousel-slide absolute w-full flex"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img src={slide} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="dots flex justify-center mt-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`dot w-3 h-3 bg-gray-400 rounded-full mx-1 cursor-pointer ${index === currentSlide ? 'bg-gray-800' : ''
                  }`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Button</button>
      </div>

      {/* Form Section */}
      <div className="card w-80 bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
        <div className="user-logo w-24 h-24 rounded-full mb-4"></div>
        <div className="form w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 border rounded ${emailError ? 'border-red-500' : (email ? 'border-green-500' : '')}`}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 border rounded ${passwordError ? 'border-red-500' : (password ? 'border-green-500' : '')}`}
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>
        </div>
      </div>

      {/* Avatar and Images Section */}
      <div className="card w-80 bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
        <div className="avatar-section w-full">
          <div className="flex overflow-x-auto hidden-scrollbar pb-4">
            {avatars.map((avatar) => (
              <div key={avatar} className="avatar w-24 h-24 bg-gray-300 rounded-full mr-2"></div>
            ))}
          </div>
          <div className="images-section h-72 overflow-y-auto hidden-scrollbar mt-4">
            {images.map((image) => (
              <div key={image} className="image h-36 bg-gray-300 mb-2"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
