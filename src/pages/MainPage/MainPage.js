import { Route, Routes } from "react-router-dom";
import { ListMaterials } from "../../components/ListMaterials/ListMaterials";
import { FilmCalculator } from "../../components/FilmCalculator/FilmCalculator";
// import Baner from "../Film/Film";

const MainPage = () => {
  return (
    <>
      <ListMaterials />
      <Routes>
        <Route path="/film" element={<FilmCalculator />}>
          {" "}
        </Route>
      </Routes>
      {/* <Baner /> */}
    </>
  );
};
export default MainPage;
