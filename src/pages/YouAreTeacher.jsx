// eslint-disable-next-line no-unused-vars
import React from 'react'
import Image1 from '../assets/images/full_width_image3.png'
import Image2 from '../assets/images/youare7.png'
import Image6 from '../assets/images/youare5.png'
import Image7 from '../assets/images/youare6.png'
import Footer from '../components/Fotter'
import Header from '../components/Header';
import HeroSection2 from '../components/HeroSection2'

export default function YouAreTeacher() {
  return (
    <>
    <Header />
    
      <HeroSection2 
            Image={Image1}
            Titre={<>Teacher</>}
        />
        <div className="gap-24 flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: '#F6FAFF' }}>
      <div className="grid grid-cols-2 gap-x-10 gap-y-10 mt-4 max-w-screen-lg w-full">
        <div className="flex flex-col items-center gap-4">
          <img src={Image2} alt="Image 2" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Research</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={Image6} alt="Image 6" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Library</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={Image7} alt="Image 7" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Articles</h3>
        </div>
      </div>
    </div>
    <Footer classname= "mt-12"/>
    </>
  );
}
