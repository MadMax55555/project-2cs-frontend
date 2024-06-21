// eslint-disable-next-line no-unused-vars
import React from 'react'
import Image1 from '../assets/images/full_width_image1.png'
import Image2 from '../assets/images/youare1.png'
import Image3 from '../assets/images/youare2.png'
import Image4 from '../assets/images/youare3.png'
import Image5 from '../assets/images/youare4.png'
import Image6 from '../assets/images/youare5.png'
import Image7 from '../assets/images/youare6.png'
import Footer from '../components/Fotter'
import Header from '../components/Header';
import HeroSection2 from '../components/HeroSection2'

export default function YouAreStudent() {
  return (
    <>
    <Header />
    <div className="gap-24 flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: '#F6FAFF' }}>
      <HeroSection2 
            Image={Image1}
            Titre={<>Student</>}
        />
      <div className="grid grid-cols-2 gap-x-10 gap-y-10 mt-4 max-w-screen-lg w-full">
        <div className="flex flex-col items-center gap-4">
          <img src={Image2} alt="Image 2" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Engineer's curriculum</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={Image3} alt="Image 3" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Post-graduation</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={Image6} alt="Image 6" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Library</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={Image7} alt="Image 7" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Articles</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={Image4} alt="Image 4" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">News</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={Image5} alt="Image 5" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Events</h3>
        </div>
      </div>
    </div>
    <Footer classname= "mt-12"/>
    </>
  );
}
