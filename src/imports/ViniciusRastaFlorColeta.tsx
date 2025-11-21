import svgPaths from "./svg-05g5wcaap8";

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-50 text-nowrap top-[-2px] whitespace-pre">RastaFlor</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#c7e4d5] text-[14px]">Módulo de Coleta</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[100px] items-start left-0 pb-0 pt-[24px] px-[24px] top-0 w-[255px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1db6d780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[77.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[77.109px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1a5c3e] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[48px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Icon />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[19.219px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p20367600} id="Vector" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60156" />
          <path d={svgPaths.p1e4ea300} id="Vector_2" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60156" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#c7e4d5] text-[16px] top-[-2px] w-[111px]">{`Propriedades & Matrizes`}</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[72px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[72px] items-center px-[16px] py-0 relative w-full">
          <Icon1 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p22fbb500} id="Vector" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p40b5600} id="Vector_2" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.078px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#c7e4d5] text-[16px] text-nowrap top-[-2px] whitespace-pre">Espécies</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[48px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Icon2 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1f5efd00} id="Vector" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[51.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[51.875px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#c7e4d5] text-[16px] text-nowrap top-[-2px] whitespace-pre">Coletas</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[48px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Icon3 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p23f24400} id="Vector" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[117.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[117.969px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#c7e4d5] text-[16px] text-nowrap top-[-2px] whitespace-pre">Monitoramentos</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[48px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Icon4 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2127_920)" id="Icon">
          <path d={svgPaths.p7c86470} id="Vector" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pefbf980} fill="var(--fill-0, #C7E4D5)" id="Vector_2" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2127_920">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[53px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[53px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#c7e4d5] text-[16px] text-nowrap top-[-2px] whitespace-pre">Rótulos</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[48px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Icon5 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31172880} id="Vector" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[69.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[69.891px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#c7e4d5] text-[16px] text-nowrap top-[-2px] whitespace-pre">Relatórios</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[48px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Icon6 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p18406864} id="Vector_2" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_4" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48.219px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#c7e4d5] text-[16px] text-nowrap top-[-2px] whitespace-pre">Equipe</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[48px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Icon7 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[506px] items-start left-0 px-[12px] py-0 top-[100px] w-[255px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14.266px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p35fdc80} id="Vector" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1888" />
          <path d="M2.3776 4.16081H11.888" id="Vector_2" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1888" />
          <path d={svgPaths.p36e19a40} id="Vector_3" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1888" />
          <path d="M11.888 10.1048H2.3776" id="Vector_4" stroke="var(--stroke-0, #C7E4D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1888" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[82.75px] text-[#c7e4d5] text-[14px] text-center top-[-2px] translate-x-[-50%] w-[153px]">Alternar para Módulo de Restauração</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[64px] items-center left-[16px] px-[16px] py-0 rounded-[10px] top-[606px] w-[223px]" data-name="Button">
      <Icon8 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[14.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[14.672px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-50 text-nowrap top-[-2px] whitespace-pre">JP</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-green-600 relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-[40px]">
        <Text9 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-50">João Paulo</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#c7e4d5] text-[12px]">Gestor Ambiental</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start relative w-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#0a2a1a] h-[64px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[64px] items-center px-[12px] py-0 relative w-full">
          <Container2 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[97px] items-start left-0 pb-0 pt-[17px] px-[16px] top-[682px] w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#0a2a1a] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function NavContent() {
  return (
    <div className="h-[779px] relative shrink-0 w-full" data-name="NavContent">
      <Container />
      <Container1 />
      <Button8 />
      <Container5 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-[#0f3d26] h-[779px] relative shrink-0 w-[256px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#0a2a1a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[779px] items-start pl-0 pr-px py-0 relative w-[256px]">
        <NavContent />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1a1a1a] text-[24px] text-nowrap top-[-2px] whitespace-pre">Dashboard</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#777777] text-[16px] text-nowrap top-[-2px] whitespace-pre">Visão geral do Módulo de Coleta</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[68px] relative shrink-0 w-[232.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[68px] items-start relative w-[232.547px]">
        <Heading1 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#0f3d26] h-[36px] relative rounded-[8px] shrink-0 w-[135.766px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[135.766px]">
        <Icon9 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[84.5px] text-[14px] text-center text-neutral-50 text-nowrap top-[6px] translate-x-[-50%] whitespace-pre">Dicas de uso</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[68px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Button9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pa24cf50} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p40b5600} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[266px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[266px]">
        <Icon10 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[#1a1a1a] text-[16px] text-nowrap top-0 whitespace-pre">Total de árvores matrizes</p>
      </div>
    </div>
  );
}

function DashboardPrincipal() {
  return (
    <div className="h-[48px] relative shrink-0 w-[266px]" data-name="DashboardPrincipal">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[266px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#1a1a1a] text-[48px] text-nowrap top-[-5px] whitespace-pre">87</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start pb-px pl-[25px] pr-px pt-[25px] relative size-full">
          <CardTitle />
          <DashboardPrincipal />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1e9e2f00} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p19e0f880} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 17.5H15.8333" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[266px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[266px]">
        <Icon11 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[#1a1a1a] text-[16px] text-nowrap top-0 whitespace-pre">Espécies cadastradas (Total)</p>
      </div>
    </div>
  );
}

function DashboardPrincipal1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[266px]" data-name="DashboardPrincipal">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[266px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#1a1a1a] text-[48px] text-nowrap top-[-5px] whitespace-pre">23</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start pb-px pl-[25px] pr-px pt-[25px] relative size-full">
          <CardTitle1 />
          <DashboardPrincipal1 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2fedb580} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 18.3333V10" id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ad3bc70} id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.25 3.55834L13.75 7.85" id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="absolute h-[20px] left-[25px] top-[25px] w-[266px]" data-name="CardTitle">
      <Icon12 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[#1a1a1a] text-[16px] text-nowrap top-0 whitespace-pre">Sementes colhidas (Total)</p>
    </div>
  );
}

function DashboardPrincipal2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="DashboardPrincipal">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#1a1a1a] text-[48px] text-nowrap top-[-5px] whitespace-pre">42 kg</p>
    </div>
  );
}

function DashboardPrincipal3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="DashboardPrincipal">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#777777] text-[16px] text-nowrap top-[-2px] whitespace-pre">Este mês: 8.5 kg</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[104px] items-start left-px px-[24px] py-0 top-[75px] w-[314px]" data-name="CardContent">
      <DashboardPrincipal2 />
      <DashboardPrincipal3 />
    </div>
  );
}

function Card2() {
  return (
    <div className="[grid-area:1_/_3] bg-white relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle2 />
      <CardContent />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3ac0b600} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3c797180} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="absolute h-[20px] left-[25px] top-[25px] w-[266px]" data-name="CardTitle">
      <Icon13 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[#1a1a1a] text-[16px] text-nowrap top-0 whitespace-pre">Coletas realizadas</p>
    </div>
  );
}

function DashboardPrincipal4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="DashboardPrincipal">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#1a1a1a] text-[48px] text-nowrap top-[-5px] whitespace-pre">156</p>
    </div>
  );
}

function DashboardPrincipal5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="DashboardPrincipal">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#777777] text-[16px] text-nowrap top-[-2px] whitespace-pre">Este mês: 24 coletas</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[104px] items-start left-px px-[24px] py-0 top-[75px] w-[314px]" data-name="CardContent">
      <DashboardPrincipal4 />
      <DashboardPrincipal5 />
    </div>
  );
}

function Card3() {
  return (
    <div className="[grid-area:1_/_4] bg-white relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle3 />
      <CardContent1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[180px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function CalendarioFenologico() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-[238.06px] top-[-3px] w-[59.938px]" data-name="CalendarioFenologico">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[16px] text-green-600 text-nowrap whitespace-pre">Outubro</p>
    </div>
  );
}

function CardTitle4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Calendário Mensal das Espécies -</p>
      <CalendarioFenologico />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Espécies em diferentes estágios fenológicos neste mês</p>
    </div>
  );
}

function CalendarioFenologico1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[336.688px]" data-name="CalendarioFenologico">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[40px] items-start relative w-[336.688px]">
        <CardTitle4 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p17f2dd80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p232c4380} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 8.33333V18.3333" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p112f4f80} id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p86dd400} id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Florescendo</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[113.391px]" data-name="Container">
      <Icon14 />
      <Heading2 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[135.61px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[#0f3d26] h-[32px] left-0 rounded-[8px] top-[40px] w-[412.656px]" data-name="Button">
      <Icon15 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[222.11px] text-[14px] text-center text-neutral-50 text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">Adicionar Espécie</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Ipê-amarelo</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Handroanthus chrysotrichus</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f8f8f8] h-[70px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[70px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Cedrela fissilis</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#f8f8f8] h-[46px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[46px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Peroba-rosa</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Aspidosperma polyneuron</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f8f8f8] h-[70px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[70px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container15 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[210px] items-start left-0 top-[88px] w-[412.656px]" data-name="Container">
      <Container12 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[298px] left-0 top-0 w-[412.656px]" data-name="Container">
      <Container9 />
      <Button10 />
      <Container18 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1e9e2f00} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p19e0f880} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 17.5H15.8333" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Frutificando</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[112px]" data-name="Container">
      <Icon16 />
      <Heading3 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[135.61px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[#0f3d26] h-[32px] left-0 rounded-[8px] top-[40px] w-[412.672px]" data-name="Button">
      <Icon17 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[222.11px] text-[14px] text-center text-neutral-50 text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">Adicionar Espécie</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Pau-marfim</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Balfourodendron riedelianum</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f8f8f8] h-[70px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[70px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container21 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Jequitibá-rosa</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Cariniana legalis</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#f8f8f8] h-[70px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[70px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container24 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[152px] items-start left-0 top-[88px] w-[412.672px]" data-name="Container">
      <Container23 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[298px] left-[436.66px] top-0 w-[412.672px]" data-name="Container">
      <Container20 />
      <Button11 />
      <Container27 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p28cb780} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1c582c00} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 9.16667H18.3333" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1192bd80} id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.75 12.9167H16.25" id="Vector_5" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 9.16667L7.5 3.33333" id="Vector_6" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 9.16667L8.33333 16.6667" id="Vector_7" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Coletadas</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[97.438px]" data-name="Container">
      <Icon18 />
      <Heading4 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[138.77px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-[#0f3d26] h-[32px] left-0 rounded-[8px] top-[40px] w-[412.656px]" data-name="Button">
      <Icon19 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[222.27px] text-[14px] text-center text-neutral-50 text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">Adicionar Coleta</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Aroeira-pimenteira</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Schinus terebinthifolius</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#f8f8f8] h-[70px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[70px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container30 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Ipê-amarelo</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Handroanthus chrysotrichus</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#f8f8f8] h-[70px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[70px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[152px] items-start left-0 top-[88px] w-[412.656px]" data-name="Container">
      <Container32 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[298px] left-[873.33px] top-0 w-[412.656px]" data-name="Container">
      <Container29 />
      <Button12 />
      <Container36 />
    </div>
  );
}

function CalendarioFenologico2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1286px]" data-name="CalendarioFenologico">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[1286px]">
        <Container19 />
        <Container28 />
        <Container37 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[418px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] h-[418px] items-start pl-[25px] pr-px py-[25px] relative w-full">
          <CalendarioFenologico1 />
          <CalendarioFenologico2 />
        </div>
      </div>
    </div>
  );
}

function CalendarioFenologico3() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-[238.73px] top-[-3px] w-[59.938px]" data-name="CalendarioFenologico">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[16px] text-green-600 text-nowrap whitespace-pre">Outubro</p>
    </div>
  );
}

function CardTitle5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Calendário Mensal das Matrizes -</p>
      <CalendarioFenologico3 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Árvores-matrizes monitoradas neste mês</p>
    </div>
  );
}

function CalendarioFenologico4() {
  return (
    <div className="h-[40px] relative shrink-0 w-[1286px]" data-name="CalendarioFenologico">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[40px] items-start relative w-[1286px]">
        <CardTitle5 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p17f2dd80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p232c4380} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 8.33333V18.3333" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p112f4f80} id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p86dd400} id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Florescendo</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[113.391px]" data-name="Container">
      <Icon20 />
      <Heading5 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[138.7px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[#0f3d26] h-[32px] left-0 rounded-[8px] top-[40px] w-[412.656px]" data-name="Button">
      <Icon21 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[222.2px] text-[14px] text-center text-neutral-50 text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">Adicionar Matriz</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a1a1a] text-[14px] top-[-2px] w-[199px]">Ipê-amarelo - ID: IPE-00001-F24</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Handroanthus chrysotrichus</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Fazenda São João</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#f8f8f8] h-[86px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[86px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container39 />
          <Container40 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a1a1a] text-[14px] top-[-2px] w-[168px]">Cedro - ID: CED-00002-F24</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Cedrela fissilis</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Sítio Primavera</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#f8f8f8] h-[86px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[86px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container43 />
          <Container44 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a1a1a] text-[14px] top-[-2px] w-[203px]">Peroba-rosa - ID: PER-00003-F24</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Aspidosperma polyneuron</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Chácara Verde</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#f8f8f8] h-[86px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[86px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container47 />
          <Container48 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[282px] items-start left-0 top-[88px] w-[412.656px]" data-name="Container">
      <Container42 />
      <Container46 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[370px] left-0 top-0 w-[412.656px]" data-name="Container">
      <Container38 />
      <Button13 />
      <Container51 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1e9e2f00} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p19e0f880} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 17.5H15.8333" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Frutificando</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[112px]" data-name="Container">
      <Icon22 />
      <Heading6 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[138.7px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-[#0f3d26] h-[32px] left-0 rounded-[8px] top-[40px] w-[412.672px]" data-name="Button">
      <Icon23 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[222.2px] text-[14px] text-center text-neutral-50 text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">Adicionar Matriz</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a1a1a] text-[14px] top-[-2px] w-[202px]">Pau-marfim - ID: PAU-00001-F24</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Balfourodendron riedelianum</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Fazenda São João</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#f8f8f8] h-[86px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[86px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container54 />
          <Container55 />
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a1a1a] text-[14px] top-[-2px] w-[215px]">Jequitibá-rosa - ID: JEQ-00002-F24</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Cariniana legalis</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Sítio Primavera</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#f8f8f8] h-[86px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[86px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container58 />
          <Container59 />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[184px] items-start left-0 top-[88px] w-[412.672px]" data-name="Container">
      <Container57 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[370px] left-[436.66px] top-0 w-[412.672px]" data-name="Container">
      <Container53 />
      <Button14 />
      <Container62 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p28cb780} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1c582c00} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 9.16667H18.3333" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1192bd80} id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.75 12.9167H16.25" id="Vector_5" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 9.16667L7.5 3.33333" id="Vector_6" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 9.16667L8.33333 16.6667" id="Vector_7" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Coletadas</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[97.438px]" data-name="Container">
      <Icon24 />
      <Heading7 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[138.77px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-[#0f3d26] h-[32px] left-0 rounded-[8px] top-[40px] w-[412.656px]" data-name="Button">
      <Icon25 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[222.27px] text-[14px] text-center text-neutral-50 text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">Adicionar Coleta</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px] tracking-[0.3px] uppercase">Isoladas</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-50 top-[-2px] w-[199px]">Ipê-amarelo - ID: IPE-00004-F24</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[12px]">Handroanthus chrysotrichus</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[40px] items-start relative w-full">
        <Container66 />
        <Container67 />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#0f3d26] h-[22px] relative rounded-[8px] shrink-0 w-[66.063px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[66.063px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-neutral-50 text-nowrap whitespace-pre">3 coletas</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Badge />
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[#0f3d26] h-[66px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(15,61,38,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[66px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container69 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-50 top-[-2px] w-[168px]">Cedro - ID: CED-00005-F24</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[12px]">Cedrela fissilis</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[40px] items-start relative w-full">
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#0f3d26] h-[22px] relative rounded-[8px] shrink-0 w-[66.063px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[66.063px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-neutral-50 text-nowrap whitespace-pre">2 coletas</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <Badge1 />
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-[#0f3d26] h-[66px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(15,61,38,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[66px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[140px] items-start relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[164px] items-start relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px] tracking-[0.3px] uppercase">Não Isoladas</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a1a1a] text-[14px] top-[-2px] w-[203px]">Peroba-rosa - ID: PER-00006-F24</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Aspidosperma polyneuron</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[40px] items-start relative w-full">
        <Container79 />
        <Container80 />
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#f8f8f8] h-[22px] relative rounded-[8px] shrink-0 w-[59.047px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[59.047px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#777777] text-[12px] text-nowrap whitespace-pre">1 coleta</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container81 />
      <Badge2 />
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[#f8f8f8] h-[66px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[66px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container82 />
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[90px] items-start relative shrink-0 w-full" data-name="Container">
      <Container78 />
      <Container83 />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[270px] items-start left-0 top-[88px] w-[412.656px]" data-name="Container">
      <Container77 />
      <Container84 />
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute h-[370px] left-[873.33px] top-0 w-[412.656px]" data-name="Container">
      <Container64 />
      <Button15 />
      <Container85 />
    </div>
  );
}

function CalendarioFenologico5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1286px]" data-name="CalendarioFenologico">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[1286px]">
        <Container52 />
        <Container63 />
        <Container86 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[490px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] h-[490px] items-start pl-[25px] pr-px py-[25px] relative w-full">
          <CalendarioFenologico4 />
          <CalendarioFenologico5 />
        </div>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14afa280} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p38f09280} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 6.66667V14.6667" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3da7dc00} id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pd477000} id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Florescendo</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[4px] top-0 w-[98.719px]" data-name="Container">
      <Icon26 />
      <Text10 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36b1d900} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a051232} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 14H12.6667" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Frutificando</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[126.72px] top-0 w-[97.5px]" data-name="Container">
      <Icon27 />
      <Text11 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 7.33333L9.33333 13.3333" id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 7.33333L10 2.66667" id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 7.33333H14.6667" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a070e00} id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3 10.3333H13" id="Vector_5" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 7.33333L6 2.66667" id="Vector_6" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 7.33333L6.66667 13.3333" id="Vector_7" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Coletadas</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[248.22px] top-0 w-[84.766px]" data-name="Container">
      <Icon28 />
      <Text12 />
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <Container88 />
      <Container89 />
    </div>
  );
}

function CalendarioFenologico6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[992px] items-start relative shrink-0 w-full" data-name="CalendarioFenologico">
      <Card4 />
      <Card5 />
      <Container90 />
    </div>
  );
}

function CardTitle6() {
  return (
    <div className="absolute h-[16px] left-[25px] top-[25px] w-[1286px]" data-name="CardTitle">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Valor em quilos coletados por espécie</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[3.33%_2.33%_33.33%_4.67%]" data-name="Group">
      <div className="absolute bottom-[-0.26%] left-0 right-0 top-[-0.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1196 191">
          <g id="Group">
            <path d="M0 190.5H1196" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 143H1196" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 95.5H1196" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 48H1196" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 0.5H1196" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[3.33%_2.33%_33.33%_4.67%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.04%] right-[-0.04%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1197 190">
          <g id="Group">
            <path d="M100.167 0V190" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M299.5 0V190" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M498.833 0V190" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M698.167 0V190" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M897.5 0V190" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M1096.83 0V190" id="Vector_6" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0.5 0V190" id="Vector_7" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M1196.5 0V190" id="Vector_8" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[3.33%_2.33%_33.33%_4.67%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function RechartsZindex100R7S() {
  return (
    <div className="absolute contents inset-[3.33%_2.33%_33.33%_4.67%]" data-name="recharts-zindex--100-:r7s:">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[21.81%_81.42%_33.33%_6.22%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159 135">
        <g id="Group">
          <path d={svgPaths.pebcf2c0} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[28.67%_65.92%_33.33%_21.72%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159 114">
        <g id="Group">
          <path d={svgPaths.p2aa87c00} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[30.78%_50.42%_33.33%_37.22%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159 108">
        <g id="Group">
          <path d={svgPaths.p3f123800} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[38.69%_34.92%_33.33%_52.72%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159 84">
        <g id="Group">
          <path d={svgPaths.p1fdd5a00} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[40.81%_19.42%_33.33%_68.22%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159 78">
        <g id="Group">
          <path d={svgPaths.p29c6d500} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[47.14%_3.92%_33.33%_83.72%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159 59">
        <g id="Group">
          <path d={svgPaths.p3bcc2a00} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[21.81%_3.92%_33.33%_6.22%]" data-name="Group">
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[21.81%_3.92%_33.33%_6.22%]" data-name="Group">
      <Group9 />
    </div>
  );
}

function RechartsBarR7U() {
  return (
    <div className="absolute contents inset-[21.81%_3.92%_33.33%_6.22%]" data-name="recharts-bar-:r7u:">
      <Group10 />
    </div>
  );
}

function RechartsZindex300R() {
  return (
    <div className="absolute contents inset-[21.81%_3.92%_33.33%_6.22%]" data-name="recharts-zindex-300-:r81:">
      <RechartsBarR7U />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[66.67%_87.58%_31.33%_12.42%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[66.67%_72.08%_31.33%_27.92%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[66.67%_56.58%_31.33%_43.42%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[66.67%_41.08%_31.33%_58.92%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[66.67%_25.58%_31.33%_74.42%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[66.67%_10.08%_31.33%_89.92%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[66.67%_10.08%_31.33%_12.42%]" data-name="Group">
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[66.67%_10.08%_31.33%_12.42%]" data-name="Group">
      <Group17 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[66.67%_2.33%_31.33%_4.67%]" data-name="Group">
      <div className="absolute inset-[66.67%_2.33%_33.33%_4.67%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1196 1">
            <path d="M0 0.5H1196" id="Vector" stroke="var(--stroke-0, #777777)" />
          </svg>
        </div>
      </div>
      <Group18 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[66.67%_95.33%_33.33%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[50.83%_95.33%_49.17%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[35%_95.33%_65%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[19.17%_95.33%_80.83%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[3.33%_95.33%_96.67%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[3.33%_95.33%_33.33%_4.2%]" data-name="Group">
      <Group20 />
      <Group21 />
      <Group22 />
      <Group23 />
      <Group24 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[3.33%_95.33%_33.33%_4.2%]" data-name="Group">
      <Group25 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[3.33%_95.33%_33.33%_4.2%]" data-name="Group">
      <div className="absolute inset-[3.33%_95.33%_33.33%_4.67%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 190">
            <path d="M0.5 0V190" id="Vector" stroke="var(--stroke-0, #777777)" />
          </svg>
        </div>
      </div>
      <Group26 />
    </div>
  );
}

function RechartsZindex500R() {
  return (
    <div className="absolute contents inset-[3.33%_2.33%_31.33%_4.2%]" data-name="recharts-zindex-500-:r83:">
      <Group19 />
      <Group27 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[68.51%_86.95%_15.69%_9.37%]" data-name="Group">
      <div className="absolute flex inset-[68.51%_86.95%_15.69%_9.37%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[315deg] w-[52px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">Andiroba</p>
        </div>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[68.51%_71.45%_18.76%_25.58%]" data-name="Group">
      <div className="absolute flex inset-[68.51%_71.45%_18.76%_25.58%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[315deg] w-[39px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">Jatobá</p>
        </div>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[68.51%_55.95%_11.92%_39.49%]" data-name="Group">
      <div className="absolute flex inset-[68.51%_55.95%_11.92%_39.49%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[315deg] w-[68px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">Ipê Amarelo</p>
        </div>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[68.51%_40.45%_18.76%_56.58%]" data-name="Group">
      <div className="absolute flex inset-[68.51%_40.45%_18.76%_56.58%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[315deg] w-[39px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">Manga</p>
        </div>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[68.51%_24.95%_19.7%_72.3%]" data-name="Group">
      <div className="absolute flex inset-[68.51%_24.95%_19.7%_72.3%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[315deg] w-[35px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">Cedro</p>
        </div>
      </div>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[68.51%_9.45%_11.22%_85.82%]" data-name="Group">
      <div className="absolute flex inset-[68.51%_9.45%_11.22%_85.82%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[315deg] w-[71px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">Peroba-rosa</p>
        </div>
      </div>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[68.51%_9.45%_11.22%_9.37%]" data-name="Group">
      <Group28 />
      <Group29 />
      <Group30 />
      <Group31 />
      <Group32 />
      <Group33 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[64.09%_95.96%_30.91%_3.42%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[64.09%_95.96%_30.91%_3.42%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">0</p>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[48.25%_95.96%_46.75%_3.42%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[48.25%_95.96%_46.75%_3.42%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">3</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[32.42%_95.96%_62.58%_3.42%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[32.42%_95.96%_62.58%_3.42%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">6</p>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[16.59%_95.96%_78.41%_3.42%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[16.59%_95.96%_78.41%_3.42%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">9</p>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[0.75%_95.96%_94.25%_3.03%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.75%_95.96%_94.25%_3.03%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">12</p>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[0.75%_95.96%_30.91%_3.03%]" data-name="Group">
      <Group35 />
      <Group36 />
      <Group37 />
      <Group38 />
      <Group39 />
    </div>
  );
}

function RechartsZindex2000R() {
  return (
    <div className="absolute contents inset-[-5%_9.45%_11.22%_-0.21%]" data-name="recharts-zindex-2000-:r88:">
      <Group34 />
      <Group40 />
      <div className="absolute flex inset-[-5%_99.05%_65%_-0.21%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[270deg] w-[120px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap whitespace-pre">Quilos coletados (kg)</p>
        </div>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[1286px]" data-name="Icon">
      <RechartsZindex100R7S />
      <RechartsZindex300R />
      <RechartsZindex500R />
      <RechartsZindex2000R />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="absolute h-[300px] left-[25px] top-[71px] w-[1286px]" data-name="CardContent">
      <Icon29 />
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white h-[396px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle6 />
      <CardContent2 />
    </div>
  );
}

function CardTitle7() {
  return (
    <div className="absolute h-[16px] left-[25px] top-[25px] w-[1286px]" data-name="CardTitle">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Quantidade de sementes coletadas mês a mês</p>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute inset-[3.33%_2.33%_16.67%_4.67%]" data-name="Group">
      <div className="absolute bottom-[-0.21%] left-0 right-0 top-[-0.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1196 241">
          <g id="Group">
            <path d="M0 240.5H1196" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 180.5H1196" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 120.5H1196" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 60.5H1196" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 0.5H1196" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute inset-[3.33%_2.33%_16.67%_4.67%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.04%] right-[-0.04%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1197 240">
          <g id="Group">
            <path d="M0.5 0V240" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M109.227 0V240" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M217.955 0V240" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M326.682 0V240" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M435.409 0V240" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M544.136 0V240" id="Vector_6" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M652.864 0V240" id="Vector_7" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M761.591 0V240" id="Vector_8" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M870.318 0V240" id="Vector_9" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M979.045 0V240" id="Vector_10" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M1087.77 0V240" id="Vector_11" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M1196.5 0V240" id="Vector_12" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-[3.33%_2.33%_16.67%_4.67%]" data-name="Group">
      <Group41 />
      <Group42 />
    </div>
  );
}

function RechartsZindex100R() {
  return (
    <div className="absolute contents inset-[3.33%_2.33%_16.67%_4.67%]" data-name="recharts-zindex--100-:r89:">
      <Group43 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute inset-[26.67%_2.33%_33.33%_4.67%]" data-name="Group">
      <div className="absolute inset-[-1.25%_-0.02%_-1.24%_-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1197 123">
          <g id="Group">
            <path d={svgPaths.p356d7918} id="recharts-line-:r8b:" stroke="var(--stroke-0, #16A34A)" strokeDasharray="1000 92.19" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RechartsZindex400R8F() {
  return (
    <div className="absolute contents inset-[26.67%_2.33%_33.33%_4.67%]" data-name="recharts-zindex-400-:r8f:">
      <Group44 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute inset-[83.33%_95.33%_14.67%_4.67%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[83.33%_86.88%_14.67%_13.12%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute inset-[83.33%_78.42%_14.67%_21.58%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute inset-[83.33%_69.97%_14.67%_30.03%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute inset-[83.33%_61.52%_14.67%_38.48%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute inset-[83.33%_53.06%_14.67%_46.94%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute inset-[83.33%_44.61%_14.67%_55.39%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute inset-[83.33%_36.15%_14.67%_63.85%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute inset-[83.33%_27.7%_14.67%_72.3%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute inset-[83.33%_19.24%_14.67%_80.76%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute inset-[83.33%_10.79%_14.67%_89.21%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute inset-[83.33%_2.33%_14.67%_97.67%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents inset-[83.33%_2.33%_14.67%_4.67%]" data-name="Group">
      <Group45 />
      <Group46 />
      <Group47 />
      <Group48 />
      <Group49 />
      <Group50 />
      <Group51 />
      <Group52 />
      <Group53 />
      <Group54 />
      <Group55 />
      <Group56 />
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute contents inset-[83.33%_2.33%_14.67%_4.67%]" data-name="Group">
      <Group57 />
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute contents inset-[83.33%_2.33%_14.67%_4.67%]" data-name="Group">
      <div className="absolute inset-[83.33%_2.33%_16.67%_4.67%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1196 1">
            <path d="M0 0.5H1196" id="Vector" stroke="var(--stroke-0, #777777)" />
          </svg>
        </div>
      </div>
      <Group58 />
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute inset-[83.33%_95.33%_16.67%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute inset-[63.33%_95.33%_36.67%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute inset-[43.33%_95.33%_56.67%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute inset-[23.33%_95.33%_76.67%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute inset-[3.33%_95.33%_96.67%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute contents inset-[3.33%_95.33%_16.67%_4.2%]" data-name="Group">
      <Group60 />
      <Group61 />
      <Group62 />
      <Group63 />
      <Group64 />
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute contents inset-[3.33%_95.33%_16.67%_4.2%]" data-name="Group">
      <Group65 />
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute contents inset-[3.33%_95.33%_16.67%_4.2%]" data-name="Group">
      <div className="absolute inset-[3.33%_95.33%_16.67%_4.67%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 240">
            <path d="M0.5 0V240" id="Vector" stroke="var(--stroke-0, #777777)" />
          </svg>
        </div>
      </div>
      <Group66 />
    </div>
  );
}

function RechartsZindex500R8G() {
  return (
    <div className="absolute contents inset-[3.33%_2.33%_14.67%_4.2%]" data-name="recharts-zindex-500-:r8g:">
      <Group59 />
      <Group67 />
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute bottom-[31.67%] left-[4.28%] right-[1.94%] top-1/4" data-name="Group">
      <div className="absolute inset-[-1.15%_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1209 133">
          <g id="Group">
            <path d={svgPaths.p1903d280} fill="var(--fill-0, #16A34A)" id="Vector" stroke="var(--stroke-0, #16A34A)" strokeWidth="3" />
            <path d={svgPaths.p325f6900} fill="var(--fill-0, #16A34A)" id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeWidth="3" />
            <path d={svgPaths.p223dca00} fill="var(--fill-0, #16A34A)" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeWidth="3" />
            <path d={svgPaths.p3831900} fill="var(--fill-0, #16A34A)" id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeWidth="3" />
            <path d={svgPaths.p1b5c0f80} fill="var(--fill-0, #16A34A)" id="Vector_5" stroke="var(--stroke-0, #16A34A)" strokeWidth="3" />
            <path d={svgPaths.pd05a800} fill="var(--fill-0, #16A34A)" id="Vector_6" stroke="var(--stroke-0, #16A34A)" strokeWidth="3" />
            <path d={svgPaths.p7398e80} fill="var(--fill-0, #16A34A)" id="Vector_7" stroke="var(--stroke-0, #16A34A)" strokeWidth="3" />
            <path d={svgPaths.p329e9300} fill="var(--fill-0, #16A34A)" id="Vector_8" stroke="var(--stroke-0, #16A34A)" strokeWidth="3" />
            <path d={svgPaths.p11d91e80} fill="var(--fill-0, #16A34A)" id="Vector_9" stroke="var(--stroke-0, #16A34A)" strokeWidth="3" />
            <path d={svgPaths.pd414600} fill="var(--fill-0, #16A34A)" id="Vector_10" stroke="var(--stroke-0, #16A34A)" strokeWidth="3" />
            <path d={svgPaths.pc884300} fill="var(--fill-0, #16A34A)" id="Vector_11" stroke="var(--stroke-0, #16A34A)" strokeWidth="3" />
            <path d={svgPaths.p16a7ba00} fill="var(--fill-0, #16A34A)" id="Vector_12" stroke="var(--stroke-0, #16A34A)" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RechartsZindex600R8H() {
  return (
    <div className="absolute bottom-[31.67%] contents left-[4.28%] right-[1.94%] top-1/4" data-name="recharts-zindex-600-:r8h:">
      <Group68 />
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute contents inset-[84.84%_94.52%_10.16%_3.85%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_94.52%_10.16%_3.85%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Jan</p>
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute contents inset-[84.84%_86.06%_10.16%_12.3%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_86.06%_10.16%_12.3%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Fev</p>
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute contents inset-[84.84%_77.57%_10.16%_20.72%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_77.57%_10.16%_20.72%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Mar</p>
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute contents inset-[84.84%_69.15%_10.16%_29.21%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_69.15%_10.16%_29.21%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Abr</p>
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute contents inset-[84.84%_60.7%_10.16%_37.67%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_60.7%_10.16%_37.67%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Mai</p>
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute contents inset-[84.84%_52.24%_10.16%_46.12%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_52.24%_10.16%_46.12%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Jun</p>
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute contents inset-[84.84%_43.95%_10.16%_54.73%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_43.95%_10.16%_54.73%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Jul</p>
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute contents inset-[84.84%_35.26%_10.16%_62.95%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_35.26%_10.16%_62.95%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Ago</p>
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute contents inset-[84.84%_26.96%_10.16%_71.56%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_26.96%_10.16%_71.56%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Set</p>
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute contents inset-[84.84%_18.43%_10.16%_79.94%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_18.43%_10.16%_79.94%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Out</p>
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute contents inset-[84.84%_9.89%_10.16%_88.32%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_9.89%_10.16%_88.32%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Nov</p>
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute contents inset-[84.84%_1.44%_10.16%_96.77%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_1.44%_10.16%_96.77%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Dez</p>
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute contents inset-[84.84%_1.44%_10.16%_3.85%]" data-name="Group">
      <Group69 />
      <Group70 />
      <Group71 />
      <Group72 />
      <Group73 />
      <Group74 />
      <Group75 />
      <Group76 />
      <Group77 />
      <Group78 />
      <Group79 />
      <Group80 />
    </div>
  );
}

function Group82() {
  return (
    <div className="absolute contents inset-[80.75%_95.96%_14.25%_3.42%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[80.75%_95.96%_14.25%_3.42%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">0</p>
    </div>
  );
}

function Group83() {
  return (
    <div className="absolute contents inset-[60.75%_95.96%_34.25%_3.42%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[60.75%_95.96%_34.25%_3.42%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">3</p>
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute contents inset-[40.75%_95.96%_54.25%_3.42%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.75%_95.96%_54.25%_3.42%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">6</p>
    </div>
  );
}

function Group85() {
  return (
    <div className="absolute contents inset-[20.75%_95.96%_74.25%_3.42%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[20.75%_95.96%_74.25%_3.42%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">9</p>
    </div>
  );
}

function Group86() {
  return (
    <div className="absolute contents inset-[0.75%_95.96%_94.25%_3.03%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.75%_95.96%_94.25%_3.03%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">12</p>
    </div>
  );
}

function Group87() {
  return (
    <div className="absolute contents inset-[0.75%_95.96%_14.25%_3.03%]" data-name="Group">
      <Group82 />
      <Group83 />
      <Group84 />
      <Group85 />
      <Group86 />
    </div>
  );
}

function RechartsZindex2000R8L() {
  return (
    <div className="absolute contents inset-[0.75%_1.44%_10.16%_-0.21%]" data-name="recharts-zindex-2000-:r8l:">
      <Group81 />
      <Group87 />
      <div className="absolute flex inset-[23%_99.05%_56.67%_-0.21%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[270deg] w-[61px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap whitespace-pre">Quilos (kg)</p>
        </div>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[1286px]" data-name="Icon">
      <RechartsZindex100R />
      <RechartsZindex400R8F />
      <RechartsZindex500R8G />
      <RechartsZindex600R8H />
      <RechartsZindex2000R8L />
    </div>
  );
}

function CardContent3() {
  return (
    <div className="absolute h-[300px] left-[25px] top-[71px] w-[1286px]" data-name="CardContent">
      <Icon30 />
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white h-[396px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle7 />
      <CardContent3 />
    </div>
  );
}

function CardTitle8() {
  return (
    <div className="absolute h-[16px] left-[25px] top-[25px] w-[1286px]" data-name="CardTitle">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Quantidade de matrizes coletadas mês a mês</p>
    </div>
  );
}

function Group88() {
  return (
    <div className="absolute inset-[3.33%_2.33%_16.67%_4.67%]" data-name="Group">
      <div className="absolute bottom-[-0.21%] left-0 right-0 top-[-0.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1196 241">
          <g id="Group">
            <path d="M0 240.5H1196" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 180.5H1196" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 120.5H1196" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 60.5H1196" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0 0.5H1196" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group89() {
  return (
    <div className="absolute inset-[3.33%_2.33%_16.67%_4.67%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.04%] right-[-0.04%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1197 240">
          <g id="Group">
            <path d="M50.3333 0V240" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M150 0V240" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M249.667 0V240" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M349.333 0V240" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M449 0V240" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M548.667 0V240" id="Vector_6" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M648.333 0V240" id="Vector_7" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M748 0V240" id="Vector_8" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M847.667 0V240" id="Vector_9" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M947.333 0V240" id="Vector_10" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M1047 0V240" id="Vector_11" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M1146.67 0V240" id="Vector_12" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M0.5 0V240" id="Vector_13" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
            <path d="M1196.5 0V240" id="Vector_14" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group90() {
  return (
    <div className="absolute contents inset-[3.33%_2.33%_16.67%_4.67%]" data-name="Group">
      <Group88 />
      <Group89 />
    </div>
  );
}

function RechartsZindex100R8M() {
  return (
    <div className="absolute contents inset-[3.33%_2.33%_16.67%_4.67%]" data-name="recharts-zindex--100-:r8m:">
      <Group90 />
    </div>
  );
}

function Group91() {
  return (
    <div className="absolute inset-[56.67%_88.42%_16.67%_5.44%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 80">
        <g id="Group">
          <path d={svgPaths.p3e398700} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group92() {
  return (
    <div className="absolute inset-[43.33%_80.67%_16.67%_13.19%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 120">
        <g id="Group">
          <path d={svgPaths.p1c4d5000} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group93() {
  return (
    <div className="absolute inset-[33.33%_72.92%_16.67%_20.94%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 150">
        <g id="Group">
          <path d={svgPaths.p34469500} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group94() {
  return (
    <div className="absolute inset-[23.33%_65.17%_16.67%_28.69%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 180">
        <g id="Group">
          <path d={svgPaths.p340f8d80} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group95() {
  return (
    <div className="absolute inset-[10%_57.42%_16.67%_36.44%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 220">
        <g id="Group">
          <path d={svgPaths.p170c6f00} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group96() {
  return (
    <div className="absolute inset-[20%_49.67%_16.67%_44.19%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 190">
        <g id="Group">
          <path d={svgPaths.pda0f780} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group97() {
  return (
    <div className="absolute inset-[3.33%_41.92%_16.67%_51.94%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 240">
        <g id="Group">
          <path d={svgPaths.pdd4a800} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group98() {
  return (
    <div className="absolute inset-[16.67%_34.17%_16.67%_59.69%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 200">
        <g id="Group">
          <path d={svgPaths.p23417100} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group99() {
  return (
    <div className="absolute inset-[26.67%_26.42%_16.67%_67.44%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 170">
        <g id="Group">
          <path d={svgPaths.p16271d00} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group100() {
  return (
    <div className="absolute inset-[36.67%_18.67%_16.67%_75.19%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 140">
        <g id="Group">
          <path d={svgPaths.p2bcf8d80} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group101() {
  return (
    <div className="absolute inset-[46.67%_10.91%_16.67%_82.94%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 110">
        <g id="Group">
          <path d={svgPaths.p1f245b32} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group102() {
  return (
    <div className="absolute inset-[53.33%_3.16%_16.67%_90.69%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 90">
        <g id="Group">
          <path d={svgPaths.p1b4ed100} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group103() {
  return (
    <div className="absolute contents inset-[3.33%_3.16%_16.67%_5.44%]" data-name="Group">
      <Group91 />
      <Group92 />
      <Group93 />
      <Group94 />
      <Group95 />
      <Group96 />
      <Group97 />
      <Group98 />
      <Group99 />
      <Group100 />
      <Group101 />
      <Group102 />
    </div>
  );
}

function Group104() {
  return (
    <div className="absolute contents inset-[3.33%_3.16%_16.67%_5.44%]" data-name="Group">
      <Group103 />
    </div>
  );
}

function RechartsBarR8O() {
  return (
    <div className="absolute contents inset-[3.33%_3.16%_16.67%_5.44%]" data-name="recharts-bar-:r8o:">
      <Group104 />
    </div>
  );
}

function RechartsZindex300R8R() {
  return (
    <div className="absolute contents inset-[3.33%_3.16%_16.67%_5.44%]" data-name="recharts-zindex-300-:r8r:">
      <RechartsBarR8O />
    </div>
  );
}

function Group105() {
  return (
    <div className="absolute inset-[83.33%_91.46%_14.67%_8.54%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group106() {
  return (
    <div className="absolute inset-[83.33%_83.71%_14.67%_16.29%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group107() {
  return (
    <div className="absolute inset-[83.33%_75.96%_14.67%_24.04%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group108() {
  return (
    <div className="absolute inset-[83.33%_68.21%_14.67%_31.79%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group109() {
  return (
    <div className="absolute inset-[83.33%_60.46%_14.67%_39.54%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group110() {
  return (
    <div className="absolute inset-[83.33%_52.71%_14.67%_47.29%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group111() {
  return (
    <div className="absolute inset-[83.33%_44.96%_14.67%_55.04%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group112() {
  return (
    <div className="absolute inset-[83.33%_37.21%_14.67%_62.79%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group113() {
  return (
    <div className="absolute inset-[83.33%_29.46%_14.67%_70.54%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group114() {
  return (
    <div className="absolute inset-[83.33%_21.71%_14.67%_78.29%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group115() {
  return (
    <div className="absolute inset-[83.33%_13.96%_14.67%_86.04%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group116() {
  return (
    <div className="absolute inset-[83.33%_6.21%_14.67%_93.79%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group117() {
  return (
    <div className="absolute contents inset-[83.33%_6.21%_14.67%_8.54%]" data-name="Group">
      <Group105 />
      <Group106 />
      <Group107 />
      <Group108 />
      <Group109 />
      <Group110 />
      <Group111 />
      <Group112 />
      <Group113 />
      <Group114 />
      <Group115 />
      <Group116 />
    </div>
  );
}

function Group118() {
  return (
    <div className="absolute contents inset-[83.33%_6.21%_14.67%_8.54%]" data-name="Group">
      <Group117 />
    </div>
  );
}

function Group119() {
  return (
    <div className="absolute contents inset-[83.33%_2.33%_14.67%_4.67%]" data-name="Group">
      <div className="absolute inset-[83.33%_2.33%_16.67%_4.67%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1196 1">
            <path d="M0 0.5H1196" id="Vector" stroke="var(--stroke-0, #777777)" />
          </svg>
        </div>
      </div>
      <Group118 />
    </div>
  );
}

function Group120() {
  return (
    <div className="absolute inset-[83.33%_95.33%_16.67%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group121() {
  return (
    <div className="absolute inset-[63.33%_95.33%_36.67%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group122() {
  return (
    <div className="absolute inset-[43.33%_95.33%_56.67%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group123() {
  return (
    <div className="absolute inset-[23.33%_95.33%_76.67%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group124() {
  return (
    <div className="absolute inset-[3.33%_95.33%_96.67%_4.2%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #777777)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group125() {
  return (
    <div className="absolute contents inset-[3.33%_95.33%_16.67%_4.2%]" data-name="Group">
      <Group120 />
      <Group121 />
      <Group122 />
      <Group123 />
      <Group124 />
    </div>
  );
}

function Group126() {
  return (
    <div className="absolute contents inset-[3.33%_95.33%_16.67%_4.2%]" data-name="Group">
      <Group125 />
    </div>
  );
}

function Group127() {
  return (
    <div className="absolute contents inset-[3.33%_95.33%_16.67%_4.2%]" data-name="Group">
      <div className="absolute inset-[3.33%_95.33%_16.67%_4.67%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 240">
            <path d="M0.5 0V240" id="Vector" stroke="var(--stroke-0, #777777)" />
          </svg>
        </div>
      </div>
      <Group126 />
    </div>
  );
}

function RechartsZindex500R8T() {
  return (
    <div className="absolute contents inset-[3.33%_2.33%_14.67%_4.2%]" data-name="recharts-zindex-500-:r8t:">
      <Group119 />
      <Group127 />
    </div>
  );
}

function Group128() {
  return (
    <div className="absolute contents inset-[84.84%_90.64%_10.16%_7.72%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_90.64%_10.16%_7.72%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Jan</p>
    </div>
  );
}

function Group129() {
  return (
    <div className="absolute contents inset-[84.84%_82.89%_10.16%_15.47%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_82.89%_10.16%_15.47%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Fev</p>
    </div>
  );
}

function Group130() {
  return (
    <div className="absolute contents inset-[84.84%_75.1%_10.16%_23.19%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_75.1%_10.16%_23.19%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Mar</p>
    </div>
  );
}

function Group131() {
  return (
    <div className="absolute contents inset-[84.84%_67.39%_10.16%_30.97%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_67.39%_10.16%_30.97%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Abr</p>
    </div>
  );
}

function Group132() {
  return (
    <div className="absolute contents inset-[84.84%_59.64%_10.16%_38.72%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_59.64%_10.16%_38.72%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Mai</p>
    </div>
  );
}

function Group133() {
  return (
    <div className="absolute contents inset-[84.84%_51.89%_10.16%_46.47%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_51.89%_10.16%_46.47%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Jun</p>
    </div>
  );
}

function Group134() {
  return (
    <div className="absolute contents inset-[84.84%_44.3%_10.16%_54.38%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_44.3%_10.16%_54.38%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Jul</p>
    </div>
  );
}

function Group135() {
  return (
    <div className="absolute contents inset-[84.84%_36.31%_10.16%_61.9%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_36.31%_10.16%_61.9%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Ago</p>
    </div>
  );
}

function Group136() {
  return (
    <div className="absolute contents inset-[84.84%_28.72%_10.16%_69.8%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_28.72%_10.16%_69.8%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Set</p>
    </div>
  );
}

function Group137() {
  return (
    <div className="absolute contents inset-[84.84%_20.89%_10.16%_77.48%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_20.89%_10.16%_77.48%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Out</p>
    </div>
  );
}

function Group138() {
  return (
    <div className="absolute contents inset-[84.84%_13.06%_10.16%_85.15%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_13.06%_10.16%_85.15%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Nov</p>
    </div>
  );
}

function Group139() {
  return (
    <div className="absolute contents inset-[84.84%_5.31%_10.16%_92.9%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_5.31%_10.16%_92.9%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Dez</p>
    </div>
  );
}

function Group140() {
  return (
    <div className="absolute contents inset-[84.84%_5.31%_10.16%_7.72%]" data-name="Group">
      <Group128 />
      <Group129 />
      <Group130 />
      <Group131 />
      <Group132 />
      <Group133 />
      <Group134 />
      <Group135 />
      <Group136 />
      <Group137 />
      <Group138 />
      <Group139 />
    </div>
  );
}

function Group141() {
  return (
    <div className="absolute contents inset-[80.75%_95.96%_14.25%_3.42%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[80.75%_95.96%_14.25%_3.42%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">0</p>
    </div>
  );
}

function Group142() {
  return (
    <div className="absolute contents inset-[60.75%_95.96%_34.25%_3.42%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[60.75%_95.96%_34.25%_3.42%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">6</p>
    </div>
  );
}

function Group143() {
  return (
    <div className="absolute contents inset-[40.75%_95.96%_54.25%_3.03%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.75%_95.96%_54.25%_3.03%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">12</p>
    </div>
  );
}

function Group144() {
  return (
    <div className="absolute contents inset-[20.75%_95.96%_74.25%_3.03%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[20.75%_95.96%_74.25%_3.03%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">18</p>
    </div>
  );
}

function Group145() {
  return (
    <div className="absolute contents inset-[0.75%_95.96%_94.25%_2.88%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.75%_95.96%_94.25%_2.88%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">24</p>
    </div>
  );
}

function Group146() {
  return (
    <div className="absolute contents inset-[0.75%_95.96%_14.25%_2.88%]" data-name="Group">
      <Group141 />
      <Group142 />
      <Group143 />
      <Group144 />
      <Group145 />
    </div>
  );
}

function RechartsZindex2000R1() {
  return (
    <div className="absolute contents inset-[0.75%_5.31%_10.16%_-0.21%]" data-name="recharts-zindex-2000-:r92:">
      <Group140 />
      <Group146 />
      <div className="absolute flex inset-[5%_99.05%_56.67%_-0.21%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[270deg] w-[115px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap whitespace-pre">Número de matrizes</p>
        </div>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[1286px]" data-name="Icon">
      <RechartsZindex100R8M />
      <RechartsZindex300R8R />
      <RechartsZindex500R8T />
      <RechartsZindex2000R1 />
    </div>
  );
}

function CardContent4() {
  return (
    <div className="absolute h-[300px] left-[25px] top-[71px] w-[1286px]" data-name="CardContent">
      <Icon31 />
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-white h-[396px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle8 />
      <CardContent4 />
    </div>
  );
}

function DashboardPrincipal6() {
  return (
    <div className="h-[2612px] relative shrink-0 w-full" data-name="DashboardPrincipal">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[2612px] items-start pb-0 pt-[32px] px-[32px] relative w-full">
          <Container7 />
          <Container8 />
          <CalendarioFenologico6 />
          <Card6 />
          <Card7 />
          <Card8 />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 grow h-[779px] min-h-px min-w-px relative shrink-0" data-name="Main Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[779px] items-start pb-0 pl-0 pr-[23px] pt-[64px] relative w-full">
          <DashboardPrincipal6 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f8f8f8] content-stretch flex h-[779px] items-start left-0 top-0 w-[1679px]" data-name="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[18px] left-0 top-[-20000px] w-[12.938px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">18</p>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p388cb800} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p5baad20} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon32 />
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2127_779)" id="Icon">
          <path d={svgPaths.p3adb3b00} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 1.33333V2.66667" id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 13.3333V14.6667" id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22049780} id="Vector_4" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ff5aa00} id="Vector_5" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H2.66667" id="Vector_6" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 8H14.6667" id="Vector_7" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19069f80} id="Vector_8" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37cddcc0} id="Vector_9" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2127_779">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon33 />
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon34 />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[12px] h-[64px] items-center justify-end left-[256px] pb-px pl-0 pr-[24px] pt-0 top-0 w-[1423px]" data-name="TopBar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Button16 />
      <Button17 />
      <Button18 />
    </div>
  );
}

export default function ViniciusRastaFlorColeta() {
  return (
    <div className="bg-white relative size-full" data-name="Vinicius - Rasta Flor | Coleta">
      <App />
      <Text13 />
      <TopBar />
    </div>
  );
}