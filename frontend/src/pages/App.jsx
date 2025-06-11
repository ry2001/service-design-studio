import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Introduction from "./introduction";
import Frontend from "./frontend";
import Backend from "./backend";
import Demo from "./demo";
import NotFound from "./404";
import ScrollToTop from "../components/scrollToTop.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="mx-80">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
