// import { BanerCalculator } from "./components/BanerCalculator/BanerCalculator";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import { FilmCalculator } from "./components/FilmCalculator/FilmCalculator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainPage />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
