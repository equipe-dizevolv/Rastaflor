import svgPaths from "./svg-r99owwhwjs";

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
        <g clipPath="url(#clip0_2132_3099)" id="Icon">
          <path d={svgPaths.p3269e00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p4b3d400} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p2c131800} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p14877a00} id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2132_3099">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="basis-0 bg-[#0f3d26] grow h-[27.646px] min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[1.372px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.646px] relative w-full">
        <Icon4 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[75.83px] text-[14px] text-center text-neutral-50 text-nowrap top-[1.84px] translate-x-[-50%] whitespace-pre">Visão Geral</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[9.37px] size-[15.988px] top-[5.83px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pafb3e00} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M9.99227 3.8397V13.832" id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M5.99536 2.15566V12.1479" id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="basis-0 grow h-[27.646px] min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[1.372px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.646px] relative w-full">
        <Icon5 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[89.83px] text-[#1a1a1a] text-[14px] text-center text-nowrap top-[1.84px] translate-x-[-50%] whitespace-pre">Áreas de Coleta</p>
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

function CardTitle() {
  return (
    <div className="absolute h-[16.009px] left-[25.35px] top-[25.35px] w-[808.061px]" data-name="CardTitle">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-3.11px] whitespace-pre">Informações Principais</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p30fa1780} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.pc1b78f1} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Proprietários</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">João da Silva, Maria Santos</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow h-[47.963px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.986px] h-[47.963px] items-start relative w-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function AbaVisaoGeral() {
  return (
    <div className="absolute content-stretch flex gap-[11.98px] h-[47.963px] items-start left-[23.98px] top-0 w-[808.061px]" data-name="AbaVisaoGeral">
      <Icon7 />
      <Container10 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2132_3085)" id="Icon">
          <path d={svgPaths.p2c43f500} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.pf44ec80} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2132_3085">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Endereço</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">Estrada Municipal km 15, Zona Rural</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">São Paulo - SP</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow h-[71.923px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.986px] h-[71.923px] items-start relative w-full">
        <Container11 />
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function AbaVisaoGeral1() {
  return (
    <div className="absolute content-stretch flex gap-[11.98px] h-[71.923px] items-start left-[23.98px] top-[63.95px] w-[808.061px]" data-name="AbaVisaoGeral">
      <Icon8 />
      <Container14 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p23edf4c0} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p13c02880} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p2205f300} id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p4bfd700} id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Área Total</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">250 hectares</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 grow h-[47.963px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.986px] h-[47.963px] items-start relative w-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function AbaVisaoGeral2() {
  return (
    <div className="absolute content-stretch flex gap-[11.98px] h-[47.963px] items-start left-[23.98px] top-[151.86px] w-[808.061px]" data-name="AbaVisaoGeral">
      <Icon9 />
      <Container17 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2132_3076)" id="Icon">
          <path d={svgPaths.p2e6d5900} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2132_3076">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Coordenadas GPS</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">-23.5505, -46.6333</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 grow h-[47.963px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.986px] h-[47.963px] items-start relative w-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function AbaVisaoGeral3() {
  return (
    <div className="absolute content-stretch flex gap-[11.98px] h-[47.963px] items-start left-[23.98px] top-[215.81px] w-[808.061px]" data-name="AbaVisaoGeral">
      <Icon10 />
      <Container20 />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="absolute h-[287.756px] left-[1.37px] top-[71.32px] w-[856.024px]" data-name="CardContent">
      <AbaVisaoGeral />
      <AbaVisaoGeral1 />
      <AbaVisaoGeral2 />
      <AbaVisaoGeral3 />
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-white h-[392.683px] left-0 rounded-[14px] top-0 w-[858.767px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle />
      <CardContent2 />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="absolute h-[16.009px] left-[25.35px] top-[25.35px] w-[808.061px]" data-name="CardTitle">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-3.11px] whitespace-pre">Resumo de Atividades</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Áreas de Coleta</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[31.997px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[24px]">3</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[55.957px] relative shrink-0 w-[96.912px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.986px] h-[55.957px] items-start relative w-[96.912px]">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[31.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p13a10a80} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66639" />
          <path d="M19.9979 7.68455V27.6825" id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66639" />
          <path d="M11.9988 4.31421V24.3121" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66639" />
        </g>
      </svg>
    </div>
  );
}

function AbaVisaoGeral4() {
  return (
    <div className="bg-[#f8f8f8] h-[90.675px] relative rounded-[10px] shrink-0 w-full" data-name="AbaVisaoGeral">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[90.675px] items-center justify-between px-[17.359px] py-[1.372px] relative w-full">
          <Container23 />
          <Icon11 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Árvores Matrizes</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[31.997px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[24px]">24</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[55.957px] relative shrink-0 w-[102.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.986px] h-[55.957px] items-start relative w-[102.998px]">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[31.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2ce61400} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66639" />
          <path d="M15.9983 25.3307V29.3303" id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66639" />
        </g>
      </svg>
    </div>
  );
}

function AbaVisaoGeral5() {
  return (
    <div className="bg-[#f8f8f8] h-[90.675px] relative rounded-[10px] shrink-0 w-full" data-name="AbaVisaoGeral">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[90.675px] items-center justify-between px-[17.359px] py-[1.372px] relative w-full">
          <Container26 />
          <Icon12 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Última Coleta</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-nowrap whitespace-pre">12/10/2025</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[47.963px] relative shrink-0 w-[83.56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.986px] h-[47.963px] items-start relative w-[83.56px]">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[11.98px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[11.98px]">
        <p className="font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-green-600 text-nowrap whitespace-pre">✓</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-green-600 relative rounded-[4.6023e+07px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.997px]">
        <Text />
      </div>
    </div>
  );
}

function AbaVisaoGeral6() {
  return (
    <div className="bg-[#f8f8f8] h-[82.681px] relative rounded-[10px] shrink-0 w-full" data-name="AbaVisaoGeral">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[82.681px] items-center justify-between px-[17.359px] py-[1.372px] relative w-full">
          <Container29 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[15.988px] h-[319.988px] items-start left-[1.37px] px-[23.981px] py-0 top-[71.32px] w-[856.024px]" data-name="CardContent">
      <AbaVisaoGeral4 />
      <AbaVisaoGeral5 />
      <AbaVisaoGeral6 />
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-white h-[392.683px] left-[882.75px] rounded-[14px] top-0 w-[858.767px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle1 />
      <CardContent3 />
    </div>
  );
}

function AbaVisaoGeral7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1741.52px]" data-name="AbaVisaoGeral">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[1741.52px]">
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[31.975px] h-[460.641px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <TabList />
      <AbaVisaoGeral7 />
    </div>
  );
}

function DetalhesPropriedade2() {
  return (
    <div className="h-[691.261px] relative shrink-0 w-full" data-name="DetalhesPropriedade">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[23.981px] h-[691.261px] items-start pb-0 pt-[31.997px] px-[31.997px] relative w-full">
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

function Text1() {
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

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16.009px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Módulo de Coleta</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[89.346px] items-start left-0 pb-[1.372px] pt-[23.981px] px-[23.981px] top-0 w-[254.623px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1.372px] border-solid inset-0 pointer-events-none" />
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Icon13() {
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

function Text2() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[77.088px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[77.088px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[23.98px] w-[222.648px]" data-name="Button">
      <Icon13 />
      <Text2 />
    </div>
  );
}

function Icon14() {
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

function Text3() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[95.926px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[95.926px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-neutral-50 text-nowrap whitespace-pre">Propriedades</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#0f3d26] box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[75.95px] w-[222.648px]" data-name="Button">
      <Icon14 />
      <Text3 />
    </div>
  );
}

function Icon15() {
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

function Text4() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[59.064px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[59.064px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Espécies</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[127.92px] w-[222.648px]" data-name="Button">
      <Icon15 />
      <Text4 />
    </div>
  );
}

function Icon16() {
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

function Text5() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[51.863px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[51.863px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Coletas</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[179.89px] w-[222.648px]" data-name="Button">
      <Icon16 />
      <Text5 />
    </div>
  );
}

function Icon17() {
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

function Text6() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[117.914px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[117.914px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Monitoramentos</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[231.86px] w-[222.648px]" data-name="Button">
      <Icon17 />
      <Text6 />
    </div>
  );
}

function Icon18() {
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

function Text7() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[52.978px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[52.978px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Rótulos</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[283.83px] w-[222.648px]" data-name="Button">
      <Icon18 />
      <Text7 />
    </div>
  );
}

function Icon19() {
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

function Text8() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[69.865px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[69.865px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Relatórios</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[335.8px] w-[222.648px]" data-name="Button">
      <Icon19 />
      <Text8 />
    </div>
  );
}

function Icon20() {
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

function Text9() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[48.199px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[48.199px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Equipe</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[387.77px] w-[222.648px]" data-name="Button">
      <Icon20 />
      <Text9 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[591.735px] left-0 overflow-clip top-[89.35px] w-[254.623px]" data-name="Navigation">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Icon21() {
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

function Text10() {
  return (
    <div className="basis-0 grow h-[39.99px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.99px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#777777] text-[14px] top-[-2px] w-[153px]">Alternar para Módulo de Restauração</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[67.98px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[11.98px] h-[67.98px] items-center px-[11.98px] py-0 relative w-full">
          <Icon21 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[101.326px] items-start left-0 pb-0 pt-[17.359px] px-[15.988px] top-[681.08px] w-[254.623px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button9 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20.981px] relative shrink-0 w-[13.737px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.981px] items-start relative w-[13.737px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">JP</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#f0f0f0] relative rounded-[4.6023e+07px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.997px]">
        <Text11 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[19.995px] items-start left-0 overflow-clip top-0 w-[178.671px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[14px]">João Paulo</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[16.009px] items-start left-0 overflow-clip top-[20px] w-[178.671px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Gestor Ambiental</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 grow h-[36.004px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36.004px] relative w-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[11.98px] h-[36.004px] items-center relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[69.351px] items-start left-0 pb-0 pt-[17.359px] px-[15.988px] top-[782.41px] w-[254.623px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container35 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white h-[851.759px] left-0 top-0 w-[255.995px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_1.372px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container31 />
      <Navigation />
      <Container32 />
      <Container36 />
    </div>
  );
}

function Icon22() {
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

function Button10() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[35.983px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.021px] py-0 relative size-[35.983px]">
        <Icon22 />
      </div>
    </div>
  );
}

function Icon23() {
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

function Button11() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[35.983px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[35.983px]">
        <Icon23 />
      </div>
    </div>
  );
}

function Icon24() {
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

function Button12() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[35.983px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[35.983px]">
        <Icon24 />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[11.98px] h-[63.993px] items-center justify-end left-[255.99px] pb-[1.372px] pl-0 pr-[23.981px] pt-0 top-0 w-[1805.51px]" data-name="TopBar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1.372px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Button10 />
      <Button11 />
      <Button12 />
    </div>
  );
}

export default function ViniciusRastaFlorColeta() {
  return (
    <div className="bg-white relative size-full" data-name="Vinicius - Rasta Flor | Coleta">
      <App />
      <Text1 />
      <Sidebar />
      <TopBar />
    </div>
  );
}