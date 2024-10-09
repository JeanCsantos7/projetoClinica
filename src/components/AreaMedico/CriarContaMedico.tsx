import { addDoc, collection } from "firebase/firestore";
import { User, UserCredential } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BtnCarregamento from "../AreaPaciente/BtnCarregamento";

export default function CriarContaMedico() {
  
  const navigate = useNavigate()
  type Medico = string;

 


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

  const [nome, setNome] = useState<Medico>("");
  const [password, setPassword] = useState<Medico>("");
  const [email, setEmail] = useState<Medico>("");
  const [especialidade, setEspecialidade] = useState<Medico>("");
  const [CRM, setCRM] = useState<Medico>("");
  const[loading, setLoading] = useState<JSX.Element>()

  async function CriarConta(e: any) {
    e.preventDefault();

    try {
      let criarConta : UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      let infoUsers : User  = criarConta.user;

      await updateProfile(infoUsers, {displayName : nome})
      
 
      
      
      await addDoc(collection(db, "CadastroMedicos"), {
        displayName: nome,
        uid: infoUsers.uid,
        nome: nome,
        email: email,
        especialidade: especialidade,
        CRM: CRM,
      });

      setLoading(<BtnCarregamento/>)
      
      
      setTimeout(() => {
         
        navigate('/SouMedico')

      }, 3500)



    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-13">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" font-Poppins mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crie sua Conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={CriarConta} className="space-y-9">
            <div>
              <div>
                <label
                  htmlFor="email"
                  className=" font-Poppins  block text-sm font-medium leading-6 text-gray-900"
                >
                  Nome
                </label>
                <div className="mt-2 ">
                  <input
                    name="Nome"
                    type="text"
                    required
                    autoComplete="name"
                    onChange={(e) => setNome(e.target.value)}
                    className=" outline-none font-Poppins   block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#53a4e7] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className=" font-Poppins block text-sm font-medium leading-6 text-gray-900 mt-4"
                >
                  CRM
                </label>
                <div className="mt-2">
                  <input
                    maxLength={13}
                    type="text"
                    required
                    onChange={(e) => setCRM(e.target.value)}
                    placeholder="CRM/UF 123456"
                    className=" outline-none font-Poppins block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#53a4e7] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="email"
                  className=" font-Poppins block text-sm font-medium leading-6 text-gray-900 mt-4"
                >
                  Especialidade
                </label>
                <select
                  name="Especialidade"
                  onChange={(e) => setEspecialidade(e.target.value)}
                  className=" outline-none mt-4 font-Poppins block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#53a4e7] sm:text-sm sm:leading-6"
                >
                  {especialidadesMedicas.map((item) => {
                    return <option>{item.especialidade}</option>;
                  })}
                </select>
                <div></div>
              </div>

              <label
                htmlFor="email"
                className=" font-Poppins block text-sm font-medium leading-6 text-gray-900 mt-4"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className=" outline-none font-Poppins block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#53a4e7] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="font-Poppins block text-sm font-medium leading-6 text-gray-900"
                >
                  Senha
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="outline-none block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#53a4e7] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="font-Poppins flex w-full justify-center rounded-md bg-[#53a4e7] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#7fc5ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrar
              </button>
              <p className="m-auto text-center mt-8">{loading}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
