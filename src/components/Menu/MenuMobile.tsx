import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
   
  } from '@chakra-ui/react'

  import { IoMenu } from "react-icons/io5";
  import { useNavigate } from 'react-router-dom';




  export default function MenuMobile()
  {

   const navigate = useNavigate()

   return(
    <Menu>
    <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<IoMenu/>}
      variant='outline'
      bg={"white"}
      border={'none'}
      color={'#117cd4'}

     
    />
    <MenuList>
      <MenuItem onClick={() => navigate("/QuemSomos")}>
        Quem Somos
      </MenuItem>
      <MenuItem onClick={() => navigate("/Unidades")}  >
        Unidades
      </MenuItem>
      <MenuItem onClick={() => navigate("/SouMedico")} >
        Sou Médico
      </MenuItem>
      <MenuItem onClick={() => navigate("/SouPaciente")}  >
        Sou Paciente
      </MenuItem>
    </MenuList>
  </Menu>

   )

  }