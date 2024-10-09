import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Unidades from "./pages/Unidades";
import SouMedico from "./pages/SouMedico";
import SouPaciente from "./pages/SouPaciente";
import Error404 from "./pages/Error404";
import CriarContaPaciente from "./components/AreaPaciente/CriarContaPaciente";
import CriarContaMedico from "./components/AreaMedico/CriarContaMedico";
import AreaPaciente from "./pages/AreaPaciente";
import AreaMedico from "./pages/AreaMedico";
import PrivarRotaPaciente from "./components/AreaPaciente/PrivarRotaPaciente";
import PrivarRotaMedicos from "./components/AreaMedico/PrivarRotaMedicos";
import NovoAgendamento from "./pages/NovoAgendamento";




export default function Rotas() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QuemSomos" element={<QuemSomos />} />
          <Route path="/Unidades" element={<Unidades />} />
          <Route path="/SouMedico" element={<SouMedico />} />
          <Route path="/SouPaciente" element={<SouPaciente />} />
          <Route path="/CriarContaPaciente" element={<CriarContaPaciente />} />
          <Route path="/CriarContaMedico" element={<CriarContaMedico />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/AreaPaciente" element={
            
            <PrivarRotaPaciente>

              <AreaPaciente/>
              

            </PrivarRotaPaciente>

          }>

          </Route>

          <Route path="/AreaMedicos" element={
            
            <PrivarRotaMedicos>

              <AreaMedico/>
              

            </PrivarRotaMedicos>

          }>

          </Route>


          <Route path="/AreaPaciente/NovoAgendamento/:uid" element={
            
            <PrivarRotaPaciente>

              <NovoAgendamento/>
             
              

            </PrivarRotaPaciente>

          }>

          </Route>

          

        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
