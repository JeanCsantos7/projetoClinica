
import { useState } from "react"
import Avatar from "../components/AreaMedico/Avatar"




export default function AreaMedico()
{ 


  const [data, setData] = useState()
  const datas = [data]
   
  function teste(e: any)
  { 
    e.preventDefault()


  }
   
 

 return(
    <>
    <header className=" font-Poppins font-normal text-[#fff] bg-[#53a4e7] shadow-sm shadow-black w-full h-[6vh] p-4 pl-6 ">Agenda Online</header>
    <Avatar/>
    <hr className="w-[90%]" />


    <h1 className="font-Poppins text-md font-normal mt-4 p-4">Adicione os dias e Horários disponíveis.</h1>
    <div className="flex items-center gap-[9.5%]">
    <h2 className="font-Poppins text-sm font-normal mt-2 p-4">Data</h2>
    <h2 className="font-Poppins text-sm font-normal mt-2 p-4">Horários</h2>


    </div>

    <hr className="w-[90%] mt-3" />

    
    <form onSubmit={teste} >

    <input id="date" type="date" />
 
   <button>bora</button>

    </form>
  
   
   
    </>
 )

}