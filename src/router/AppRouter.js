import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/pageHome";
import WorkShop from "../pages/WorkShop";
import PageSingleMovie from "../pages/PageSingleMovie";
import { GlobalProvider } from "../context/GlobalContext";
import Banner from "../components/Banner";

function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/movie/:id" element={<PageSingleMovie />} />
          <Route path="/test/:id" element={<Banner />} />
          <Route path="/workshop" element={<WorkShop />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
