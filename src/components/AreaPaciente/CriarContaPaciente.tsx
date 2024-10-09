import { db, auth } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CriarContaPaciente() {
  const [email, setEmail] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [CPF, setCPF] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  async function CriacaoContas(e: any) {
    e.preventDefault();

    try {
      const criar = await createUserWithEmailAndPassword(auth, email, password);
      let infoUsers: any = criar.user;

      await updateProfile(infoUsers, { displayName: nome });

      await addDoc(collection(db, "CadastroUsuarios"), {
        displayName: nome,
        uid: infoUsers.uid,
        email: email,
        nome: nome,
        CPF: CPF,
      });

      setTimeout(() => {
        navigate("/SouPaciente");
      }, 3500);
    } catch (error) {
      console.error("error");
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
          <form onSubmit={CriacaoContas} className="space-y-9">
            <div>
              <div>
                <label
                  htmlFor="email"
                  className=" font-Poppins block text-sm font-medium leading-6 text-gray-900 "
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
                    className=" outline-none font-Poppins p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#53a4e7] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className=" font-Poppins block text-sm font-medium leading-6 text-gray-900 mt-4 "
                >
                  CPF
                </label>
                <div className="mt-2">
                  <input
                    maxLength={12}
                    name="CPF"
                    type="text"
                    required
                    value={CPF}
                    onChange={(e) => {
                    
                      let valor = e.target.value.replace(/\D/g, "")
                      
                      if(valor.length <= 11){
                        setCPF(valor)
                      }

                      
                       

                    }}
                      
                    
                    className=" outline-none font-Poppins p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#53a4e7] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <label
                htmlFor="email"
                className=" font-Poppins block text-sm font-medium leading-6 text-gray-900 mt-4"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className=" outline-none font-Poppins p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#53a4e7] sm:text-sm sm:leading-6"
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
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="outline-none p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#53a4e7] sm:text-sm sm:leading-6"
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
