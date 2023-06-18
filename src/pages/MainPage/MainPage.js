import { Route, Routes } from "react-router-dom";
import { ListMaterials } from "../../components/ListMaterials/ListMaterials";


import { Result } from "../../components/Result/Result";

import FilmPage from "../Film/FilmPage";
import BanerPage from "../Baner/BanerPage";
import PaperPage from "../PaperPage/PaperPage";
import WallPaperPage from "../WallPaperPage/WallPaperPage";


const MainPage = () => {
  return (
    <>
      <ListMaterials />
     
      <Routes>
        <Route path="/" element={<></>}/>
        <Route path="/film" element={<FilmPage/>}/>
        <Route path="/baner" element={<BanerPage/>}/>
        <Route path="/paper" element={<PaperPage />}/>
        <Route path="/wallPaper" element={<WallPaperPage />}/>
              </Routes>
      <Result />
   
    </>
  );
};
export default MainPage;
