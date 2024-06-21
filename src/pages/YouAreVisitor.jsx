// eslint-disable-next-line no-unused-vars
import React from 'react'
import Image1 from '../assets/images/full_width_image4.png'
import Image2 from '../assets/images/youare10.png'
import Image5 from '../assets/images/youare8.png'
import Image4 from '../assets/images/youare9.png'
import Image6 from '../assets/images/youare4.png'
import Footer from '../components/Fotter'
import Header from '../components/Header';
import HeroSection2 from '../components/HeroSection2'

export default function YouAreVisitor() {
  return (
    <>
    <Header />
    <div>
    <HeroSection2 
            Image={Image1}
            Titre={<>Visitor</>}
        />
      <div className="grid grid-cols-2 gap-x-10 gap-y-10 mt-4 max-w-screen-lg w-full">
        <div className="flex flex-col items-center gap-4">
          <img src={Image2} alt="Image 2" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Admission</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={Image5} alt="Image 5" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Life at Esi</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={Image4} alt="Image 4" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">About ESI</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={Image6} alt="Image 5" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Events</h3>
        </div>
      </div>
    </div>
    <Footer classname= "mt-12"/>
    </>
  );
}
