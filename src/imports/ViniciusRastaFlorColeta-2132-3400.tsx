import svgPaths from "./svg-sy9l8ox5nl";

function Icon() {
  return (
    <div className="absolute left-[11.98px] size-[15.988px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2d4cee60} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M12.6569 7.99381H3.33076" id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[35.983px] left-[-7.99px] rounded-[8px] top-0 w-[213.218px]" data-name="Button">
      <Icon />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[123.46px] text-[#777777] text-[14px] text-center text-nowrap top-[5.99px] translate-x-[-50%] whitespace-pre">Voltar para Propriedades</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[23.981px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2cb55900} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99845" />
          <path d={svgPaths.pd7e4380} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99845" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="Heading 1">
      <Icon1 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[31.98px] text-[#1a1a1a] text-[16px] text-nowrap top-[-3px] whitespace-pre">Fazenda São João</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[16px]">São Paulo - SP</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[56px] relative shrink-0 w-[156.94px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.994px] h-[56px] items-start relative w-[156.94px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pb279400} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M12.497 4.80219V17.2992" id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M7.49822 2.69603V15.1931" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Áreas</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[27.989px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[20px]">3</p>
    </div>
  );
}

function DetalhesPropriedade() {
  return (
    <div className="h-[47.963px] relative shrink-0 w-[34.268px]" data-name="DetalhesPropriedade">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[47.963px] items-start relative w-[34.268px]">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[87.932px] relative shrink-0 w-[98.219px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.98px] h-[87.932px] items-center pl-[15.988px] pr-0 py-0 relative w-[98.219px]">
        <Icon2 />
        <DetalhesPropriedade />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[90.675px] relative rounded-[14px] shrink-0 w-[100.962px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[90.675px] items-start p-[1.372px] relative w-[100.962px]">
        <CardContent />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2132_3105)" id="Icon">
          <path d={svgPaths.p282ca80} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M9.99762 15.8296V18.329" id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2132_3105">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Matrizes</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[27.989px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[20px]">24</p>
    </div>
  );
}

function DetalhesPropriedade1() {
  return (
    <div className="h-[47.963px] relative shrink-0 w-[52.271px]" data-name="DetalhesPropriedade">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[47.963px] items-start relative w-[52.271px]">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="h-[87.932px] relative shrink-0 w-[116.221px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.98px] h-[87.932px] items-center pl-[15.988px] pr-0 py-0 relative w-[116.221px]">
        <Icon3 />
        <DetalhesPropriedade1 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[90.675px] relative rounded-[14px] shrink-0 w-[118.964px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[90.675px] items-start p-[1.372px] relative w-[118.964px]">
        <CardContent1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[90.675px] relative shrink-0 w-[231.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.98px] h-[90.675px] items-start relative w-[231.906px]">
        <Card />
        <Card1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex h-[90.675px] items-start justify-between left-0 top-[51.97px] w-[1741.52px]" data-name="Container">
      <Container />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[142.646px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container6 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[9.37px] size-[15.988px] top-[5.83px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2132_3414)" id="Icon">
          <path d={svgPaths.p3269e00} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p4b3d400} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p2c131800} id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p14877a00} id="Vector_4" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2132_3414">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="basis-0 grow h-[27.646px] min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[1.372px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.646px] relative w-full">
        <Icon4 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[75.83px] text-[#1a1a1a] text-[14px] text-center text-nowrap top-[1.84px] translate-x-[-50%] whitespace-pre">Visão Geral</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[9.37px] size-[15.988px] top-[5.83px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pafb3e00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M9.99227 3.8397V13.832" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M5.99536 2.15566V12.1479" id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="basis-0 bg-[#0f3d26] grow h-[27.646px] min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[1.372px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.646px] relative w-full">
        <Icon5 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[89.83px] text-[14px] text-center text-neutral-50 text-nowrap top-[1.84px] translate-x-[-50%] whitespace-pre">Áreas de Coleta</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[9.37px] size-[15.988px] top-[5.83px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2132_3109)" id="Icon">
          <path d={svgPaths.p3d46cff0} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M7.99381 12.6569V14.6553" id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2132_3109">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="basis-0 grow h-[27.646px] min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[1.372px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.646px] relative w-full">
        <Icon6 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[92.33px] text-[#1a1a1a] text-[14px] text-center text-nowrap top-[1.84px] translate-x-[-50%] whitespace-pre">Árvores Matrizes</p>
      </div>
    </div>
  );
}

function TabList() {
  return (
    <div className="bg-white h-[35.983px] relative rounded-[14px] shrink-0 w-[429.737px]" data-name="Tab List">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1.372px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[35.983px] items-center justify-center pb-[1.372px] pt-0 px-0 relative w-[429.737px]">
        <PrimitiveButton />
        <PrimitiveButton1 />
        <PrimitiveButton2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">Áreas de Coleta</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.974px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#777777] text-[14px] top-[-2px] w-[368px]">Subdivisões e áreas específicas dentro de Fazenda São João</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[47.963px] relative shrink-0 w-[367.415px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.986px] h-[47.963px] items-start relative w-[367.415px]">
        <Heading2 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[11.98px] size-[15.988px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33076 7.99381H12.6569" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M7.99381 3.33076V12.6569" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0f3d26] h-[35.983px] relative rounded-[8px] shrink-0 w-[186.279px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.983px] relative w-[186.279px]">
        <Icon7 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[109.46px] text-[14px] text-center text-neutral-50 text-nowrap top-[5.99px] translate-x-[-50%] whitespace-pre">Nova Área de Coleta</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[47.963px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[47.963px] items-center justify-between relative w-full">
          <Container8 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-[19.995px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p29a14300} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M12.497 4.8022V17.2992" id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M7.49822 2.69602V15.193" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[19.995px] relative shrink-0 w-[180.064px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.995px] relative w-[180.064px]">
        <Icon8 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[27.99px] text-[#1a1a1a] text-[16px] top-[-1.12px] w-[153px]">Áreas Cadastradas (3)</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[11.98px] size-[15.988px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2132_2805)" id="Icon">
          <path d={svgPaths.p10ffff20} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2132_2805">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0f3d26] h-[35.983px] relative rounded-[8px] shrink-0 w-[94.79px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.983px] relative w-[94.79px]">
        <Icon9 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[63.46px] text-[14px] text-center text-neutral-50 text-nowrap top-[5.99px] translate-x-[-50%] whitespace-pre">Filtros</p>
      </div>
    </div>
  );
}

function AbaAreasColeta() {
  return (
    <div className="h-[35.983px] relative shrink-0 w-[1690.81px]" data-name="AbaAreasColeta">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[35.983px] items-center justify-between relative w-[1690.81px]">
        <CardTitle />
        <Button2 />
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[44.62px] left-0 top-0 w-[246.115px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[9.98px] whitespace-pre">Nome da propriedade</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[44.62px] left-[246.12px] top-0 w-[277.812px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[9.98px] whitespace-pre">Proprietários</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[44.62px] left-[523.93px] top-0 w-[149.139px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[9.98px] whitespace-pre">Nº de áreas</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[44.62px] left-[673.07px] top-0 w-[333.168px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[9.98px] whitespace-pre">Áreas associadas</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[44.62px] left-[1006.23px] top-0 w-[197.895px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[9.98px] whitespace-pre">Extensão da área</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[44.62px] left-[1204.13px] top-0 w-[342.577px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[9.98px] whitespace-pre">Árvores matrizes associadas (Nº)</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute h-[44.62px] left-[1546.71px] top-0 w-[144.103px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[128.28px] text-[#777777] text-[14px] text-nowrap text-right top-[9.98px] translate-x-[-100%] whitespace-pre">Ações</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[44.62px] left-0 top-0 w-[1690.81px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1.372px] border-solid inset-0 pointer-events-none" />
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[44.62px] left-0 top-0 w-[1690.81px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[57.328px] left-0 top-0 w-[246.115px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[13.65px] whitespace-pre">Fazenda Santa Maria</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[57.328px] left-[246.12px] top-0 w-[277.812px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#777777] text-[16px] text-nowrap top-[13.65px] whitespace-pre">João Silva, Maria Santos</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[57.328px] left-[523.93px] top-0 w-[149.139px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[74.75px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[13.65px] translate-x-[-50%] whitespace-pre">3</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[57.328px] left-[673.07px] top-0 w-[333.168px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[16.67px] whitespace-pre">Área Norte, Área Sul, Área Central</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[57.328px] left-[1006.23px] top-0 w-[197.895px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[13.65px] whitespace-pre">250 ha</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[57.328px] left-[1204.13px] top-0 w-[342.577px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[171.66px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[13.65px] translate-x-[-50%] whitespace-pre">45</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2132_2801)" id="Icon">
          <path d={svgPaths.p23558000} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p23cc4600} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2132_2801">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[31.997px]">
        <Icon10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2132_2794)" id="Icon">
          <path d="M6.66151 7.32766V11.3246" id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M9.32611 7.32766V11.3246" id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p7f65140} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M1.99845 3.99691H13.9892" id="Vector_4" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p3a908c80} id="Vector_5" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2132_2794">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[31.997px]">
        <Icon11 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[31.997px] items-start justify-end left-[15.99px] top-[12.67px] w-[112.128px]" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[57.328px] left-[1546.71px] top-0 w-[144.103px]" data-name="Table Cell">
      <Container10 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[57.328px] left-0 top-0 w-[1690.81px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1.372px] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[57.328px] left-0 top-0 w-[246.115px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[13.65px] whitespace-pre">Sítio Boa Vista</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[57.328px] left-[246.12px] top-0 w-[277.812px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#777777] text-[16px] text-nowrap top-[13.65px] whitespace-pre">Carlos Mendes</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[57.328px] left-[523.93px] top-0 w-[149.139px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[74.75px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[13.65px] translate-x-[-50%] whitespace-pre">2</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[57.328px] left-[673.07px] top-0 w-[333.168px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[16.67px] whitespace-pre">Entrada Principal, Área Oeste</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[57.328px] left-[1006.23px] top-0 w-[197.895px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[13.65px] whitespace-pre">80 ha</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[57.328px] left-[1204.13px] top-0 w-[342.577px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[171.66px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[13.65px] translate-x-[-50%] whitespace-pre">28</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2132_2801)" id="Icon">
          <path d={svgPaths.p23558000} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p23cc4600} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2132_2801">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[31.997px]">
        <Icon12 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2132_2794)" id="Icon">
          <path d="M6.66151 7.32766V11.3246" id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M9.32611 7.32766V11.3246" id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p7f65140} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M1.99845 3.99691H13.9892" id="Vector_4" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p3a908c80} id="Vector_5" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2132_2794">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[31.997px]">
        <Icon13 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[31.997px] items-start justify-end left-[15.99px] top-[12.67px] w-[112.128px]" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[57.328px] left-[1546.71px] top-0 w-[144.103px]" data-name="Table Cell">
      <Container11 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[57.328px] left-0 top-[57.33px] w-[1690.81px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1.372px] border-solid inset-0 pointer-events-none" />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[57.328px] left-0 top-0 w-[246.115px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[13.65px] whitespace-pre">Fazenda Serra Verde</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[57.328px] left-[246.12px] top-0 w-[277.812px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#777777] text-[16px] text-nowrap top-[13.65px] whitespace-pre">Ana Costa</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[57.328px] left-[523.93px] top-0 w-[149.139px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[74.75px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[13.65px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[57.328px] left-[673.07px] top-0 w-[333.168px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[16.67px] whitespace-pre">Área Única</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[57.328px] left-[1006.23px] top-0 w-[197.895px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[13.65px] whitespace-pre">45 ha</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[57.328px] left-[1204.13px] top-0 w-[342.577px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[171.66px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[13.65px] translate-x-[-50%] whitespace-pre">12</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2132_2801)" id="Icon">
          <path d={svgPaths.p23558000} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p23cc4600} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2132_2801">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[31.997px]">
        <Icon14 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2132_2794)" id="Icon">
          <path d="M6.66151 7.32766V11.3246" id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M9.32611 7.32766V11.3246" id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p7f65140} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M1.99845 3.99691H13.9892" id="Vector_4" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p3a908c80} id="Vector_5" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2132_2794">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[31.997px]">
        <Icon15 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[31.997px] items-start justify-end left-[15.99px] top-[12.67px] w-[112.128px]" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[57.328px] left-[1546.71px] top-0 w-[144.103px]" data-name="Table Cell">
      <Container12 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[57.328px] left-0 top-[114.66px] w-[1690.81px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1.372px] border-solid inset-0 pointer-events-none" />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[171.985px] left-0 top-[44.62px] w-[1690.81px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function AbaAreasColeta1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1690.81px]" data-name="AbaAreasColeta">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[1690.81px]">
        <TableHeader />
        <TableBody />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[333.94px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[29.961px] h-[333.94px] items-start pl-[25.353px] pr-[1.372px] py-[25.353px] relative w-full">
          <AbaAreasColeta />
          <AbaAreasColeta1 />
        </div>
      </div>
    </div>
  );
}

function AbaAreasColeta2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1741.52px]" data-name="AbaAreasColeta">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[23.981px] h-full items-start relative w-[1741.52px]">
        <Container9 />
        <Card2 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[31.975px] h-[473.842px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <TabList />
      <AbaAreasColeta2 />
    </div>
  );
}

function DetalhesPropriedade2() {
  return (
    <div className="h-[704.463px] relative shrink-0 w-full" data-name="DetalhesPropriedade">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[23.981px] h-[704.463px] items-start pb-0 pt-[31.997px] px-[31.997px] relative w-full">
          <Container7 />
          <PrimitiveDiv />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 grow h-[851.759px] min-h-px min-w-px relative shrink-0" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[851.759px] items-start overflow-clip pb-0 pt-[63.993px] px-0 relative rounded-[inherit] w-full">
        <DetalhesPropriedade2 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f8f8f8] box-border content-stretch flex h-[851.759px] items-start left-0 pl-[255.995px] pr-0 py-0 top-0 w-[2061.5px]" data-name="App">
      <MainContent />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[18.002px] left-0 top-[-20000px] w-[12.944px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-neutral-950 text-nowrap top-[-0.63px] whitespace-pre">18</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">RastaFlor</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[16.009px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Módulo de Coleta</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[89.346px] items-start left-0 pb-[1.372px] pt-[23.981px] px-[23.981px] top-0 w-[254.623px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1.372px] border-solid inset-0 pointer-events-none" />
      <Heading1 />
      <Paragraph2 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p11c6a180} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p40e5e00} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[77.088px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[77.088px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[23.98px] w-[222.648px]" data-name="Button">
      <Icon16 />
      <Text1 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2132_2808)" id="Icon">
          <path d={svgPaths.p2c43f500} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.pf44ec80} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2132_2808">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[95.926px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[95.926px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-neutral-50 text-nowrap whitespace-pre">Propriedades</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[#0f3d26] box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[75.95px] w-[222.648px]" data-name="Button">
      <Icon17 />
      <Text2 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2780b00} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.pa78a780} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[59.064px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[59.064px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Espécies</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[127.92px] w-[222.648px]" data-name="Button">
      <Icon18 />
      <Text3 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2131_1123)" id="Icon">
          <path d={svgPaths.p326f3200} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1123">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[51.863px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[51.863px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Coletas</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[179.89px] w-[222.648px]" data-name="Button">
      <Icon19 />
      <Text4 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2131_1114)" id="Icon">
          <path d={svgPaths.p29bb3800} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.pd4c5e80} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1114">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[117.914px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[117.914px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Monitoramentos</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[231.86px] w-[222.648px]" data-name="Button">
      <Icon20 />
      <Text5 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2131_1110)" id="Icon">
          <path d={svgPaths.p18bc3000} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p32fe3a00} fill="var(--fill-0, #1A1A1A)" id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1110">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[52.978px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[52.978px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Rótulos</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[283.83px] w-[222.648px]" data-name="Button">
      <Icon21 />
      <Text6 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2131_1358)" id="Icon">
          <path d={svgPaths.p34021000} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.pac57780} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M8.33135 7.49822H6.66508" id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M13.3302 10.8308H6.66508" id="Vector_4" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M13.3302 14.1633H6.66508" id="Vector_5" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1358">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[69.865px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[69.865px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Relatórios</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[335.8px] w-[222.648px]" data-name="Button">
      <Icon22 />
      <Text7 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2131_1190)" id="Icon">
          <path d={svgPaths.pfe47d50} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p2d75ff00} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p2e29ff80} id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p359b1c80} id="Vector_4" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1190">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[48.199px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[48.199px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Equipe</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[387.77px] w-[222.648px]" data-name="Button">
      <Icon23 />
      <Text8 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[591.735px] left-0 overflow-clip top-[89.35px] w-[254.623px]" data-name="Navigation">
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[13.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1f381e00} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16621" />
          <path d="M2.33242 4.08174H11.6621" id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16621" />
          <path d={svgPaths.p3cb7e600} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16621" />
          <path d="M11.6621 9.91279H2.33242" id="Vector_4" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16621" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow h-[39.99px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.99px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#777777] text-[14px] top-[-2px] w-[153px]">Alternar para Módulo de Restauração</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="h-[67.98px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[11.98px] h-[67.98px] items-center px-[11.98px] py-0 relative w-full">
          <Icon24 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[101.326px] items-start left-0 pb-0 pt-[17.359px] px-[15.988px] top-[681.08px] w-[254.623px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button17 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20.981px] relative shrink-0 w-[13.737px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.981px] items-start relative w-[13.737px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">JP</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#f0f0f0] relative rounded-[4.6023e+07px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.997px]">
        <Text10 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[19.995px] items-start left-0 overflow-clip top-0 w-[178.671px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[14px]">João Paulo</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[16.009px] items-start left-0 overflow-clip top-[20px] w-[178.671px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Gestor Ambiental</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 grow h-[36.004px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36.004px] relative w-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[11.98px] h-[36.004px] items-center relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[69.351px] items-start left-0 pb-0 pt-[17.359px] px-[15.988px] top-[782.41px] w-[254.623px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container17 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white h-[851.759px] left-0 top-0 w-[255.995px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_1.372px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container13 />
      <Navigation />
      <Container14 />
      <Container18 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2131_1106)" id="Icon">
          <path d={svgPaths.p10519300} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p177c4c80} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1106">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[35.983px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.021px] py-0 relative size-[35.983px]">
        <Icon25 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2131_1095)" id="Icon">
          <path d={svgPaths.pe07670} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M7.99381 1.3323V2.6646" id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M7.99381 13.323V14.6553" id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p289cff80} id="Vector_4" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p35769a00} id="Vector_5" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M1.3323 7.99381H2.6646" id="Vector_6" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M13.323 7.99381H14.6553" id="Vector_7" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p26446b80} id="Vector_8" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p2143a8a0} id="Vector_9" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1095">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[35.983px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[35.983px]">
        <Icon26 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pcc8f00} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p6eb7580} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[35.983px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[35.983px]">
        <Icon27 />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[11.98px] h-[63.993px] items-center justify-end left-[255.99px] pb-[1.372px] pl-0 pr-[23.981px] pt-0 top-0 w-[1805.51px]" data-name="TopBar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1.372px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Button18 />
      <Button19 />
      <Button20 />
    </div>
  );
}

export default function ViniciusRastaFlorColeta() {
  return (
    <div className="bg-white relative size-full" data-name="Vinicius - Rasta Flor | Coleta">
      <App />
      <Text />
      <Sidebar />
      <TopBar />
    </div>
  );
}