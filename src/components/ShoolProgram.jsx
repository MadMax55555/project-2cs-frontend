import React from 'react';

const SchoolProgram = () => {
  return (

    <div className="py-12 flex items-center">
      <div className="max-w-5xl mx-auto lg:w-8/12">
        <h1 className="text-center text-main-blue font-bold text-5xl mb-8">School's Program</h1>
        <p className="text-center mb-4 text-2xl font-semibold">
        The National School of Computer Science offers a five-year program
        divided into three periods:
      </p>
      <div className="max-w-6xl mx-auto text-left text-main-black">
        <ol className="list-decimal list-inside space-y-2">
          <li className='text-2xl font-semibold'>
            Two years of preparatory classes (CP) cover basic knowledge.
          </li>
          <li className='text-2xl font-semibold'>
            One year of common foundation in the second cycle (SCS) precedes
            specialization.
          </li>
          <li className='text-2xl font-semibold'>
            Two years of specialization (4th + 5th year) offer four options:{" "}
            <a //href="#" 
            className="text-main-blue underline">
              SIT
            </a>
            ,{" "}
            <a //href="#" 
            className="text-main-blue underline">
              SIQ
            </a>
            ,{" "}
            <a //href="#" 
            className="text-main-blue underline">
              SIL
            </a>
            , and{" "}
            <a //href="#" 
            className="text-main-blue underline">
              SID
            </a>
            .
          </li>
        </ol>
      </div>
      </div>
    </div>
  );
};

export default SchoolProgram;