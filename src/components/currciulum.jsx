import React from 'react';
import sitImage from '../assets/images/SIT.png';
import silImage from '../assets/images/SIL.png';
import siqImage from '../assets/images/SIQ.png';
import sidImage from '../assets/images/AIproject.png';

const CurriculumSection = () => {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto w-11/12 lg:w-8/12">
        <h1 className="text-center text-main-blue font-bold text-5xl mb-8">Curriculum at ESI</h1>

        <div className=" flex flex-row gap-4 mb-12 ">
          <div className="w-5 h-20 bg-main-blue" />
        <div>
          <h2 className="text-main-blue font-bold text-2xl my-2">Cycle préparatoire</h2>
          <p className="text-gray-700 text-lg font-semibold">2 years. With an internal exam in the 2nd year based on the ranking in the 2nd year</p>
        </div>
        </div>

        <div>
        <div className=" flex flex-row gap-4 my-4">
          <div className="w-5 h-20 bg-main-blue" />
        <div>
          <h2 className="text-main-blue font-bold text-2xl my-2">Second cycle</h2>
          <p className="text-gray-700 text-lg mb-4 font-semibold">3 years</p>
        </div>
        </div>

          <div className="mb-8 px-8">
            <h3 className="font-bold text-xl mb-2">1st year</h3>
            <p className="text-gray-700 text-lg font-semibold">Common cycle with a summer internship of 4 to 6 weeks.</p>
          </div>

          <div className="mb-8 px-10">
            <h3 className="font-bold text-xl mb-2">2nd year</h3>
            <p className="text-gray-700 text-lg mb-4 font-semibold">Students choose between these specializations :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
                <img src={sitImage} alt="Information System & Technologie (SIT)" className="w-48 h-32 object-cover mb-2" />
                <p className="text-center font-bold">Information System & Technologie (SIT)</p>
              </div>
              <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
                <img src={silImage} alt="Software Engineering (SIL)" className="w-48 h-32 object-cover mb-2" />
                <p className="text-center font-bold">Software Engineering (SIL)</p>
              </div>
              <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
                <img src={siqImage} alt="System Informatique (SIQ)" className="w-48 h-32 object-cover mb-2" />
                <p className="text-center font-bold">System Informatique (SIQ)</p>
              </div>
              <div className="flex flex-col items-center rounded-[5px] shadow-lg pb-2">
                <img src={sidImage} alt="Intelligent System & Data (SID)" className="w-48 h-32 object-cover mb-2" />
                <p className="text-center font-bold">Intelligent System & Data (SID)</p>
              </div>
            </div>
          </div>

          <div className="mb-8 px-10">
            <h3 className="font-bold text-xl mb-2">3rd year</h3>
            <p className="text-gray-700 text-lg mb-4 font-semibold">Un Projet de Fin d'Etudes de 9 mois. Avec une possibilité de :</p>
            <ul className="list-disc pl-8 text-gray-700 text-lg font-semibold">
              <li>S’inscrire au Master.</li>
              <li>S’inscrire en FIE (Formation ingénieur Entreprendre) pour porteurs de projets innovants.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
