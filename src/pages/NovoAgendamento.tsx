import PacienteNome from "../components/NovoAgendamento/PacienteNome";
import PacienteEmail from "../components/NovoAgendamento/PacienteEmail";
import PacienteCPF from "../components/NovoAgendamento/PacienteCPF";

interface opcoesEspecialidades {
  id: number;
  especialidade: string;
}

const especialidadesMedicas: opcoesEspecialidades[] = [
  { id: 1, especialidade: "Cardiologia" },
  { id: 2, especialidade: "Dermatologia" },
  { id: 3, especialidade: "Endocrinologia" },
  { id: 4, especialidade: "Gastroenterologia" },
  { id: 5, especialidade: "Geriatria" },
  { id: 6, especialidade: "Ginecologia" },
  { id: 7, especialidade: "Neurologia" },
  { id: 8, especialidade: "Oftalmologia" },
  { id: 9, especialidade: "Ortopedia" },
  { id: 10, especialidade: "Pediatria" },
  { id: 11, especialidade: "Psiquiatria" },
  { id: 12, especialidade: "Urologia" },
];

export default function NovoAgendamento() {
  return (
    <header>
      <h1 className="font-Poppins font-semibold text-[#fff] bg-[#53a4e7] shadow-sm shadow-black w-full h-[8vh] p-4 pl-6">
        Novo Agendamento
      </h1>

      <h1 className="font-Poppins text-3xl font-semibold mt-9 text-[#53a4e7] text-center">
        Meu Painel
      </h1>

      <div className="min-h-screen mt-9">
        <div className="container mx-auto py-6 px-4 flex space-x-4">
          <aside className="w-1/4 bg-white shadow p-4">
            <div className="text-center mb-4">
              <div>
                <h1 className="font-Poppins text-xl text-left font-bold text-[#53a4e7]">
                  Dados do Paciente
                </h1>
                <hr className="w-[90%] mt-3" />

                <h1 className="font-Poppins text-left font-normal text-black mt-5">
                  Nome
                </h1>

                <p className="font-Poppins text-left font-semibold text-[#53a4e7] mt-1">
                  {<PacienteNome />}
                </p>

                <h1 className="font-Poppins text-left font-normal text-black mt-5">
                  Email
                </h1>

                <p className="font-Poppins text-left font-semibold text-[#53a4e7] mt-1">
                  {<PacienteEmail />}
                </p>

                <h1 className="font-Poppins text-left font-normal text-black mt-5">
                  CPF
                </h1>

                <p className="font-Poppins text-left font-semibold text-[#53a4e7] mt-1">
                  {<PacienteCPF />}
                </p>
              </div>
            </div>
          </aside>

          <section className="w-3/4 bg-white shadow p-6">
            <h2 className="text-xl font-bold mb-4">Agendar Consulta</h2>

            <div className="flex flex-row">
              <label>Especialidade</label>
              <label>Local</label>
              <select name="Especialidade">
                {especialidadesMedicas.map((item) => {
                  return <option>{item.especialidade}</option>;
                })}
              </select>

              
         
            <select name="Especialidade">
              {especialidadesMedicas.map((item) => {
                return <option>{item.especialidade}</option>;
              })}
            </select>
            </div>

          </section>
        </div>
      </div>
    </header>
  );
}
