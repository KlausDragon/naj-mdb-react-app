import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/pageHome";
import PageAbout from "../pages/PageAbout";
import PageSingleMovie from "../pages/PageSingleMovie";
import PageFavorite from "../pages/PageFavorite";
import { GlobalProvider } from "../context/GlobalContext";

function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/movie/:id" element={<PageSingleMovie />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/favorite" element={<PageFavorite />} />
        </Routes>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
