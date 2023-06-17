import { Route, Routes } from "react-router-dom";
import { ListMaterials } from "../../components/ListMaterials/ListMaterials";
import { FilmCalculator } from "../../components/FilmCalculator/FilmCalculator";
import { BanerCalculator } from "../../components/BanerCalculator/BanerCalculator";
import { Result } from "../../components/Result/Result";
// import Baner from "../Film/Film";

const MainPage = () => {
  return (
    <>
      <ListMaterials />
      <Routes>
        {/* <Route path="/" element={}/> */}
        <Route path="/film" element={<FilmCalculator />}/>
        <Route path="/baner" element={<BanerCalculator />}/>
              </Routes>
      <Result />
    </>
  );
};
export default MainPage;
