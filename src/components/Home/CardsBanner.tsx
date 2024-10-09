import { LinkBox, LinkOverlay, Box, Heading, Text } from "@chakra-ui/react";
import { RiMentalHealthFill } from "react-icons/ri";
import { GiButterflyKnife } from "react-icons/gi";
import { GiMedicalDrip } from "react-icons/gi";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { LiaLaptopMedicalSolid } from "react-icons/lia";





export default function CardsBanner() {
  interface Card {
    id: number;
    descricao: string;
    valor: number;
    icone: any;
  }

  let objetoCard: Card[] = [
    {
      id: 1,
      descricao: "Consulta Médica",
      valor: 99.99,
      icone: <RiMentalHealthFill />,
    },

    {
      id: 2,
      descricao: "Exames",
      valor: 18.99,
      icone: <GiMedicalDrip />,
    },

    {
        id: 3,
        descricao: "Cirurgias",
        valor: 199.99,
        icone: <GiButterflyKnife />,
      },


      {
        id: 4,
        descricao: "Procedimentos",
        valor: 99.99,
        icone: <LiaFileMedicalAltSolid />,
      },

      {
        id: 5,
        descricao: "Ultrassom",
        valor: 99.99,
        icone: <LiaLaptopMedicalSolid />,
      },
  ];



  return (
    <>
      <div className="flex max-w-full">
        
        {
            objetoCard.map((item) => {

             return(
                <LinkBox className="w-full rounded-sm border-x-[0.1px] border-black p-5">
                <Box >
                {item.descricao}
                {item.icone}
                </Box>
                <Heading size="md" my="2">
                  <LinkOverlay href="#">
                 A partir de
                  </LinkOverlay>
                </Heading>
                <Text mb="3">
                    {item.valor}
                </Text>
                <Box as="a" color="teal.400" href="#inner-link" fontWeight="bold">
                  Agendar Já
                </Box>
              </LinkBox>
             )
            })
        }
        
        
       
      </div>
    </>
  );
}
