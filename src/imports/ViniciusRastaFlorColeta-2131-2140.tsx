import svgPaths from "./svg-w8gslvikrw";

function Heading() {
  return (
    <div className="h-[36.004px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1a1a1a] text-[24px] text-nowrap top-[-2.63px] whitespace-pre">Dashboard</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#777777] text-[16px] text-nowrap whitespace-pre">Visão geral do Módulo de Coleta</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[68.001px] relative shrink-0 w-[232.442px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.994px] h-[68.001px] items-start relative w-[232.442px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[11.98px] size-[15.988px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2131_1346)" id="Icon">
          <path d={svgPaths.p697780} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M5.99536 11.9907H9.99227" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M6.66151 14.6553H9.32611" id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1346">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0f3d26] h-[35.983px] relative rounded-[8px] shrink-0 w-[135.659px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.983px] relative w-[135.659px]">
        <Icon />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[84.46px] text-[14px] text-center text-neutral-50 text-nowrap top-[5.99px] translate-x-[-50%] whitespace-pre">Dicas de uso</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[68.001px] items-start justify-between left-[32px] top-[32px] w-[1709.97px]" data-name="Container">
      <Container />
      <Button />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[19.995px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1e12a00} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.pa78a780} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[19.995px] relative shrink-0 w-[358.8px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.995px] relative w-[358.8px]">
        <Icon1 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[27.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[-1.12px] whitespace-pre">Total de árvores matrizes</p>
      </div>
    </div>
  );
}

function DashboardPrincipal() {
  return (
    <div className="h-[48.006px] relative shrink-0 w-[358.8px]" data-name="DashboardPrincipal">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48.006px] relative w-[358.8px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#1a1a1a] text-[48px] text-nowrap top-[-5.23px] whitespace-pre">87</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[29.961px] h-[180.664px] items-start left-0 pb-[1.372px] pl-[25.353px] pr-[1.372px] pt-[25.353px] rounded-[14px] top-0 w-[409.506px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle />
      <DashboardPrincipal />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[19.995px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2b6d0500} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p1fbecf00} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M4.16568 17.4958H15.8296" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[19.995px] relative shrink-0 w-[358.8px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.995px] relative w-[358.8px]">
        <Icon2 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[27.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[-1.12px] whitespace-pre">Espécies cadastradas (Total)</p>
      </div>
    </div>
  );
}

function DashboardPrincipal1() {
  return (
    <div className="h-[48.006px] relative shrink-0 w-[358.8px]" data-name="DashboardPrincipal">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48.006px] relative w-[358.8px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#1a1a1a] text-[48px] text-nowrap top-[-5.23px] whitespace-pre">23</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[29.961px] h-[180.664px] items-start left-[433.49px] pb-[1.372px] pl-[25.353px] pr-[1.372px] pt-[25.353px] rounded-[14px] top-0 w-[409.506px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle1 />
      <DashboardPrincipal1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[19.995px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2131_1167)" id="Icon">
          <path d={svgPaths.p38662500} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M9.99762 18.329V9.99762" id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p7e70f00} id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p13e682a0} id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1167">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="absolute h-[19.995px] left-[25.35px] top-[25.35px] w-[358.8px]" data-name="CardTitle">
      <Icon3 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[27.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[-1.12px] whitespace-pre">Sementes colhidas (Total)</p>
    </div>
  );
}

function DashboardPrincipal2() {
  return (
    <div className="h-[48.006px] relative shrink-0 w-full" data-name="DashboardPrincipal">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#1a1a1a] text-[48px] text-nowrap top-[-5.23px] whitespace-pre">42 kg</p>
    </div>
  );
}

function DashboardPrincipal3() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="DashboardPrincipal">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[16px]">Este mês: 8.5 kg</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7.994px] h-[103.984px] items-start left-[1.37px] px-[23.981px] py-0 top-[75.31px] w-[406.763px]" data-name="CardContent">
      <DashboardPrincipal2 />
      <DashboardPrincipal3 />
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-white h-[180.664px] left-[866.98px] rounded-[14px] top-0 w-[409.506px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle2 />
      <CardContent />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[19.995px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2131_1351)" id="Icon">
          <path d={svgPaths.pb54cb80} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p1695f880} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1351">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="absolute h-[19.995px] left-[25.35px] top-[25.35px] w-[358.8px]" data-name="CardTitle">
      <Icon4 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[27.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[-1.12px] whitespace-pre">Coletas realizadas</p>
    </div>
  );
}

function DashboardPrincipal4() {
  return (
    <div className="h-[48.006px] relative shrink-0 w-full" data-name="DashboardPrincipal">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#1a1a1a] text-[48px] text-nowrap top-[-5.23px] whitespace-pre">156</p>
    </div>
  );
}

function DashboardPrincipal5() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="DashboardPrincipal">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[16px]">Este mês: 24 coletas</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7.994px] h-[103.984px] items-start left-[1.37px] pl-[23.981px] pr-[23.982px] py-0 top-[75.31px] w-[406.763px]" data-name="CardContent">
      <DashboardPrincipal4 />
      <DashboardPrincipal5 />
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-white h-[180.664px] left-[1300.46px] rounded-[14px] top-0 w-[409.506px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle3 />
      <CardContent1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[180.664px] left-[32px] top-[123.98px] w-[1709.97px]" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function CalendarioFenologico() {
  return (
    <div className="absolute content-stretch flex h-[21.945px] items-start left-[237.95px] top-[-4.11px] w-[59.921px]" data-name="CalendarioFenologico">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[16px] text-green-600 text-nowrap whitespace-pre">Outubro</p>
    </div>
  );
}

function CardTitle4() {
  return (
    <div className="h-[16.009px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-3.11px] whitespace-pre">Calendário Mensal das Espécies -</p>
      <CalendarioFenologico />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Espécies em diferentes estágios fenológicos neste mês</p>
    </div>
  );
}

function CalendarioFenologico1() {
  return (
    <div className="h-[39.969px] relative shrink-0 w-[336.469px]" data-name="CalendarioFenologico">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.986px] h-[39.969px] items-start relative w-[336.469px]">
        <CardTitle4 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2131_1319)" id="Icon">
          <path d={svgPaths.pc6b5e98} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p30431d00} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M9.99762 8.33135V18.329" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p8cb6100} id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p1939ad10} id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1319">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[85.36px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[85.36px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-nowrap whitespace-pre">Florescendo</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[24.003px] items-center left-0 top-0 w-[113.349px]" data-name="Container">
      <Icon5 />
      <Heading2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[197.87px] size-[15.988px] top-[7.99px]" data-name="Icon">
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
    <div className="absolute bg-[#0f3d26] h-[31.997px] left-0 rounded-[8px] top-[39.99px] w-[537.086px]" data-name="Button">
      <Icon6 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[284.33px] text-[14px] text-center text-neutral-50 text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">Adicionar Espécie</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">Ipê-amarelo</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Handroanthus chrysotrichus</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f8f8f8] h-[70.68px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[70.68px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Cedrela fissilis</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f8f8f8] h-[46.677px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[46.677px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">Peroba-rosa</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Aspidosperma polyneuron</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#f8f8f8] h-[70.68px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[70.68px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.98px] h-[211.997px] items-start left-0 top-[87.97px] w-[537.086px]" data-name="Container">
      <Container6 />
      <Container8 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[299.972px] left-0 top-0 w-[537.086px]" data-name="Container">
      <Container3 />
      <Button1 />
      <Container12 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2b6d0500} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p1fbecf00} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M4.16568 17.4958H15.8296" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[83.967px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[83.967px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-nowrap whitespace-pre">Frutificando</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[24.003px] items-center left-0 top-0 w-[111.956px]" data-name="Container">
      <Icon7 />
      <Heading3 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[197.9px] size-[15.988px] top-[7.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33076 7.99381H12.6569" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M7.99381 3.33076V12.6569" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#0f3d26] h-[31.997px] left-0 rounded-[8px] top-[39.99px] w-[537.107px]" data-name="Button">
      <Icon8 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[284.36px] text-[14px] text-center text-neutral-50 text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">Adicionar Espécie</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">Pau-marfim</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Balfourodendron riedelianum</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f8f8f8] h-[70.68px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[70.68px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container15 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">Jequitibá-rosa</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Cariniana legalis</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f8f8f8] h-[70.68px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[70.68px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.98px] h-[153.34px] items-start left-0 top-[87.97px] w-[537.107px]" data-name="Container">
      <Container17 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[299.972px] left-[561.07px] top-0 w-[537.107px]" data-name="Container">
      <Container14 />
      <Button2 />
      <Container21 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2131_1310)" id="Icon">
          <path d={svgPaths.p1156980} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p2cd8f780} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M1.66627 9.16449H18.329" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p25be7300} id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M3.74911 12.9136H16.2461" id="Vector_5" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p20039d80} id="Vector_6" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p33b36a00} id="Vector_7" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1310">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[69.415px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[69.415px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-nowrap whitespace-pre">Coletadas</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[24.003px] items-center left-0 top-0 w-[97.405px]" data-name="Container">
      <Icon9 />
      <Heading4 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[201.02px] size-[15.988px] top-[7.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33076 7.99381H12.6569" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M7.99381 3.33076V12.6569" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#0f3d26] h-[31.997px] left-0 rounded-[8px] top-[39.99px] w-[537.086px]" data-name="Button">
      <Icon10 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[284.48px] text-[14px] text-center text-neutral-50 text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">Adicionar Coleta</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">Aroeira-pimenteira</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Schinus terebinthifolius</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#f8f8f8] h-[70.68px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[70.68px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container24 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">Ipê-amarelo</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Handroanthus chrysotrichus</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#f8f8f8] h-[70.68px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[70.68px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container27 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.98px] h-[153.34px] items-start left-0 top-[87.97px] w-[537.086px]" data-name="Container">
      <Container26 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[299.972px] left-[1122.16px] top-0 w-[537.086px]" data-name="Container">
      <Container23 />
      <Button3 />
      <Container30 />
    </div>
  );
}

function CalendarioFenologico2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1659.26px]" data-name="CalendarioFenologico">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[1659.26px]">
        <Container13 />
        <Container22 />
        <Container31 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[420.607px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[29.961px] h-[420.607px] items-start pl-[25.353px] pr-[1.372px] py-[25.353px] relative w-full">
          <CalendarioFenologico1 />
          <CalendarioFenologico2 />
        </div>
      </div>
    </div>
  );
}

function CalendarioFenologico3() {
  return (
    <div className="absolute content-stretch flex h-[21.945px] items-start left-[238.64px] top-[-4.11px] w-[59.921px]" data-name="CalendarioFenologico">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[16px] text-green-600 text-nowrap whitespace-pre">Outubro</p>
    </div>
  );
}

function CardTitle5() {
  return (
    <div className="h-[16.009px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-3.11px] whitespace-pre">Calendário Mensal das Matrizes -</p>
      <CalendarioFenologico3 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[19.974px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Árvores-matrizes monitoradas neste mês</p>
    </div>
  );
}

function CalendarioFenologico4() {
  return (
    <div className="h-[39.969px] relative shrink-0 w-[1659.26px]" data-name="CalendarioFenologico">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.986px] h-[39.969px] items-start relative w-[1659.26px]">
        <CardTitle5 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2131_1319)" id="Icon">
          <path d={svgPaths.pc6b5e98} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p30431d00} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M9.99762 8.33135V18.329" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p8cb6100} id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p1939ad10} id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1319">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[85.36px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[85.36px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-nowrap whitespace-pre">Florescendo</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[24.003px] items-center left-0 top-0 w-[113.349px]" data-name="Container">
      <Icon11 />
      <Heading5 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[200.96px] size-[15.988px] top-[7.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33076 7.99381H12.6569" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M7.99381 3.33076V12.6569" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#0f3d26] h-[31.997px] left-0 rounded-[8px] top-[39.99px] w-[537.086px]" data-name="Button">
      <Icon12 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[284.42px] text-[14px] text-center text-neutral-50 text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">Adicionar Matriz</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[19.974px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a1a1a] text-[14px] top-[-2px] w-[199px]">Ipê-amarelo - ID: IPE-00001-F24</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Handroanthus chrysotrichus</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Fazenda São João</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#f8f8f8] h-[86.625px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[3.986px] h-[86.625px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container33 />
          <Container34 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[19.974px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a1a1a] text-[14px] top-[-2px] w-[168px]">Cedro - ID: CED-00002-F24</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Cedrela fissilis</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Sítio Primavera</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#f8f8f8] h-[86.625px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[3.986px] h-[86.625px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container37 />
          <Container38 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[19.974px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a1a1a] text-[14px] top-[-2px] w-[203px]">Peroba-rosa - ID: PER-00003-F24</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Aspidosperma polyneuron</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Chácara Verde</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f8f8f8] h-[86.625px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[3.986px] h-[86.625px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container41 />
          <Container42 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.98px] h-[283.834px] items-start left-0 top-[87.97px] w-[537.086px]" data-name="Container">
      <Container36 />
      <Container40 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[371.809px] left-0 top-0 w-[537.086px]" data-name="Container">
      <Container32 />
      <Button4 />
      <Container45 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2b6d0500} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p1fbecf00} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M4.16568 17.4958H15.8296" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[83.967px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[83.967px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-nowrap whitespace-pre">Frutificando</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[24.003px] items-center left-0 top-0 w-[111.956px]" data-name="Container">
      <Icon13 />
      <Heading6 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[200.98px] size-[15.988px] top-[7.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33076 7.99381H12.6569" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M7.99381 3.33076V12.6569" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#0f3d26] h-[31.997px] left-0 rounded-[8px] top-[39.99px] w-[537.107px]" data-name="Button">
      <Icon14 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[284.44px] text-[14px] text-center text-neutral-50 text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">Adicionar Matriz</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[19.974px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a1a1a] text-[14px] top-[-2px] w-[202px]">Pau-marfim - ID: PAU-00001-F24</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Balfourodendron riedelianum</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Fazenda São João</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#f8f8f8] h-[86.625px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[3.986px] h-[86.625px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container48 />
          <Container49 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[19.974px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a1a1a] text-[14px] top-[-2px] w-[215px]">Jequitibá-rosa - ID: JEQ-00002-F24</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Cariniana legalis</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Sítio Primavera</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#f8f8f8] h-[86.625px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[3.986px] h-[86.625px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container52 />
          <Container53 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.98px] h-[185.229px] items-start left-0 top-[87.97px] w-[537.107px]" data-name="Container">
      <Container51 />
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[371.809px] left-[561.07px] top-0 w-[537.107px]" data-name="Container">
      <Container47 />
      <Button5 />
      <Container56 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2131_1310)" id="Icon">
          <path d={svgPaths.p1156980} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p2cd8f780} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M1.66627 9.16449H18.329" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p25be7300} id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d="M3.74911 12.9136H16.2461" id="Vector_5" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p20039d80} id="Vector_6" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p33b36a00} id="Vector_7" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1310">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[69.415px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[69.415px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-nowrap whitespace-pre">Coletadas</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[24.003px] items-center left-0 top-0 w-[97.405px]" data-name="Container">
      <Icon15 />
      <Heading7 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[201.02px] size-[15.988px] top-[7.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33076 7.99381H12.6569" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M7.99381 3.33076V12.6569" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#0f3d26] h-[31.997px] left-0 rounded-[8px] top-[39.99px] w-[537.086px]" data-name="Button">
      <Icon16 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[284.48px] text-[14px] text-center text-neutral-50 text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">Adicionar Coleta</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px] tracking-[0.3px] uppercase">Isoladas</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[19.974px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-50 top-[-2px] w-[199px]">Ipê-amarelo - ID: IPE-00004-F24</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[12px]">Handroanthus chrysotrichus</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="basis-0 grow h-[39.948px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.986px] h-[39.948px] items-start relative w-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#0f3d26] h-[22.717px] relative rounded-[8px] shrink-0 w-[66.758px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22.717px] items-center justify-center overflow-clip px-[9.372px] py-[3.372px] relative rounded-[inherit] w-[66.758px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-neutral-50 text-nowrap whitespace-pre">3 coletas</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.372px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[39.948px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex h-[39.948px] items-start justify-between relative w-full">
          <Container62 />
          <Badge />
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[#0f3d26] h-[66.651px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.372px] border-[rgba(15,61,38,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[66.651px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[19.974px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-50 top-[-2px] w-[168px]">Cedro - ID: CED-00005-F24</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[12px]">Cedrela fissilis</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="basis-0 grow h-[39.948px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.986px] h-[39.948px] items-start relative w-full">
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#0f3d26] h-[22.717px] relative rounded-[8px] shrink-0 w-[66.758px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22.717px] items-center justify-center overflow-clip px-[9.372px] py-[3.372px] relative rounded-[inherit] w-[66.758px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-neutral-50 text-nowrap whitespace-pre">2 coletas</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.372px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[39.948px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex h-[39.948px] items-start justify-between relative w-full">
          <Container67 />
          <Badge1 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#0f3d26] h-[66.651px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.372px] border-[rgba(15,61,38,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[66.651px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[7.994px] h-[141.295px] items-start relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container69 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[7.994px] h-[165.277px] items-start relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container70 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px] tracking-[0.3px] uppercase">Não Isoladas</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[19.974px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a1a1a] text-[14px] top-[-2px] w-[203px]">Peroba-rosa - ID: PER-00006-F24</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Italic',sans-serif] font-normal grow italic leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Aspidosperma polyneuron</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="basis-0 grow h-[39.948px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.986px] h-[39.948px] items-start relative w-full">
        <Container73 />
        <Container74 />
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#f8f8f8] h-[22.717px] relative rounded-[8px] shrink-0 w-[59.771px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22.717px] items-center justify-center overflow-clip px-[9.372px] py-[3.372px] relative rounded-[inherit] w-[59.771px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#777777] text-[12px] text-nowrap whitespace-pre">1 coleta</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[39.948px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex h-[39.948px] items-start justify-between relative w-full">
          <Container75 />
          <Badge2 />
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[#f8f8f8] h-[66.651px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[66.651px] items-start pb-[1.372px] pt-[13.352px] px-[13.352px] relative w-full">
          <Container76 />
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col gap-[7.994px] h-[90.632px] items-start relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.988px] h-[271.897px] items-start left-0 top-[87.97px] w-[537.086px]" data-name="Container">
      <Container71 />
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[371.809px] left-[1122.16px] top-0 w-[537.086px]" data-name="Container">
      <Container58 />
      <Button6 />
      <Container79 />
    </div>
  );
}

function CalendarioFenologico5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1659.26px]" data-name="CalendarioFenologico">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[1659.26px]">
        <Container46 />
        <Container57 />
        <Container80 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[492.445px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[29.961px] h-[492.445px] items-start pl-[25.353px] pr-[1.372px] py-[25.353px] relative w-full">
          <CalendarioFenologico4 />
          <CalendarioFenologico5 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2131_1279)" id="Icon">
          <path d={svgPaths.p3671980} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p37155a80} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M7.99381 6.66151V14.6553" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p12247a00} id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p3e72de80} id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1279">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.974px] relative shrink-0 w-[74.666px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.974px] items-start relative w-[74.666px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Florescendo</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[19.974px] items-center left-[3.99px] top-0 w-[98.648px]" data-name="Container">
      <Icon17 />
      <Text />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35b7f700} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p5437230} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M3.33076 13.9892H12.6569" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.974px] relative shrink-0 w-[73.444px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.974px] items-start relative w-[73.444px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Frutificando</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[19.974px] items-center left-[126.62px] top-0 w-[97.426px]" data-name="Container">
      <Icon18 />
      <Text1 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2131_1265)" id="Icon">
          <path d={svgPaths.p2394e600} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p17fd7200} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M1.3323 7.32766H14.6553" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p355ac400} id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M2.99768 10.3253H12.9899" id="Vector_5" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p14959ac0} id="Vector_6" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p232ccb0} id="Vector_7" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1265">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.974px] relative shrink-0 w-[60.736px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.974px] items-start relative w-[60.736px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Coletadas</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[19.974px] items-center left-[248.02px] top-0 w-[84.717px]" data-name="Container">
      <Icon19 />
      <Text2 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[19.974px] relative shrink-0 w-full" data-name="Container">
      <Container81 />
      <Container82 />
      <Container83 />
    </div>
  );
}

function CalendarioFenologico6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.997px] h-[997.019px] items-start left-[32px] top-[328.63px] w-[1709.97px]" data-name="CalendarioFenologico">
      <Card4 />
      <Card5 />
      <Container84 />
    </div>
  );
}

function CardTitle6() {
  return (
    <div className="absolute h-[16.009px] left-[25.35px] top-[25.35px] w-[1659.26px]" data-name="CardTitle">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-3.11px] whitespace-pre">Valor em quilos coletados por espécie</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[3.33%_1.81%_33.33%_3.62%]" data-name="Group">
      <div className="absolute bottom-[-0.26%] left-0 right-0 top-[-0.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1569 191">
          <g id="Group">
            <path d="M1.49001e-06 190.498H1568.98" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1.49001e-06 142.999H1568.98" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1.49001e-06 95.4991H1568.98" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1.49001e-06 47.9995H1568.98" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M0 0.499995H1568.98" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[3.33%_1.81%_33.33%_3.62%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.03%] right-[-0.03%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1570 190">
          <g id="Group">
            <path d="M131.249 0V189.998" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M392.746 0V189.998" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M654.244 0V189.998" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M915.741 0V189.998" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1177.24 0V189.998" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1438.74 0V189.998" id="Vector_6" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d={svgPaths.p8fb5680} id="Vector_7" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1569.48 0V189.998" id="Vector_8" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[3.33%_1.81%_33.33%_3.62%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function RechartsZindex100R7S() {
  return (
    <div className="absolute contents inset-[3.33%_1.81%_33.33%_3.62%]" data-name="recharts-zindex--100-:r7s:">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[21.81%_82.21%_33.33%_5.19%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 135">
        <g id="Group">
          <path d={svgPaths.p2c7bab00} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[28.67%_66.45%_33.33%_20.96%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 114">
        <g id="Group">
          <path d={svgPaths.p25bc69f0} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[30.78%_50.68%_33.33%_36.72%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 108">
        <g id="Group">
          <path d={svgPaths.p1266340} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[38.69%_34.92%_33.33%_52.48%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 84">
        <g id="Group">
          <path d={svgPaths.p28e10e00} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[40.81%_19.16%_33.33%_68.24%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 78">
        <g id="Group">
          <path d={svgPaths.p2ea3f600} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[47.14%_3.4%_33.33%_84.01%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 59">
        <g id="Group">
          <path d={svgPaths.p1d8deb00} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[21.81%_3.4%_33.33%_5.19%]" data-name="Group">
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
    <div className="absolute contents inset-[21.81%_3.4%_33.33%_5.19%]" data-name="Group">
      <Group9 />
    </div>
  );
}

function RechartsBarR7U() {
  return (
    <div className="absolute contents inset-[21.81%_3.4%_33.33%_5.19%]" data-name="recharts-bar-:r7u:">
      <Group10 />
    </div>
  );
}

function RechartsZindex300R() {
  return (
    <div className="absolute contents inset-[21.81%_3.4%_33.33%_5.19%]" data-name="recharts-zindex-300-:r81:">
      <RechartsBarR7U />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[66.67%_88.5%_31.33%_11.5%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[66.67%_72.74%_31.33%_27.26%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[66.67%_56.98%_31.33%_43.02%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[66.67%_41.21%_31.33%_58.79%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[66.67%_25.45%_31.33%_74.55%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[66.67%_9.69%_31.33%_90.31%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[66.67%_9.69%_31.33%_11.5%]" data-name="Group">
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
    <div className="absolute contents inset-[66.67%_9.69%_31.33%_11.5%]" data-name="Group">
      <Group17 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[66.67%_1.81%_31.33%_3.62%]" data-name="Group">
      <div className="absolute inset-[66.67%_1.81%_33.33%_3.62%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1569 1">
            <path d="M0 0.499995H1568.98" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </svg>
        </div>
      </div>
      <Group18 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[66.67%_96.38%_33.33%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[50.83%_96.38%_49.17%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[35%_96.38%_65%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[19.17%_96.38%_80.83%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[3.33%_96.38%_96.67%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[3.33%_96.38%_33.33%_3.25%]" data-name="Group">
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
    <div className="absolute contents inset-[3.33%_96.38%_33.33%_3.25%]" data-name="Group">
      <Group25 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[3.33%_96.38%_33.33%_3.25%]" data-name="Group">
      <div className="absolute inset-[3.33%_96.38%_33.33%_3.62%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 190">
            <path d="M0.499995 0V189.998" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </svg>
        </div>
      </div>
      <Group26 />
    </div>
  );
}

function RechartsZindex500R() {
  return (
    <div className="absolute contents inset-[3.33%_1.81%_31.33%_3.25%]" data-name="recharts-zindex-500-:r83:">
      <Group19 />
      <Group27 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[68.51%_88.01%_15.69%_9.13%]" data-name="Group">
      <div className="absolute flex inset-[68.51%_88.01%_15.69%_9.13%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[315deg] w-[52px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">Andiroba</p>
        </div>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[68.51%_72.25%_18.76%_25.45%]" data-name="Group">
      <div className="absolute flex inset-[68.51%_72.25%_18.76%_25.45%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[315deg] w-[39px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">Jatobá</p>
        </div>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[68.51%_56.49%_11.92%_39.98%]" data-name="Group">
      <div className="absolute flex inset-[68.51%_56.49%_11.92%_39.98%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[315deg] w-[68px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">Ipê Amarelo</p>
        </div>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[68.51%_40.72%_18.76%_56.97%]" data-name="Group">
      <div className="absolute flex inset-[68.51%_40.72%_18.76%_56.97%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[315deg] w-[39px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">Manga</p>
        </div>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[68.51%_24.96%_19.7%_72.91%]" data-name="Group">
      <div className="absolute flex inset-[68.51%_24.96%_19.7%_72.91%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[315deg] w-[35px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">Cedro</p>
        </div>
      </div>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[68.51%_9.2%_11.22%_87.14%]" data-name="Group">
      <div className="absolute flex inset-[68.51%_9.2%_11.22%_87.14%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[315deg] w-[71px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">Peroba-rosa</p>
        </div>
      </div>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[68.51%_9.2%_11.22%_9.13%]" data-name="Group">
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
    <div className="absolute contents inset-[64.09%_96.87%_30.91%_2.65%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[64.09%_96.87%_30.91%_2.65%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">0</p>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[48.25%_96.87%_46.75%_2.65%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[48.25%_96.87%_46.75%_2.65%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">3</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[32.42%_96.87%_62.58%_2.65%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[32.42%_96.87%_62.58%_2.65%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">6</p>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[16.59%_96.87%_78.41%_2.65%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[16.59%_96.87%_78.41%_2.65%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">9</p>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[0.75%_96.87%_94.25%_2.35%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.75%_96.87%_94.25%_2.35%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">12</p>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[0.75%_96.87%_30.91%_2.35%]" data-name="Group">
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
    <div className="absolute contents inset-[-5%_9.2%_11.22%_-0.17%]" data-name="recharts-zindex-2000-:r88:">
      <Group34 />
      <Group40 />
      <div className="absolute flex inset-[-5%_99.26%_65%_-0.17%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[270deg] w-[120px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap whitespace-pre">Quilos coletados (kg)</p>
        </div>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute h-[299.997px] left-0 overflow-clip top-0 w-[1658.98px]" data-name="Icon">
      <RechartsZindex100R7S />
      <RechartsZindex300R />
      <RechartsZindex500R />
      <RechartsZindex2000R />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="absolute h-[299.993px] left-[25.35px] top-[71.32px] w-[1658.98px]" data-name="CardContent">
      <Icon20 />
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute bg-white h-[396.669px] left-[32px] rounded-[14px] top-[1349.63px] w-[1709.97px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle6 />
      <CardContent2 />
    </div>
  );
}

function CardTitle7() {
  return (
    <div className="absolute h-[16.009px] left-[25.35px] top-[25.35px] w-[1659.26px]" data-name="CardTitle">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-3.11px] whitespace-pre">Quantidade de sementes coletadas mês a mês</p>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute inset-[3.33%_1.81%_16.67%_3.62%]" data-name="Group">
      <div className="absolute bottom-[-0.21%] left-0 right-0 top-[-0.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1569 241">
          <g id="Group">
            <path d="M1.49001e-06 240.498H1568.98" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1.49001e-06 180.498H1568.98" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1.49001e-06 120.499H1568.98" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1.49001e-06 60.4994H1568.98" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M0 0.499995H1568.98" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute inset-[3.33%_1.81%_16.67%_3.62%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.03%] right-[-0.03%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1570 240">
          <g id="Group">
            <path d="M0.499995 0V239.998" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M143.135 2.79147e-06V239.998" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M285.77 2.79147e-06V239.998" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M428.405 2.79147e-06V239.998" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M571.04 2.79147e-06V239.998" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M713.675 2.79147e-06V239.998" id="Vector_6" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M856.31 2.79147e-06V239.998" id="Vector_7" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M998.945 2.79147e-06V239.998" id="Vector_8" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1141.58 2.79147e-06V239.998" id="Vector_9" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1284.21 2.79147e-06V239.998" id="Vector_10" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1426.85 2.79147e-06V239.998" id="Vector_11" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1569.48 2.79147e-06V239.998" id="Vector_12" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-[3.33%_1.81%_16.67%_3.62%]" data-name="Group">
      <Group41 />
      <Group42 />
    </div>
  );
}

function RechartsZindex100R() {
  return (
    <div className="absolute contents inset-[3.33%_1.81%_16.67%_3.62%]" data-name="recharts-zindex--100-:r89:">
      <Group43 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute inset-[26.67%_1.81%_33.33%_3.62%]" data-name="Group">
      <div className="absolute inset-[-1.25%_-0.01%_-1.24%_-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1570 123">
          <g id="Group">
            <path d={svgPaths.pe606000} id="recharts-line-:r8b:" stroke="var(--stroke-0, #16A34A)" strokeWidth="2.99997" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RechartsZindex400R8F() {
  return (
    <div className="absolute contents inset-[26.67%_1.81%_33.33%_3.62%]" data-name="recharts-zindex-400-:r8f:">
      <Group44 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute inset-[83.33%_96.38%_14.67%_3.62%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[83.33%_87.79%_14.67%_12.21%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute inset-[83.33%_79.19%_14.67%_20.81%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute inset-[83.33%_70.59%_14.67%_29.41%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute inset-[83.33%_61.99%_14.67%_38.01%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute inset-[83.33%_53.39%_14.67%_46.61%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute inset-[83.33%_44.8%_14.67%_55.2%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute inset-[83.33%_36.2%_14.67%_63.8%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute inset-[83.33%_27.6%_14.67%_72.4%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute inset-[83.33%_19%_14.67%_81%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute inset-[83.33%_10.41%_14.67%_89.59%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute inset-[83.33%_1.81%_14.67%_98.19%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents inset-[83.33%_1.81%_14.67%_3.62%]" data-name="Group">
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
    <div className="absolute contents inset-[83.33%_1.81%_14.67%_3.62%]" data-name="Group">
      <Group57 />
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute contents inset-[83.33%_1.81%_14.67%_3.62%]" data-name="Group">
      <div className="absolute inset-[83.33%_1.81%_16.67%_3.62%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1569 1">
            <path d="M0 0.499995H1568.98" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </svg>
        </div>
      </div>
      <Group58 />
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute inset-[83.33%_96.38%_16.67%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute inset-[63.33%_96.38%_36.67%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute inset-[43.33%_96.38%_56.67%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute inset-[23.33%_96.38%_76.67%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute inset-[3.33%_96.38%_96.67%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute contents inset-[3.33%_96.38%_16.67%_3.25%]" data-name="Group">
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
    <div className="absolute contents inset-[3.33%_96.38%_16.67%_3.25%]" data-name="Group">
      <Group65 />
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute contents inset-[3.33%_96.38%_16.67%_3.25%]" data-name="Group">
      <div className="absolute inset-[3.33%_96.38%_16.67%_3.62%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 240">
            <path d="M0.499995 0V239.998" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </svg>
        </div>
      </div>
      <Group66 />
    </div>
  );
}

function RechartsZindex500R8G() {
  return (
    <div className="absolute contents inset-[3.33%_1.81%_14.67%_3.25%]" data-name="recharts-zindex-500-:r8g:">
      <Group59 />
      <Group67 />
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute bottom-[31.67%] left-[3.32%] right-[1.51%] top-1/4" data-name="Group">
      <div className="absolute inset-[-1.15%_-0.1%_-1.15%_-0.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1582 133">
          <g id="Group">
            <path d={svgPaths.p3f64d100} fill="var(--fill-0, #16A34A)" id="Vector" stroke="var(--stroke-0, #16A34A)" strokeWidth="2.99997" />
            <path d={svgPaths.p19373400} fill="var(--fill-0, #16A34A)" id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeWidth="2.99997" />
            <path d={svgPaths.peff3880} fill="var(--fill-0, #16A34A)" id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeWidth="2.99997" />
            <path d={svgPaths.p3e45f600} fill="var(--fill-0, #16A34A)" id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeWidth="2.99997" />
            <path d={svgPaths.p3a2e5af0} fill="var(--fill-0, #16A34A)" id="Vector_5" stroke="var(--stroke-0, #16A34A)" strokeWidth="2.99997" />
            <path d={svgPaths.pe04a400} fill="var(--fill-0, #16A34A)" id="Vector_6" stroke="var(--stroke-0, #16A34A)" strokeWidth="2.99997" />
            <path d={svgPaths.pa8d200} fill="var(--fill-0, #16A34A)" id="Vector_7" stroke="var(--stroke-0, #16A34A)" strokeWidth="2.99997" />
            <path d={svgPaths.pd8dc280} fill="var(--fill-0, #16A34A)" id="Vector_8" stroke="var(--stroke-0, #16A34A)" strokeWidth="2.99997" />
            <path d={svgPaths.p2d294d00} fill="var(--fill-0, #16A34A)" id="Vector_9" stroke="var(--stroke-0, #16A34A)" strokeWidth="2.99997" />
            <path d={svgPaths.pd786f00} fill="var(--fill-0, #16A34A)" id="Vector_10" stroke="var(--stroke-0, #16A34A)" strokeWidth="2.99997" />
            <path d={svgPaths.p28305f00} fill="var(--fill-0, #16A34A)" id="Vector_11" stroke="var(--stroke-0, #16A34A)" strokeWidth="2.99997" />
            <path d={svgPaths.p14a20200} fill="var(--fill-0, #16A34A)" id="Vector_12" stroke="var(--stroke-0, #16A34A)" strokeWidth="2.99997" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RechartsZindex600R8H() {
  return (
    <div className="absolute bottom-[31.67%] contents left-[3.32%] right-[1.51%] top-1/4" data-name="recharts-zindex-600-:r8h:">
      <Group68 />
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute contents inset-[84.84%_95.75%_10.16%_2.98%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_95.75%_10.16%_2.98%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Jan</p>
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute contents inset-[84.84%_87.15%_10.16%_11.58%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_87.15%_10.16%_11.58%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Fev</p>
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute contents inset-[84.84%_78.52%_10.16%_20.15%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_78.52%_10.16%_20.15%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Mar</p>
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute contents inset-[84.84%_69.96%_10.16%_28.78%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_69.96%_10.16%_28.78%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Abr</p>
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute contents inset-[84.84%_61.36%_10.16%_37.37%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_61.36%_10.16%_37.37%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Mai</p>
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute contents inset-[84.84%_52.76%_10.16%_45.97%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_52.76%_10.16%_45.97%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Jun</p>
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute contents inset-[84.84%_44.28%_10.16%_54.69%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_44.28%_10.16%_54.69%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Jul</p>
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute contents inset-[84.84%_35.51%_10.16%_63.11%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_35.51%_10.16%_63.11%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Ago</p>
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute contents inset-[84.84%_27.03%_10.16%_71.83%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_27.03%_10.16%_71.83%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Set</p>
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute contents inset-[84.84%_18.37%_10.16%_80.36%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_18.37%_10.16%_80.36%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Out</p>
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute contents inset-[84.84%_9.71%_10.16%_88.9%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_9.71%_10.16%_88.9%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Nov</p>
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute contents inset-[84.84%_1.12%_10.16%_97.5%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_1.12%_10.16%_97.5%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Dez</p>
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute contents inset-[84.84%_1.12%_10.16%_2.98%]" data-name="Group">
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
    <div className="absolute contents inset-[80.75%_96.87%_14.25%_2.65%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[80.75%_96.87%_14.25%_2.65%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">0</p>
    </div>
  );
}

function Group83() {
  return (
    <div className="absolute contents inset-[60.75%_96.87%_34.25%_2.65%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[60.75%_96.87%_34.25%_2.65%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">3</p>
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute contents inset-[40.75%_96.87%_54.25%_2.65%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.75%_96.87%_54.25%_2.65%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">6</p>
    </div>
  );
}

function Group85() {
  return (
    <div className="absolute contents inset-[20.75%_96.87%_74.25%_2.65%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[20.75%_96.87%_74.25%_2.65%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">9</p>
    </div>
  );
}

function Group86() {
  return (
    <div className="absolute contents inset-[0.75%_96.87%_94.25%_2.35%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.75%_96.87%_94.25%_2.35%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">12</p>
    </div>
  );
}

function Group87() {
  return (
    <div className="absolute contents inset-[0.75%_96.87%_14.25%_2.35%]" data-name="Group">
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
    <div className="absolute contents inset-[0.75%_1.12%_10.16%_-0.17%]" data-name="recharts-zindex-2000-:r8l:">
      <Group81 />
      <Group87 />
      <div className="absolute flex inset-[23%_99.26%_56.67%_-0.17%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[270deg] w-[61px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap whitespace-pre">Quilos (kg)</p>
        </div>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute h-[299.997px] left-0 overflow-clip top-0 w-[1658.98px]" data-name="Icon">
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
    <div className="absolute h-[299.993px] left-[25.35px] top-[71.32px] w-[1658.98px]" data-name="CardContent">
      <Icon21 />
    </div>
  );
}

function Card7() {
  return (
    <div className="absolute bg-white h-[396.669px] left-[32px] rounded-[14px] top-[1770.28px] w-[1709.97px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle7 />
      <CardContent3 />
    </div>
  );
}

function CardTitle8() {
  return (
    <div className="absolute h-[16.009px] left-[25.35px] top-[25.35px] w-[1659.26px]" data-name="CardTitle">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-3.11px] whitespace-pre">Quantidade de matrizes coletadas mês a mês</p>
    </div>
  );
}

function Group88() {
  return (
    <div className="absolute inset-[3.33%_1.81%_16.67%_3.62%]" data-name="Group">
      <div className="absolute bottom-[-0.21%] left-0 right-0 top-[-0.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1569 241">
          <g id="Group">
            <path d="M1.49001e-06 240.498H1568.98" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1.49001e-06 180.498H1568.98" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1.49001e-06 120.499H1568.98" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1.49001e-06 60.4994H1568.98" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M0 0.499995H1568.98" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group89() {
  return (
    <div className="absolute inset-[3.33%_1.81%_16.67%_3.62%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.03%] right-[-0.03%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1570 240">
          <g id="Group">
            <path d="M65.8744 0V239.998" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M196.623 0V239.998" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M327.372 0V239.998" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M458.121 0V239.998" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M588.869 0V239.998" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M719.618 0V239.998" id="Vector_6" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M850.367 0V239.998" id="Vector_7" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M981.116 0V239.998" id="Vector_8" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1111.86 0V239.998" id="Vector_9" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1242.61 0V239.998" id="Vector_10" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1373.36 0V239.998" id="Vector_11" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1504.11 0V239.998" id="Vector_12" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d={svgPaths.p2e7ab000} id="Vector_13" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
            <path d="M1569.48 0V239.998" id="Vector_14" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group90() {
  return (
    <div className="absolute contents inset-[3.33%_1.81%_16.67%_3.62%]" data-name="Group">
      <Group88 />
      <Group89 />
    </div>
  );
}

function RechartsZindex100R8M() {
  return (
    <div className="absolute contents inset-[3.33%_1.81%_16.67%_3.62%]" data-name="recharts-zindex--100-:r8m:">
      <Group90 />
    </div>
  );
}

function Group91() {
  return (
    <div className="absolute inset-[56.67%_89.33%_16.67%_4.4%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 80">
        <g id="Group">
          <path d={svgPaths.p1316fc00} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group92() {
  return (
    <div className="absolute inset-[43.33%_81.45%_16.67%_12.29%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 120">
        <g id="Group">
          <path d={svgPaths.p3bce6f00} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group93() {
  return (
    <div className="absolute inset-[33.33%_73.56%_16.67%_20.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 150">
        <g id="Group">
          <path d={svgPaths.p43fd00} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group94() {
  return (
    <div className="absolute inset-[23.33%_65.68%_16.67%_28.05%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 180">
        <g id="Group">
          <path d={svgPaths.p33ba4500} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group95() {
  return (
    <div className="absolute inset-[10%_57.8%_16.67%_35.93%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 220">
        <g id="Group">
          <path d={svgPaths.p3cb7c380} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group96() {
  return (
    <div className="absolute inset-[20%_49.92%_16.67%_43.81%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 190">
        <g id="Group">
          <path d={svgPaths.p1d287f00} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group97() {
  return (
    <div className="absolute inset-[3.33%_42.04%_16.67%_51.69%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 240">
        <g id="Group">
          <path d={svgPaths.p33dbb900} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group98() {
  return (
    <div className="absolute inset-[16.67%_34.16%_16.67%_59.57%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 200">
        <g id="Group">
          <path d={svgPaths.p36c51b00} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group99() {
  return (
    <div className="absolute inset-[26.67%_26.28%_16.67%_67.45%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 170">
        <g id="Group">
          <path d={svgPaths.p3955df80} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group100() {
  return (
    <div className="absolute inset-[36.67%_18.4%_16.67%_75.34%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 140">
        <g id="Group">
          <path d={svgPaths.p21942100} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group101() {
  return (
    <div className="absolute inset-[46.67%_10.51%_16.67%_83.22%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 110">
        <g id="Group">
          <path d={svgPaths.p266d4c00} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group102() {
  return (
    <div className="absolute inset-[53.33%_2.63%_16.67%_91.1%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 90">
        <g id="Group">
          <path d={svgPaths.p87ed480} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group103() {
  return (
    <div className="absolute contents inset-[3.33%_2.63%_16.67%_4.4%]" data-name="Group">
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
    <div className="absolute contents inset-[3.33%_2.63%_16.67%_4.4%]" data-name="Group">
      <Group103 />
    </div>
  );
}

function RechartsBarR8O() {
  return (
    <div className="absolute contents inset-[3.33%_2.63%_16.67%_4.4%]" data-name="recharts-bar-:r8o:">
      <Group104 />
    </div>
  );
}

function RechartsZindex300R8R() {
  return (
    <div className="absolute contents inset-[3.33%_2.63%_16.67%_4.4%]" data-name="recharts-zindex-300-:r8r:">
      <RechartsBarR8O />
    </div>
  );
}

function Group105() {
  return (
    <div className="absolute inset-[83.33%_92.44%_14.67%_7.56%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group106() {
  return (
    <div className="absolute inset-[83.33%_84.56%_14.67%_15.44%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group107() {
  return (
    <div className="absolute inset-[83.33%_76.68%_14.67%_23.32%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group108() {
  return (
    <div className="absolute inset-[83.33%_68.8%_14.67%_31.2%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group109() {
  return (
    <div className="absolute inset-[83.33%_60.92%_14.67%_39.08%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group110() {
  return (
    <div className="absolute inset-[83.33%_53.04%_14.67%_46.96%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group111() {
  return (
    <div className="absolute inset-[83.33%_45.16%_14.67%_54.84%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group112() {
  return (
    <div className="absolute inset-[83.33%_37.27%_14.67%_62.73%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group113() {
  return (
    <div className="absolute inset-[83.33%_29.39%_14.67%_70.61%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group114() {
  return (
    <div className="absolute inset-[83.33%_21.51%_14.67%_78.49%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group115() {
  return (
    <div className="absolute inset-[83.33%_13.63%_14.67%_86.37%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group116() {
  return (
    <div className="absolute inset-[83.33%_5.75%_14.67%_94.25%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.499995 6V0" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group117() {
  return (
    <div className="absolute contents inset-[83.33%_5.75%_14.67%_7.56%]" data-name="Group">
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
    <div className="absolute contents inset-[83.33%_5.75%_14.67%_7.56%]" data-name="Group">
      <Group117 />
    </div>
  );
}

function Group119() {
  return (
    <div className="absolute contents inset-[83.33%_1.81%_14.67%_3.62%]" data-name="Group">
      <div className="absolute inset-[83.33%_1.81%_16.67%_3.62%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1569 1">
            <path d="M0 0.499995H1568.98" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </svg>
        </div>
      </div>
      <Group118 />
    </div>
  );
}

function Group120() {
  return (
    <div className="absolute inset-[83.33%_96.38%_16.67%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group121() {
  return (
    <div className="absolute inset-[63.33%_96.38%_36.67%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group122() {
  return (
    <div className="absolute inset-[43.33%_96.38%_56.67%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group123() {
  return (
    <div className="absolute inset-[23.33%_96.38%_76.67%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group124() {
  return (
    <div className="absolute inset-[3.33%_96.38%_96.67%_3.25%]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.499995H6" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group125() {
  return (
    <div className="absolute contents inset-[3.33%_96.38%_16.67%_3.25%]" data-name="Group">
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
    <div className="absolute contents inset-[3.33%_96.38%_16.67%_3.25%]" data-name="Group">
      <Group125 />
    </div>
  );
}

function Group127() {
  return (
    <div className="absolute contents inset-[3.33%_96.38%_16.67%_3.25%]" data-name="Group">
      <div className="absolute inset-[3.33%_96.38%_16.67%_3.62%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 240">
            <path d="M0.499995 0V239.998" id="Vector" stroke="var(--stroke-0, #777777)" strokeWidth="0.99999" />
          </svg>
        </div>
      </div>
      <Group126 />
    </div>
  );
}

function RechartsZindex500R8T() {
  return (
    <div className="absolute contents inset-[3.33%_1.81%_14.67%_3.25%]" data-name="recharts-zindex-500-:r8t:">
      <Group119 />
      <Group127 />
    </div>
  );
}

function Group128() {
  return (
    <div className="absolute contents inset-[84.84%_91.81%_10.16%_6.92%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_91.81%_10.16%_6.92%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Jan</p>
    </div>
  );
}

function Group129() {
  return (
    <div className="absolute contents inset-[84.84%_83.93%_10.16%_14.81%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_83.93%_10.16%_14.81%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Fev</p>
    </div>
  );
}

function Group130() {
  return (
    <div className="absolute contents inset-[84.84%_76.02%_10.16%_22.66%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_76.02%_10.16%_22.66%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Mar</p>
    </div>
  );
}

function Group131() {
  return (
    <div className="absolute contents inset-[84.84%_68.17%_10.16%_30.57%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_68.17%_10.16%_30.57%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Abr</p>
    </div>
  );
}

function Group132() {
  return (
    <div className="absolute contents inset-[84.84%_60.28%_10.16%_38.45%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_60.28%_10.16%_38.45%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Mai</p>
    </div>
  );
}

function Group133() {
  return (
    <div className="absolute contents inset-[84.84%_52.4%_10.16%_46.33%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_52.4%_10.16%_46.33%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Jun</p>
    </div>
  );
}

function Group134() {
  return (
    <div className="absolute contents inset-[84.84%_44.64%_10.16%_54.33%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_44.64%_10.16%_54.33%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Jul</p>
    </div>
  );
}

function Group135() {
  return (
    <div className="absolute contents inset-[84.84%_36.58%_10.16%_62.03%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_36.58%_10.16%_62.03%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Ago</p>
    </div>
  );
}

function Group136() {
  return (
    <div className="absolute contents inset-[84.84%_28.82%_10.16%_70.03%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_28.82%_10.16%_70.03%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Set</p>
    </div>
  );
}

function Group137() {
  return (
    <div className="absolute contents inset-[84.84%_20.88%_10.16%_77.86%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_20.88%_10.16%_77.86%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Out</p>
    </div>
  );
}

function Group138() {
  return (
    <div className="absolute contents inset-[84.84%_12.94%_10.16%_85.68%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_12.94%_10.16%_85.68%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Nov</p>
    </div>
  );
}

function Group139() {
  return (
    <div className="absolute contents inset-[84.84%_5.06%_10.16%_93.56%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_5.06%_10.16%_93.56%] leading-[normal] not-italic text-[#777777] text-[12px] text-center text-nowrap whitespace-pre">Dez</p>
    </div>
  );
}

function Group140() {
  return (
    <div className="absolute contents inset-[84.84%_5.06%_10.16%_6.92%]" data-name="Group">
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
    <div className="absolute contents inset-[80.75%_96.87%_14.25%_2.65%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[80.75%_96.87%_14.25%_2.65%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">0</p>
    </div>
  );
}

function Group142() {
  return (
    <div className="absolute contents inset-[60.75%_96.87%_34.25%_2.65%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[60.75%_96.87%_34.25%_2.65%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">6</p>
    </div>
  );
}

function Group143() {
  return (
    <div className="absolute contents inset-[40.75%_96.87%_54.25%_2.35%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.75%_96.87%_54.25%_2.35%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">12</p>
    </div>
  );
}

function Group144() {
  return (
    <div className="absolute contents inset-[20.75%_96.87%_74.25%_2.35%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[20.75%_96.87%_74.25%_2.35%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">18</p>
    </div>
  );
}

function Group145() {
  return (
    <div className="absolute contents inset-[0.75%_96.87%_94.25%_2.23%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.75%_96.87%_94.25%_2.23%] leading-[normal] not-italic text-[#777777] text-[12px] text-nowrap text-right whitespace-pre">24</p>
    </div>
  );
}

function Group146() {
  return (
    <div className="absolute contents inset-[0.75%_96.87%_14.25%_2.23%]" data-name="Group">
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
    <div className="absolute contents inset-[0.75%_5.06%_10.16%_-0.17%]" data-name="recharts-zindex-2000-:r92:">
      <Group140 />
      <Group146 />
      <div className="absolute flex inset-[5%_99.26%_56.67%_-0.17%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[270deg] w-[115px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#777777] text-[12px] text-nowrap whitespace-pre">Número de matrizes</p>
        </div>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute h-[299.997px] left-0 overflow-clip top-0 w-[1658.98px]" data-name="Icon">
      <RechartsZindex100R8M />
      <RechartsZindex300R8R />
      <RechartsZindex500R8T />
      <RechartsZindex2000R1 />
    </div>
  );
}

function CardContent4() {
  return (
    <div className="absolute h-[299.993px] left-[25.35px] top-[71.32px] w-[1658.98px]" data-name="CardContent">
      <Icon22 />
    </div>
  );
}

function Card8() {
  return (
    <div className="absolute bg-white h-[396.669px] left-[32px] rounded-[14px] top-[2190.93px] w-[1709.97px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle8 />
      <CardContent4 />
    </div>
  );
}

function DashboardPrincipal6() {
  return (
    <div className="h-[2619.59px] relative shrink-0 w-full" data-name="DashboardPrincipal">
      <Container1 />
      <Container2 />
      <CalendarioFenologico6 />
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 grow h-[851.759px] min-h-px min-w-px relative shrink-0" data-name="Main Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[851.759px] items-start pb-0 pl-0 pr-[31.547px] relative w-full">
          <DashboardPrincipal6 />
        </div>
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

function Heading1() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">RastaFlor</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[16.009px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Módulo de Coleta</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[89.346px] items-start left-0 pb-[1.372px] pt-[23.981px] px-[23.981px] top-0 w-[254.623px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1.372px] border-solid inset-0 pointer-events-none" />
      <Heading1 />
      <Paragraph3 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p11c6a180} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.p40e5e00} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[78.802px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[78.802px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-neutral-50 text-nowrap whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#0f3d26] box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[23.98px] w-[222.648px]" data-name="Button">
      <Icon23 />
      <Text3 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2131_1126)" id="Icon">
          <path d={svgPaths.p2c43f500} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.pf44ec80} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2131_1126">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[93.225px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[93.225px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Propriedades</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[75.95px] w-[222.648px]" data-name="Button">
      <Icon24 />
      <Text4 />
    </div>
  );
}

function Icon25() {
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

function Text5() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[59.064px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[59.064px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Espécies</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[127.92px] w-[222.648px]" data-name="Button">
      <Icon25 />
      <Text5 />
    </div>
  );
}

function Icon26() {
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

function Text6() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[51.863px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[51.863px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Coletas</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[179.89px] w-[222.648px]" data-name="Button">
      <Icon26 />
      <Text6 />
    </div>
  );
}

function Icon27() {
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

function Text7() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[117.914px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[117.914px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Monitoramentos</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[231.86px] w-[222.648px]" data-name="Button">
      <Icon27 />
      <Text7 />
    </div>
  );
}

function Icon28() {
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

function Text8() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[52.978px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[52.978px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Rótulos</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[283.83px] w-[222.648px]" data-name="Button">
      <Icon28 />
      <Text8 />
    </div>
  );
}

function Icon29() {
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

function Text9() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[69.865px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[69.865px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Relatórios</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[335.8px] w-[222.648px]" data-name="Button">
      <Icon29 />
      <Text9 />
    </div>
  );
}

function Icon30() {
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

function Text10() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[48.199px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[48.199px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Equipe</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[387.77px] w-[222.648px]" data-name="Button">
      <Icon30 />
      <Text10 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[591.735px] left-0 overflow-clip top-[89.35px] w-[254.623px]" data-name="Navigation">
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Icon31() {
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

function Text11() {
  return (
    <div className="basis-0 grow h-[39.99px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.99px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#777777] text-[14px] top-[-2px] w-[153px]">Alternar para Módulo de Restauração</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[67.98px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[11.98px] h-[67.98px] items-center px-[11.98px] py-0 relative w-full">
          <Icon31 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[101.326px] items-start left-0 pb-0 pt-[17.359px] px-[15.988px] top-[681.08px] w-[254.623px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button15 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20.981px] relative shrink-0 w-[13.737px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.981px] items-start relative w-[13.737px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">JP</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="bg-[#f0f0f0] relative rounded-[4.6023e+07px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.997px]">
        <Text12 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[19.995px] items-start left-0 overflow-clip top-0 w-[178.671px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[14px]">João Paulo</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute content-stretch flex h-[16.009px] items-start left-0 overflow-clip top-[20px] w-[178.671px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Gestor Ambiental</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="basis-0 grow h-[36.004px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36.004px] relative w-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex gap-[11.98px] h-[36.004px] items-center relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[69.351px] items-start left-0 pb-0 pt-[17.359px] px-[15.988px] top-[782.41px] w-[254.623px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container89 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white h-[851.759px] left-0 top-0 w-[255.995px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_1.372px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container85 />
      <Navigation />
      <Container86 />
      <Container90 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[18.002px] left-0 top-[-20000px] w-[12.944px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-neutral-950 text-nowrap top-[-0.63px] whitespace-pre">18</p>
    </div>
  );
}

function App1() {
  return <div className="absolute h-[851.759px] left-0 top-0 w-0" data-name="App" />;
}

function Icon32() {
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

function Button16() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[35.983px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.021px] py-0 relative size-[35.983px]">
        <Icon32 />
      </div>
    </div>
  );
}

function Icon33() {
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

function Button17() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[35.983px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[35.983px]">
        <Icon33 />
      </div>
    </div>
  );
}

function Icon34() {
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

function Button18() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[35.983px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[35.983px]">
        <Icon34 />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[11.98px] h-[63.993px] items-center justify-end left-[255.99px] pb-[1.372px] pl-0 pr-[23.981px] pt-0 top-0 w-[1805.51px]" data-name="TopBar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1.372px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
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
      <Sidebar />
      <Text13 />
      <App1 />
      <TopBar />
    </div>
  );
}