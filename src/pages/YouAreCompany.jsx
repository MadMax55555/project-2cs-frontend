// eslint-disable-next-line no-unused-vars
import React from 'react'
import Image1 from '../assets/images/full_width_image2.png'
import Image2 from '../assets/images/youare11.png'
import Image3 from '../assets/images/youare12.png'
import Image4 from '../assets/images/youare13.png'
import Image5 from '../assets/images/youare14.png'
import Image6 from '../assets/images/youare15.png'
import Footer from '../components/Fotter'

export default function YouAreCompany() {
  return (
    <>
    <div className="gap-24 flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: '#F6FAFF' }}>
      <img src={Image1} alt="Full Width Image" className="w-screen h-screen object-cover" />

      <div className="grid grid-cols-2 gap-x-10 gap-y-10 mt-4 max-w-screen-lg w-full">
        <div className="flex flex-col items-center gap-4">
          <img src={Image2} alt="Image 2" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Partnereship</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={Image3} alt="Image 3" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">International partnership</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={Image4} alt="Image 4" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">National partnership</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={Image5} alt="Image 5" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Training</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={Image6} alt="Image 6" className="w-full h-72 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Training themes</h3>
        </div>
      </div>
    </div>
    <Footer classname= "mt-12"/>
    </>
  );
}
