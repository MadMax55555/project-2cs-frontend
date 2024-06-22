import React from "react";
import PropTypes from "prop-types";

const Professor = (props) => {
  return (
    <div className="flex w-full max-w-lg border rounded-md shadow-lg overflow-hidden">
      <img
        src={props.image}
        alt={`${props.name} cover`}
        className="w-1/2 object-cover"
      />
      <div className="w-1/2 p-2 bg-white">
        <h2 className="text-2xl font-bold">{props.name}</h2>
        <p className="mt-2 text-sm text-gray-700 font-semibold">{props.Description}</p>
        <div className="mt-4">
          <span className="font-bold">Courses teached:</span>
          <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
            {props.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 justify-end">
          <span className="font-bold">Joined on:</span>
          <span className="ml-2 text-main-blue font-semibold ">{props.date}</span>
        </div>
        <div className="flex justify-end items-center space-x-2 mt-4">
                        <a 
                        //href={logo.social.website} className="text-gray-500
                        >
                          <i className="fas fa-globe"></i>
                        </a>
                        <a
                          //href={logo.social.facebook}
                          className="text-gray-500"
                        >
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a
                          //href={logo.social.instagram}
                          className="text-gray-500"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
      </div>
    </div>
  );
};

export default Professor;