import { FaHandHoldingMedical } from "react-icons/fa";
import { Link } from "react-router-dom";
import MedicoBanner from "../../assets/MedicosBanner.jpg"
import MenuMobile from "./MenuMobile";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="flex items-center justify-between w-full h-[95px] bg-[#53a4e7] shadow-sm shadow-black p-8">
          <div className="flex items-center gap-4 lg:gap-8">
            <FaHandHoldingMedical className="text-white text-4xl lg:text-6xl" />
            <Link
              to={"/QuemSomos"}
              className="font-Poppins font-semibold text-[14px] lg:text-[16px] text-[#fff] hidden lg:block"
            >
              Quem Somos
            </Link>
            <Link
              to={"/Unidades"}
              className="font-Poppins font-semibold text-[14px] lg:text-[16px] text-[#fff] hidden lg:block"
            >
              Unidades
            </Link>
          </div>

          <div className="flex items-center gap-4 lg:gap-8">
            <Link
              to={"/SouMedico"}
              className="font-Poppins font-semibold text-[14px] lg:text-[16px] text-[#fff] hidden lg:block"
            >
              Sou Médico
            </Link>
            <Link
              to={"/SouPaciente"}
              className="font-Poppins font-semibold text-[14px] lg:text-[16px] text-[#fff] hidden lg:block"
            >
              Sou Paciente
            </Link>
            <span className="block lg:hidden">
              <MenuMobile />
            </span>
          </div>
        </nav>

        <img
          src={MedicoBanner}
          className="w-full h-[700px] object-cover"
          alt="Banner médico"
        />
      </div>
    </>
  );
}
