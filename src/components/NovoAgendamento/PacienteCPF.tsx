
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";




interface DadosRetornadosFirebase{

  nome: string,
  email: string,
  CPF: string,
  displayName: string,
  uid: string,
  id: string | number

}







export default function PacienteCPF ()
{
 
   



 const[renderizarDados, setRenderizarDados] = useState<DadosRetornadosFirebase[]>()

 useEffect(() => {

   async function pegarCPF()
   {
    const auth = getAuth()
    const usuarioAutenticado = auth.currentUser?.uid

    try {
      const colecaoDados = collection(db, "CadastroUsuarios") 
      const q = query(colecaoDados, (where("uid", '==', usuarioAutenticado) ))
      const resultadoQuery = await getDocs(q)
      const documentosRetornados = resultadoQuery.docs.map((item) => ({
        
        id: item.id,
        ...item.data()

      })) as DadosRetornadosFirebase[]

      setRenderizarDados(documentosRetornados)

    } 

 

    catch (error) {
      console.error('Não foi possível prosseguir')
    }


   

   } 

   pegarCPF()
   
   


 }, [])




 


  return(
    <>
    
     {
      renderizarDados?.map((item) => {
       
        return(
          <>
          <p>{item.CPF}</p>
          </>
        )

      })
     }

    </>

  )


}



