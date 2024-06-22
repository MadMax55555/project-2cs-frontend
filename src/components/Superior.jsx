import React from 'react';
import Slider from './Slider';
import sitImage from '../assets/images/SIT.png';
import silImage from '../assets/images/SIL.png';
import siqImage from '../assets/images/SIQ.png';
import sidImage from '../assets/images/AIproject.png';
import { BiChevronRight } from "react-icons/bi";


    const slides1 = [
        {
         content: (
             
           <div className=" flex w-[90%] items-center justify-center pl-40">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-[80%] my-8 justify-center items-center">
            <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
              <img src={sitImage} alt="Information System & Technologie (SIT)" className="w-48 h-32 object-cover mb-6" />
              <p className="text-center font-bold">Calculus 1</p>
            </div>
            <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
              <img src={silImage} alt="Software Engineering (SIL)" className="w-48 h-32 object-cover mb-6" />
              <p className="text-center font-bold">Algebra 1</p>
            </div>
            <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
              <img src={siqImage} alt="System Informatique (SIQ)" className="w-48 h-32 object-cover mb-6" />
              <p className="text-center font-bold">Word Processing and Web</p>
            </div>
            <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
              <img src={sidImage} alt="Intelligent System & Data (SID)" className="w-48 h-32 object-cover mb-6" />
              <p className="text-center font-bold">Computer architecture</p>
            </div>
            </div>
            </div>
     ),
  },
  {
    content: (
        <div className=" flex w-[90%] items-center justify-center pl-40">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-[80%] my-8 justify-center items-center">
            <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
              <img src={sitImage} alt="Information System & Technologie (SIT)" className="w-48 h-32 object-cover mb-6" />
              <p className="text-center font-bold">Written Production Techniques</p>
            </div>
            <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
              <img src={silImage} alt="Software Engineering (SIL)" className="w-48 h-32 object-cover mb-6" />
              <p className="text-center font-bold">Algorithmic and Static Data Structure</p>
            </div>
            <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
              <img src={siqImage} alt="System Informatique (SIQ)" className="w-48 h-32 object-cover mb-6" />
              <p className="text-center font-bold">Electricity</p>
            </div>
            <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
              <img src={sidImage} alt="Intelligent System & Data (SID)" className="w-48 h-32 object-cover mb-6" />
              <p className="text-center font-bold">Introduction to Operating Systems 1</p>
            </div>
            </div>
            </div>
     ),
    },
  ];
  const slides2 = [
    {
     content: (
         
       <div className=" flex w-[90%] items-center justify-center pl-40">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-[80%] my-8 justify-center items-center">
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={sitImage} alt="Information System & Technologie (SIT)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Calculus 2</p>
        </div>
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={silImage} alt="Software Engineering (SIL)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Algebra 2</p>
        </div>
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={siqImage} alt="System Informatique (SIQ)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Word Processing and Web</p>
        </div>
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={sidImage} alt="Intelligent System & Data (SID)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Computer architecture</p>
        </div>
        </div>
        </div>
 ),
},
{
content: (
    <div className=" flex w-[90%] items-center justify-center pl-40">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-[80%] my-8 justify-center items-center">
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={sitImage} alt="Information System & Technologie (SIT)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Written Production Techniques</p>
        </div>
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={silImage} alt="Software Engineering (SIL)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Algorithmic and Static Data Structure</p>
        </div>
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={siqImage} alt="System Informatique (SIQ)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Electricity</p>
        </div>
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={sidImage} alt="Intelligent System & Data (SID)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Introduction to Operating Systems 2</p>
        </div>
        </div>
        </div>
 ),
},
];
const slides3 = [
    {
     content: (
         
       <div className=" flex w-[90%] items-center justify-center pl-40">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-[80%] my-8 justify-center items-center">
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={sitImage} alt="Information System & Technologie (SIT)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Calculus 2</p>
        </div>
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={silImage} alt="Software Engineering (SIL)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Algebra 2</p>
        </div>
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={siqImage} alt="System Informatique (SIQ)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Word Processing and Web</p>
        </div>
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={sidImage} alt="Intelligent System & Data (SID)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Computer architecture</p>
        </div>
        </div>
        </div>
 ),
},
{
content: (
    <div className=" flex w-[90%] items-center justify-center pl-40">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-[80%] my-8 justify-center items-center">
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={sitImage} alt="Information System & Technologie (SIT)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Written Production Techniques</p>
        </div>
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={silImage} alt="Software Engineering (SIL)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Algorithmic and Static Data Structure</p>
        </div>
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={siqImage} alt="System Informatique (SIQ)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Electricity</p>
        </div>
        <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
          <img src={sidImage} alt="Intelligent System & Data (SID)" className="w-48 h-32 object-cover mb-6" />
          <p className="text-center font-bold">Introduction to Operating Systems 2</p>
        </div>
        </div>
        </div>
 ),
},
];
  const Superior = () => {
  return (

    <div className="py-12 flex flex-col items-center">
        <div className="flex w-full items-center lg:items-center justify-center gap-y-8 mb-8">
            <div className="h-4 w-full lg:w-24  bg-main-blue" />
            <h1 className="text-5xl  mr-8 ml-8 text-greytitle font-bold">Superior cycle</h1>
            <div className="h-4 w-full lg:w-24  bg-main-blue" />
        </div>
        <h1 className="text-3xl text-center text-main-blue font-bold mb-8">1st Semester</h1>
        <Slider slides={slides1} />      
        <h1 className="text-3xl text-center text-main-blue font-bold my-8">2nd Semester</h1>
        <Slider slides={slides2} />
        <h1 className="text-3xl text-center text-main-blue font-bold my-8">Optional Courses</h1>
        <Slider slides={slides3} />
        <button
        className="flex items-center gap-x-4 my-2 px-10 py-2 font-medium text-white bg-main-blue group mt-4">
        <span>Download full superior classes program</span>
        <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
        </button> 
        </div>
);
};

export default Superior;