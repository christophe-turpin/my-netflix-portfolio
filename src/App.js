import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";
import resumeData from "./resumeData";

function App() {
  const { portfolio, work, education, skills } = resumeData;
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Créations Originales de Christophe" resumeData={portfolio} />
      <Row title="Expériences" resumeData={work} />
      <Row title="Formation" resumeData={education} />
      <Row title="Compétences" resumeData={skills} />
    </div>
  );
}

export default App;
