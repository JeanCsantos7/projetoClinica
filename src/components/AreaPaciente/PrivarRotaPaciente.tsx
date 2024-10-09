
import {auth} from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";


interface Props{
  children : JSX.Element
}

export default function PrivarRotaPaciente({children} : Props) {
  const [user] = useAuthState(auth);

 


  return user ? children : <Navigate to="/SouPaciente" />;
}
