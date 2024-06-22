import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import EngineerImg from "../assets/images/EngineerImg.png";
import PresentationSection from "../components/PresentationSection";
import Footer from "../components/Footer";
import SchoolProgram from "../components/ShoolProgram";
import Preparatory from "../components/Preparatory";
import Superior from "../components/Superior";

function EngineerCurriculum() {
  return (
    <div className="relative">
      <Header />
      <HeroSection
        Image={EngineerImg}
        Titre={<>Engineer's <span className="text-main-blue"> curriculum </span> </>}
        //SousTitre={<>Reveal your skills with our{" "}<span className="text-main-blue">engineering</span> curriculum</}
        SousTitre={<> <span className="text-main-blue"> Five-Year</span> Journey in Engineering Education"</>}
      />
    <SchoolProgram />
    <Preparatory/>
    <Superior/>
    <Footer />
    </div>
  );
}

export default EngineerCurriculum;