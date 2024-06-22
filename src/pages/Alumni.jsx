import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AlumniImg from "../assets/images/soutnance.png";
import Footer from "../components/Footer";
import EventSection from "../components/EventSection";
import PresentationSection from "../components/PresentationSection";
import Information from "../components/Information";
import AlumniPresImg from "../assets/images/alumniPresImg.png";
import infoA1 from "../assets/images/infoA1.png";
import infoA2 from "../assets/images/infoA2.png";
import infoA3 from "../assets/images/infoA3.png";

const AlumniPage = () => {
  const infoData = [
    {
      number: "+20k",
      description: "Alumni",
      imageUrl: infoA1,
    },

    {
      number: "77%",
      description: "Positive Feedback",
      imageUrl: infoA2,
    },
    {
      number: "+100",
      description: "Research publications",
      imageUrl: infoA3,
    },
  ];
  const [EventsItem, setEventsItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://project-2cs-backend.onrender.com/events")
      .then((response) => {
        setEventsItem(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);
  return (
    <div className="relative">
      <Header />
      <HeroSection
        Image={AlumniImg}
        Titre={
          <>
            <span className="text-8xl">Alumni Space</span>
          </>
        }
        Phrase='"Hello alumnis, glad to welcome you back!"'
      />
      <Information Title={"POSTGRADUATION IN NUMBERS"} infoData={infoData} />
      <EventSection Event={EventsItem} />
      <PresentationSection
        Titre="Back home !"
        Image={AlumniPresImg}
        Text={`During your time at ESI, you forged meaningful connections within our dynamic community. These connections endure beyond graduation, shaping lifelong bonds.
               As alumni, we invite you to stay engaged, share your journey, inspire future generations, and continue enriching our vibrant community.`}
        ButtonText="Contribute as mentor"
        ButtonText2="Get involved now"
      />
      <Footer />
    </div>
  );
};

export default AlumniPage;
