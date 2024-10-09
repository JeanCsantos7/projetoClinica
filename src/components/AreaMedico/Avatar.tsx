import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Avatar() {
  const auth = getAuth();
  const [nomeAutenticado, setNomeAutenticado] = useState<string | null>();
  const[emailAutenticado, setEmailAutenticado] = useState<string | null>()

  useEffect(() => {
    const nome = auth.currentUser?.displayName
    const email = auth.currentUser?.email
    setEmailAutenticado(email)
    setNomeAutenticado(nome);
  }, [auth]);

  const people = [
    {
      name: nomeAutenticado,
      email: emailAutenticado,
      imageUrl:"https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
  ];

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4 p-4">
            <img
              alt=""
              src={person.imageUrl}
              className="h-14 w-14 flex-none rounded-full bg-gray-50"
            />
            <div className="min-w-0 flex-auto">
              <p className=" font-Poppins font-normal text-lg font-semibold leading-6 text-gray-900">
              Dr(a). {person.name}
              </p>
              <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                {person.email}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
         
         
          
          </div>
        </li>
      ))}
    </ul>
  );
}
