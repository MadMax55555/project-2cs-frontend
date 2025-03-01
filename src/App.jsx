import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import LibraryPage from "./pages/Library";
import AdmissionPage from "./pages/Admission";
import Articles from "./pages/Articles";
import FormationContinue from "./pages/FormationContinue";
import Research from "./pages/Reasearch";
import TrainingThemes from "./pages/TrainingThemes";
import News from "./pages/News";
import LifePage from "./pages/LifePage";
import Postgrad from "./pages/PostgradPage";
import PartnershipInterPage from "./pages/PartnershipInterPage";
import PartnershipPage from "./pages/PartnershipPage";
import PartnershipNatPage from "./pages/PartnershipNatPage";
import SignalementPage from "./pages/SignalementPage";
import Academicss from "./pages/Academics";
import ArticlePage from "./articles/article1";
import ScrollToTop from "./utils/ScrollToTop";
import ProgramsDetails from "./pages/ProgramsDetails";
import YouAreStudent from "./pages/YouAreStudent";
import YouAreVisitor from "./pages/YouAreVisitor";
import YouAreTeacher from "./pages/YouAreTeacher";
import YouAreCompany from "./pages/YouAreCompany";
import OurProfessorsPage from "./pages/OurProfessorsPage";
import EngineerCurriculum from "./pages/EngineerCurriculum";
import AlumniPage from "./pages/Alumni";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/News" element={<News />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/formation-continue" element={<FormationContinue />} />
        <Route path="/research" element={<Research />} />
        <Route path="/training-themes" element={<TrainingThemes />} />
        <Route path="/Lifeesi" element={<LifePage />} />
        <Route path="/Postgrad" element={<Postgrad />} />
        <Route path="/Alumni" element={<AlumniPage />} />
        <Route
          path="/PartnershipInterPage"
          element={<PartnershipInterPage />}
        />
        <Route path="/PartnershipPage" element={<PartnershipPage />} />
        <Route path="/SignalementPage" element={<SignalementPage />} />
        <Route path="/PartnershipNatPage" element={<PartnershipNatPage />} />
        <Route path="/Academics" element={<Academicss />} />
        <Route path="/articles/1" element={<ArticlePage />} />
        <Route path="/ProgramsDetails" element={<ProgramsDetails />} />
        <Route path="/OurProfessorsPage" element={<OurProfessorsPage />} />
        <Route path="/EngineerCurriculum" element={<EngineerCurriculum />} />
        <Route path="/student" element={<YouAreStudent />} />
        <Route path="/teacher" element={<YouAreTeacher />} />
        <Route path="/visitor" element={<YouAreVisitor />} />
        <Route path="/entreprise" element={<YouAreCompany />} />
        {/* Render ComponentsPage for /components */}
      </Routes>
    </Router>
  );
};

export default App;
