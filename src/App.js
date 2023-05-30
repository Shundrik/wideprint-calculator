// import { BanerCalculator } from "./components/BanerCalculator/BanerCalculator";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
// import { FilmCalculator } from "./components/FilmCalculator/FilmCalculator";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <FilmCalculator/> */}

        <MainPage />
      </BrowserRouter>
    </>
  );
}

export default App;
