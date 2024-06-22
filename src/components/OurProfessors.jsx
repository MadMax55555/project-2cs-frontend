import React from "react";
import Prof1 from "../assets/images/prof1.png";
import Prof2 from "../assets/images/prof2.png";
import Prof3 from "../assets/images/prof3.png";
import { BiChevronRight } from "react-icons/bi";
import Professor from "./Professor";

function OurProfessors() {
    return (
      <div className=" w-full flex h-full bg-[#F6FAFF] flex-col px-32 gap-y-6 items-center justify-center my-12">
        <p className="text-4xl font-bold text-main-blue">Our Professors</p>
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
        <a href="/OurProfessorsPage">
        <button
        //onClick={() => window.open("https://biblio.esi.dz/", "_blank")}
        className="flex items-center gap-x-4 my-2 px-10 py-2 font-medium text-white bg-main-blue group mt-4"
  >
        <span>See More</span>
        <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
      </button>
      </a>
</div>
  );
}

export default OurProfessors;