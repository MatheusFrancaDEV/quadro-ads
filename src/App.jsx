import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routers/Home";
import Curso from "./routers/Curso";
import Sobre from "./routers/Sobre";
import Salvos from "./routers/Salvos";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main className="flex justify-center mx-auto mt-[2.6875rem] shadow-md w-full max-w-[1379px] bg-white rounded-[1.625rem]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="curso" element={<Curso />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="salvos" element={<Salvos />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
