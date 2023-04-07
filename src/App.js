import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Bio from "./components/Bio/Bio";
import InputLink from "./components/InputLink/InputLink";
import Statistics from "./components/Statistics/Statistics";
import UpperFooter from "./components/Footer/UpperFooter/UpperFooter";
import LowerFooter from "./components/Footer/LowerFooter/LowerFooter";
function App() {
  return (
    <>
      <div>
        <NavBar />
        <Bio />
      </div>
      <div style={{ background: "hsl(0, 0%, 90%)" }}>
        <InputLink />
        <Statistics />
        <UpperFooter />
      </div>
      <LowerFooter />
    </>
  );
}

export default App;
