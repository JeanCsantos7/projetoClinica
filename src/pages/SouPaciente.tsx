
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"
import { useState } from "react";
import BtnCarregamento from "../components/AreaPaciente/BtnCarregamento";


export default function SouPaciente()
{
    
  const[email, setEmail ] = useState<string>('')
  const[password, setPassword ] = useState<string>('')
  const[senhaIncorreta, setSenhaIncorreta] = useState<string>('')
  const[loading, setLoading] = useState<JSX.Element>()
  const navigate = useNavigate()
  async function Logar(e: any)
  {
   
    e.preventDefault()

   
   try{

    const logar = await signInWithEmailAndPassword(auth, email, password )
    
      
      setLoading(<BtnCarregamento/>)
     
      setTimeout(() => {

        navigate('/AreaPaciente')
      }, 4100)
   

 
   }

   catch{
    
    setSenhaIncorreta('Seu Email ou senha Estão Incorretos')

   }
   

    

   

  
   


  }

  



  return(
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
          <FaRegCircleUser className=" text-[#53a4e7] text-6xl mx-auto  w-auto"/>
          <h2 className=" font-Poppins mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Faça Login na sua Conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={Logar} className="space-y-6">
            <div>
              <label htmlFor="email" className=" font-Poppins block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2 ">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className=" outline-none font-Poppins block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#53a4e7] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label  htmlFor="password" className="font-Poppins block text-sm font-medium leading-6 text-gray-900">
                 Senha
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="outline-none block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#53a4e7] sm:text-sm sm:leading-6"
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
              <p className="m-auto text-center mt-8">{loading}</p>
              <p className=" font-Poppins text-md text-center text-red-400 mt-4">{senhaIncorreta}</p>
            </div>
          </form>

          <p className=" font-Poppins mt-10 text-center text-sm text-gray-500">
            Não tem uma conta?{' '}
            <a className="font-Poppins font-semibold leading-6 text-[#53a4e7] hover:text-[#7fc5ff] " onClick={() => navigate("/CriarContaPaciente")}>
              Crie aqui sua Conta
            </a>

      
          </p>
        </div>
      </div>
    </>
  )

}