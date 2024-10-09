import imagemGrid from "../../assets/imagemGrid.jpeg"

interface ImageType {
  src: string;
  alt?: string;
}

interface ProductType {
  images: ImageType[];
}

const gridImage: ProductType = {
  images: [
    {
      src: imagemGrid,
      alt: "Pessoa sendo atendida por um médico medindo sua pressão.",
    },
  ],
};

export default function ImageGrid() {
  return (
    <div className="w-full bg-[#53a4e7] py-12 ">
      {/* Título */}
      <div className="text-center">
        <h1 className="text-[#fff] font-bold font-Poppins text-2xl lg:text-3xl">
          Saúde de qualidade é para todos,
          <br />
          para qualquer dia e lugar
        </h1>
      </div>

      {/* Grid principal */}
      <div className="mt-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-0">
        {/* Coluna da imagem */}
        <div className="overflow-hidden rounded-lg">
          <img
            alt={gridImage.images[0].alt}
            src={gridImage.images[0].src}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        {/* Coluna dos cards de informações */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="bg-[#fff] p-4 rounded-lg shadow-md">
            <p className="text-[#53a4e7] font-semibold">
              Seja atendido por profissionais qualificados, usando equipamentos de alta tecnologia, com alta precisão.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fff] p-4 rounded-lg shadow-md">
            <p className="text-[#53a4e7] font-semibold">
              Agende seu retorno em até 30 dias sem custo.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fff] p-4 rounded-lg shadow-md">
            <p className="text-[#53a4e7] font-semibold">
              Controle todo seu histórico médico pelo aplicativo.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#fff] p-4 rounded-lg shadow-md">
            <p className="text-[#53a4e7] font-semibold">
              Pague de forma facilitada, com exames em até 10x sem juros.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#fff] p-4 rounded-lg shadow-md">
            <p className="text-[#53a4e7] font-semibold">
              Agende pelo aplicativo, site ou telefone, até para o mesmo dia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
