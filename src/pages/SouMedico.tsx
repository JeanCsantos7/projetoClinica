
import { FaUserDoctor } from "react-icons/fa6";
import BtnCarregamento from "../components/AreaPaciente/BtnCarregamento";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";


export default function SouMedico()
{
 
 
  type MedicoLogin = string

  const[email, setEmail] = useState<MedicoLogin>('')
  const[password, setPassword] = useState<MedicoLogin>('')
  const[senhaIncorreta, setSenhaIncorreta] = useState<MedicoLogin>('')
  const[loading, setLoading] = useState<JSX.Element>()



  async function Logar(e:any){
     
    e.preventDefault()

    try{
      
    const autenticar = await signInWithEmailAndPassword(auth, email, password)
      
      setLoading(<BtnCarregamento/>)
      setSenhaIncorreta('')
      
      setTimeout(() => {
         
        navigate('/AreaMedicos')

      }, 3500)

      

    }

    catch{
     setSenhaIncorreta('Email ou senha incorretos!')

    }



 
  }

  
  const navigate = useNavigate()

  return(
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
          <FaUserDoctor className=" text-[#53a4e7] text-6xl mx-auto  w-auto"/>
          <h2 className=" font-Poppins mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Faça Login na sua Conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form  onSubmit={Logar} className="space-y-6">
            <div>
              <label htmlFor="email" className=" font-Poppins block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value) }
                  className=" outline-none font-Poppins block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#53a4e7] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="font-Poppins block text-sm font-medium leading-6 text-gray-900">
                 Senha
                </label>
               
              </div>
              <div className="mt-2">
                <input
                
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="outline-none block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#53a4e7] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="font-Poppins flex w-full justify-center rounded-md bg-[#53a4e7] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#7fc5ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar
              </button>
              <p className=" font-Poppins text-md text-center text-red-400 mt-4">{senhaIncorreta}</p>
              <p className="m-auto text-center mt-8">{loading}</p>
            </div>
          </form>

          <p className=" font-Poppins mt-10 text-center text-sm text-gray-500">
            Não tem uma conta?{' '}
            <a href="" className="font-Poppins font-semibold leading-6 text-[#53a4e7] hover:text-[#7fc5ff] " onClick={() => navigate("/CriarContaMedico")}>
              Crie aqui sua Conta
            </a>
          </p>
        </div>
      </div>
    </>
  )

}