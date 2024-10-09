
import { auth } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";





interface Props{
   children : JSX.Element
}


export default function PrivarRotaMedicos({children} : Props) {
  const [user, loading] = useAuthState(auth);
  
   if(loading)
   {
     <p>Carregando..</p>
 
   }


  return user ? children : <Navigate to="/SouMedico" />;
}
