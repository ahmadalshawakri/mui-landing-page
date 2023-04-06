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
      <NavBar />
      <Bio />
      <InputLink />
      <Statistics />
      <UpperFooter />
      <LowerFooter />
    </>
  );
}

export default App;
