import { FaHandHoldingMedical } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

export default function AreaPaciente() {
  const [nomeAutenticado, setNomeAutenticado] = useState<string | null>();
  const [uidAutenticado, setUidAutenticado] = useState<string | null>();
  const auth = getAuth();

  useEffect(() => {
    let nomeUser = auth.currentUser?.displayName;
    let uidAutenticado = auth.currentUser?.uid
    setNomeAutenticado(nomeUser);
    setUidAutenticado(uidAutenticado);
  }, [auth]);


  const navigate = useNavigate()

  return (
    <>
      <header className=" flex items-center justify-between font-Poppins font-normal text-[#fff] bg-[#53a4e7] shadow-sm shadow-black w-full h-[8vh] p-4 pl-6 ">
        <FaHandHoldingMedical className="text-white text-4xl lg:text-5xl " />

        <span className="flex items-center ">
          <h1 className="p-4">Olá, {nomeAutenticado}</h1>
          <FaUserCircle className="text-white text-4xl lg:text-5xl " />
        </span>
      </header>

      <h1 className="font-Poppins text-3xl font-semibold mt-9 text-[#53a4e7] text-center">
        Meu Painel
      </h1>

      <div className="min-h-screen mt-9">
        <div className="container mx-auto py-6 px-4 flex space-x-4">
          <aside className="w-1/4 bg-white shadow p-4">
            <div className="text-center mb-4">
              <div className="font-Poppins font-bold text-[#53a4e7]">
                {nomeAutenticado}
              </div>
            </div>

            <nav className="flex flex-col space-y-4">
              <button onClick={() => navigate(`/AreaPaciente/NovoAgendamento/${uidAutenticado}`)} className=" font-Poppins w-full bg-[#53a4e7] text-white py-2 rounded">
                + Novo Agendamento
              </button>
              <button className="font-Poppins w-full bg-white text-[#53a4e7] border py-2 rounded">
                Próximas consultas
              </button>
            </nav>
          </aside>

          {/* Main Section */}
          <section className="w-3/4 bg-white shadow p-6">
            <h2 className="text-xl font-bold mb-4">Próximas Consultas</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className=" font-Poppins p-2 text-left">Especialidade</th>
                  <th className="font-Poppins p-2 text-left">Data</th>
                  <th className="font-Poppins p-2 text-left">Hora</th>
                  <th className="font-Poppins p-2 text-left">Médico</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="font-Poppins p-2">ORTOPEDIA</td>
                  <td className="font-Poppins p-2">08/10/2024</td>
                  <td className="font-Poppins p-2">14:36</td>
                  <td className="font-Poppins p-2">
                    GUSTAVO GOH RINGER DE ALM EIDA BARBOSA
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  );
}
