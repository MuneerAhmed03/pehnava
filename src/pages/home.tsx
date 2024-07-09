/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UOHekLOQAZ7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
export default function Component() {
  // Step 1: Define the countdown timer state
  const [countdown, setCountdown] = useState('');

  // Helper function to add leading zero
  const padTime = (time :any) => (time < 10 ? `0${time}` : time);
  const targetTime = new Date().getTime() + (36 * 60 * 60 * 1000);

  // Step 2: Adjust the calculateTimeLeft function
  const calculateTimeLeft = () => {
    // Calculate target time: 1 day and 12 hours from now
    const now = new Date();
 // 1 day (24 hours) + 12 hours in milliseconds

    const difference :number = targetTime - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return `${padTime(days)} Day : ${padTime(hours)} H : ${padTime(minutes)} M : ${padTime(seconds)} S`;


  };

  // Step 3: Use useEffect to update the timer
  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      console.log(newTimeLeft); // Debug: Log the new time left
      setCountdown(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
    return (
      <div className="w-full">
        <header className="flex items-center justify-between p-4 border-b shadow-lg">
          <div className="flex items-center space-x-4">
            <img src={`https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png?20210915004801`} alt="Logo" className="h-10" />
            <nav className="flex space-x-4">
              <a href="#" className="text-sm font-medium">
                MEN
              </a>
              <a href="#" className="text-sm font-medium">
                WOMEN
              </a>
              <a href="#" className="text-sm font-medium">
                KIDS
              </a>
              <a href="#" className="text-sm font-medium">
                HOME & LIVING
              </a>
              <a href="#" className="text-sm font-medium">
                BEAUTY
              </a>
              <a href="#" className="text-sm font-medium text-red-500">
                PEHNAVA
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="search"
              placeholder="Search for products, brands and more"
              className="px-4 py-2 border rounded-md"
            />
            <div className="flex items-center space-x-2">
              <a href="#" className="text-sm font-medium">
                Profile
              </a>
              <a href="#" className="text-sm font-medium">
                Wishlist
              </a>
              <a href="#" className="text-sm font-medium">
                Bag
              </a>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
        <div className="bg-gray-100 p-4 text-center ">
          <span className="text-sm font-medium">Offer Ends In</span>
          <span className="text-red-500 font-bold ml-2">{countdown}</span>
        </div>
        <div className=" w-full h-full flex flex-row items-stretch justify-between text-white">
            <div className="bg-orange-500 p-4 text-4xl text-center font-bold w-2/3">FLAT ₹300 OFF</div>
            <div className="bg-black p-4 text-2xl w-1/3">
              On Your 1<sup>st</sup> Purchase Via <span className="text-pink-500">Myntra</span> App!
            </div>
          </div>
          <Carousel className="mt-4">
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
              <img
                src={`https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/4/a8e5ca18-ead2-40bb-9f82-c14bbdfc6e831720089009539-DESKTOP-HP-BANNER_HP_1.jpg`}
                alt="Featured Collection"
                width={1600}
                height={900}
                className="object-cover w-full h-full"
              />
             </div>
             </CarouselItem>
             </CarouselContent>
             </Carousel> 
      </div>
      </div>
    )
  }