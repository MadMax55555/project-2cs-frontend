import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import HeroSection from '../components/HeroSection'
import Footer from "../components/Footer";
import ProfImg from "../assets/images/ProfImg.png"
import OurProfessors from "../components/OurProfessors";
import Professor from "../components/Professor";
import Prof1 from "../assets/images/prof1.png"
import Prof2 from "../assets/images/prof2.png"
import Prof3 from "../assets/images/prof3.png"
import Prof4 from "../assets/images/prof4.png"


const OurProfessorsPage = () => {

return (
    <div className="relative  bg-variant-white">
        <Header />
        <HeroSection 
            Image={ProfImg} 
            Titre={<><span className="text-8xl text-main-blue">Our </span><span className="text-8xl">Professors</span></>}
            //Phrase={<>"Hello <span className="text-main-blue"> alumnis </span>, glad to welcome you back!"</>}
        />
          <div className="flex justify-center gap-x-20 bg-variant-white">
            <form 
            //onSubmit={handleSearchSubmit}
            className="flex justify-center mb-6 w-1/2 border-2 rounded-2xl outline-none border-main-blue mx-auto bg-white my-12"
          >
            <input
              type="text"
              placeholder="Search by name or courses"
              className="py-3 px-5 outline-none w-full rounded-full text-2xl"
              //value={searchQuery}
              //onChange={handleSearchInputChange}
            />
            <button type="submit">
              <img src="/images/Outline.svg" className="py-2 pr-5" alt="Search" />
            </button>
        </form>
        <select className="flex justify-center mb-6 w-1/6 border-2 rounded-2xl outline-none border-main-blue mx-auto bg-white my-12 text-2xl font-semibold p-3">
                  <option>2CS SIT</option>
                  <option>2CS SIL</option>
                  <option>2CS SIQ</option>
                  <option>2CS SID</option>
          </select>
          </div>
<div className=" w-full flex h-full bg-variant-white flex-col px-32 gap-y-6 items-center justify-center my-12">
        <div className="flex justify-center gap-x-6">
        <Professor
          image={Prof1}
          name="DAHAK .F"
          Description="Professeur at ESI, Algiers I Assistant Director Of External Relations at ESI, Algiers"
         courses={["1CS: BDD", "2CS SIT: ASI"]}
         date="12 dec 2008"
        />
        <Professor
           image={Prof2}
           name="CHALAL .R"
           Description="Professeur at ESI, Algiers I Consultant Gouvernance S.I I Conseil Formation I"
           courses={["2CS SIT: SIAD, MSSI, Project2CS"]}
           date="12 dec 2001"
         />
          <Professor
           image={Prof3}
           name="NADER .F"
           Description="Professeur at ESI, Algiers I Assistant director of ESI laboratory LMCS"
           courses={["2CS SIT: PGI, URSI, Project2CS"]}
           date="12 dec 2001"
         />
         </div>
         <div className="flex justify-center gap-x-6 h-[320px]">
          <Professor 
            image={Prof4}
            name="GHOUMARI .R"
            Description="Professeur at ESI, Algiers I Pr Associed at ESAA, Algiers I Consultant Gouvernance S.I I Conseil Formation I"
            courses={["1CS SIT: CPRJ", "2CS SIT: TICO", "AUSI 2CS SID: SGOV"]}
            date="12 dec 2001"
            />
          </div>
        </div>
            <Footer />
            </div>
         );
        };
        
        export default OurProfessorsPage;