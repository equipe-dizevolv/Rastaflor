import svgPaths from "./svg-sh8ubsjudq";
import imgImageRastaFlorLogo from "figma:asset/67aa7b1ef27bf90ec544aed2b26b2cf8bfa7631c.png";

function ImageRastaFlorLogo() {
  return (
    <div className="h-[63px] relative shrink-0 w-[159px]" data-name="Image (RastaFlor Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageRastaFlorLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[63px] w-[159px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#0f3d26] box-border content-stretch flex h-[64px] items-center left-0 pb-px pl-[24px] pr-0 pt-0 top-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ImageRastaFlorLogo />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f3d26] text-[14px] text-center text-nowrap whitespace-pre">🔐 Painel Administrativo</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(15,61,38,0.1)] h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[40px] items-start pb-0 pt-[12px] px-[29.609px] relative w-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[65px] items-start left-0 pb-px pt-[12px] px-[16px] top-[64px] w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1fc96a00} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p33089d00} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p49cfa80} id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1cfbf300} id="Vector_4" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[82.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[82.469px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-1px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[44px] items-center left-0 pl-[12px] pr-0 py-0 rounded-[12px] top-0 w-[223px]" data-name="Button">
      <Icon />
      <Text1 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <Button />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M8.33333 10H11.6667" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 6.66667H11.6667" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p16bb4600} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b103700} id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p24196980} id="Vector_5" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[75.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[75.359px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-1px] whitespace-pre">Empresas</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#0f3d26] box-border content-stretch flex gap-[12px] h-[44px] items-center left-0 pl-[12px] pr-0 py-0 rounded-[12px] top-0 w-[223px]" data-name="Button">
      <Icon1 />
      <Text2 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <Button1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p18406864} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_4" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[66.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[66.219px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-1px] whitespace-pre">Usuários</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[44px] items-center left-0 pl-[12px] pr-0 py-0 rounded-[12px] top-0 w-[223px]" data-name="Button">
      <Icon2 />
      <Text3 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <Button2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 16.6667V9.16667" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p293ab980} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1bf006c0} id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e7a1c0} id="Vector_4" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2e14eb80} id="Vector_5" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 10.8333H15" id="Vector_6" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p568c400} id="Vector_7" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p22fb5b00} id="Vector_8" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 10.8333H1.66667" id="Vector_9" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p21d07880} id="Vector_10" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p805b580} id="Vector_11" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[130.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[130.25px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-1px] whitespace-pre">Bugs Reportados</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[44px] items-center left-0 pl-[12px] pr-0 py-0 rounded-[12px] top-0 w-[223px]" data-name="Button">
      <Icon3 />
      <Text4 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="List Item">
      <Button3 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[200px] items-start left-[16px] top-[145px] w-[223px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M12.5 2.5H17.5V7.5" id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 11.6667L17.5 2.5" id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p387614c0} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[121.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[121.672px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#777777] text-[14px] text-nowrap top-0 whitespace-pre">Ir para o aplicativo</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[40px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon4 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p14ca9100} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 10H7.5" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p38966ca0} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[25.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[25.359px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#e7000b] text-[14px] text-nowrap top-0 whitespace-pre">Sair</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[40px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon5 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[121px] items-start left-0 pb-0 pt-[17px] px-[16px] top-[658px] w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button4 />
      <Button5 />
    </div>
  );
}

function AdminSidebar() {
  return (
    <div className="bg-white h-[779px] relative shrink-0 w-[256px]" data-name="AdminSidebar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[779px] relative w-[256px]">
        <Container />
        <Container2 />
        <List />
        <Container3 />
      </div>
    </div>
  );
}

function Icon6() {
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

function Button6() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
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

function Button7() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon7 />
      </div>
    </div>
  );
}

function AdminHeader() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-[1423px]" data-name="AdminHeader">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[64px] items-center justify-end pb-px pl-0 pr-[24px] pt-0 relative w-[1423px]">
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[82.469px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-1px] whitespace-pre">Dashboard</p>
    </div>
  );
}

function BreadcrumbPage() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="BreadcrumbPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#777777] text-[14px] text-nowrap top-0 whitespace-pre">Início</p>
      </div>
    </div>
  );
}

function BreadcrumbItem() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center left-0 top-[36px] w-[34.703px]" data-name="BreadcrumbItem">
      <BreadcrumbPage />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[56px] left-[24px] top-[20px] w-[82.469px]" data-name="Container">
      <Heading />
      <BreadcrumbItem />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#1a1a1a] text-[24px] text-nowrap top-[-1px] whitespace-pre">Empresas</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#777777] text-[16px] text-nowrap top-[-1px] whitespace-pre">Gerencie os clientes da plataforma</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[12px] top-0 w-[448px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative rounded-[inherit] w-[448px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Buscar por nome ou CNPJ...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <Icon8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[69px] items-start pb-px pl-[16px] pr-[909px] pt-[16px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute box-border content-stretch flex h-[40.5px] items-start left-0 px-[24px] py-[12px] top-0 w-[315.953px]" data-name="Header Cell">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#777777] text-[12px] tracking-[0.6px] uppercase">Razão Social</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute box-border content-stretch flex h-[40.5px] items-start left-[315.95px] px-[24px] py-[12px] top-0 w-[236.891px]" data-name="Header Cell">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#777777] text-[12px] tracking-[0.6px] uppercase">CNPJ</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute box-border content-stretch flex h-[40.5px] items-start left-[552.84px] px-[24px] py-[12px] top-0 w-[171.734px]" data-name="Header Cell">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#777777] text-[12px] tracking-[0.6px] uppercase">Tipo</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute box-border content-stretch flex h-[40.5px] items-start left-[724.58px] px-[24px] py-[12px] top-0 w-[148.828px]" data-name="Header Cell">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#777777] text-[12px] tracking-[0.6px] uppercase">Projetos</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute box-border content-stretch flex h-[40.5px] items-start left-[873.41px] px-[24px] py-[12px] top-0 w-[131.234px]" data-name="Header Cell">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#777777] text-[12px] tracking-[0.6px] uppercase">Status</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute box-border content-stretch flex h-[40.5px] items-start left-[1004.64px] px-[24px] py-[12px] top-0 w-[163.109px]" data-name="Header Cell">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#777777] text-[12px] tracking-[0.6px] uppercase">Criado em</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute box-border content-stretch flex h-[40.5px] items-start left-[1167.75px] px-[24px] py-[12px] top-0 w-[205.25px]" data-name="Header Cell">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#777777] text-[12px] text-right tracking-[0.6px] uppercase">Ações</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[40.5px] left-0 top-0 w-[1373px]" data-name="Table Row">
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
    <div className="absolute bg-[#f8f8f8] h-[40.5px] left-0 top-0 w-[1373px]" data-name="Table Header">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableRow />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[267.953px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-0 whitespace-pre">Rasta Flor Ambiental LTDA</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[315.953px]" data-name="Table Cell">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[188.891px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#777777] text-[14px] text-nowrap top-0 whitespace-pre">30.544.241/0001-88</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[65px] left-[315.95px] top-0 w-[236.891px]" data-name="Table Cell">
      <Container9 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-blue-100 h-[28px] left-[24px] rounded-[3.35544e+07px] top-[18.5px] w-[59.328px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#193cb8] text-[12px] text-nowrap top-[4px] whitespace-pre">Privada</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[65px] left-[552.84px] top-0 w-[171.734px]" data-name="Table Cell">
      <Text7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[100.828px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-0 whitespace-pre">12</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[65px] left-[724.58px] top-0 w-[148.828px]" data-name="Table Cell">
      <Container10 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-green-100 h-[28px] left-[24px] rounded-[3.35544e+07px] top-[18.5px] w-[45.281px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#016630] text-[12px] text-nowrap top-[4px] whitespace-pre">Ativo</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[65px] left-[873.41px] top-0 w-[131.234px]" data-name="Table Cell">
      <Text8 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[115.109px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#777777] text-[14px] text-nowrap top-0 whitespace-pre">15/03/2024</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[65px] left-[1004.64px] top-0 w-[163.109px]" data-name="Table Cell">
      <Container11 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ca41d89} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2161_894)" id="Icon">
          <path d={svgPaths.pf399b00} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2161_894">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon11 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[16.5px] w-[157.25px]" data-name="Container">
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[65px] left-[1167.75px] top-0 w-[205.25px]" data-name="Table Cell">
      <Container12 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[1373px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
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

function Container13() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[267.953px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-0 whitespace-pre">Instituto Suinã</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[315.953px]" data-name="Table Cell">
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[188.891px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#777777] text-[14px] text-nowrap top-0 whitespace-pre">18.234.567/0001-45</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[65px] left-[315.95px] top-0 w-[236.891px]" data-name="Table Cell">
      <Container14 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-blue-100 h-[28px] left-[24px] rounded-[3.35544e+07px] top-[18.5px] w-[43.25px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#193cb8] text-[12px] text-nowrap top-[4px] whitespace-pre">ONG</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[65px] left-[552.84px] top-0 w-[171.734px]" data-name="Table Cell">
      <Text9 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[100.828px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-0 whitespace-pre">8</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[65px] left-[724.58px] top-0 w-[148.828px]" data-name="Table Cell">
      <Container15 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-green-100 h-[28px] left-[24px] rounded-[3.35544e+07px] top-[18.5px] w-[45.281px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#016630] text-[12px] text-nowrap top-[4px] whitespace-pre">Ativo</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[65px] left-[873.41px] top-0 w-[131.234px]" data-name="Table Cell">
      <Text10 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[115.109px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#777777] text-[14px] text-nowrap top-0 whitespace-pre">22/04/2024</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[65px] left-[1004.64px] top-0 w-[163.109px]" data-name="Table Cell">
      <Container16 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ca41d89} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon12 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2161_894)" id="Icon">
          <path d={svgPaths.pf399b00} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2161_894">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon13 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon14 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[16.5px] w-[157.25px]" data-name="Container">
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[65px] left-[1167.75px] top-0 w-[205.25px]" data-name="Table Cell">
      <Container17 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[65px] left-0 top-[65px] w-[1373px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
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

function Container18() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[267.953px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-0 whitespace-pre">EcoVerde Restauração</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[315.953px]" data-name="Table Cell">
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[188.891px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#777777] text-[14px] text-nowrap top-0 whitespace-pre">25.678.901/0001-23</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[65px] left-[315.95px] top-0 w-[236.891px]" data-name="Table Cell">
      <Container19 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-blue-100 h-[28px] left-[24px] rounded-[3.35544e+07px] top-[18.5px] w-[59.328px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#193cb8] text-[12px] text-nowrap top-[4px] whitespace-pre">Privada</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[65px] left-[552.84px] top-0 w-[171.734px]" data-name="Table Cell">
      <Text11 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[100.828px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-0 whitespace-pre">5</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[65px] left-[724.58px] top-0 w-[148.828px]" data-name="Table Cell">
      <Container20 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[#ffe2e2] h-[28px] left-[24px] rounded-[3.35544e+07px] top-[18.5px] w-[54.328px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#9f0712] text-[12px] text-nowrap top-[4px] whitespace-pre">Inativo</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[65px] left-[873.41px] top-0 w-[131.234px]" data-name="Table Cell">
      <Text12 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[115.109px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#777777] text-[14px] text-nowrap top-0 whitespace-pre">10/01/2024</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[65px] left-[1004.64px] top-0 w-[163.109px]" data-name="Table Cell">
      <Container21 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26302300} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon15 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2161_877)" id="Icon">
          <path d={svgPaths.peee1c00} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2161_877">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon16 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon17 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[16.5px] w-[157.25px]" data-name="Container">
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[65px] left-[1167.75px] top-0 w-[205.25px]" data-name="Table Cell">
      <Container22 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[65px] left-0 top-[130px] w-[1373px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
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

function Container23() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[267.953px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-0 whitespace-pre">Cooperativa Ambiental do Sul</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[315.953px]" data-name="Table Cell">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[188.891px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#777777] text-[14px] text-nowrap top-0 whitespace-pre">32.456.789/0001-67</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[65px] left-[315.95px] top-0 w-[236.891px]" data-name="Table Cell">
      <Container24 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-blue-100 h-[28px] left-[24px] rounded-[3.35544e+07px] top-[18.5px] w-[85.906px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#193cb8] text-[12px] text-nowrap top-[4px] whitespace-pre">Cooperativa</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[65px] left-[552.84px] top-0 w-[171.734px]" data-name="Table Cell">
      <Text13 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[100.828px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-0 whitespace-pre">15</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[65px] left-[724.58px] top-0 w-[148.828px]" data-name="Table Cell">
      <Container25 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-green-100 h-[28px] left-[24px] rounded-[3.35544e+07px] top-[18.5px] w-[45.281px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#016630] text-[12px] text-nowrap top-[4px] whitespace-pre">Ativo</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[65px] left-[873.41px] top-0 w-[131.234px]" data-name="Table Cell">
      <Text14 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[115.109px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#777777] text-[14px] text-nowrap top-0 whitespace-pre">05/06/2024</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[65px] left-[1004.64px] top-0 w-[163.109px]" data-name="Table Cell">
      <Container26 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26302300} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon18 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2161_877)" id="Icon">
          <path d={svgPaths.peee1c00} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2161_877">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon19 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon20 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[16.5px] w-[157.25px]" data-name="Container">
      <Button17 />
      <Button18 />
      <Button19 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[65px] left-[1167.75px] top-0 w-[205.25px]" data-name="Table Cell">
      <Container27 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[65px] left-0 top-[195px] w-[1373px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[267.953px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-0 whitespace-pre">BioFlora Consultoria</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[64.5px] left-0 top-0 w-[315.953px]" data-name="Table Cell">
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[188.891px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#777777] text-[14px] text-nowrap top-0 whitespace-pre">41.234.890/0001-34</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[64.5px] left-[315.95px] top-0 w-[236.891px]" data-name="Table Cell">
      <Container29 />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-blue-100 h-[28px] left-[24px] rounded-[3.35544e+07px] top-[18.5px] w-[59.328px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#193cb8] text-[12px] text-nowrap top-[4px] whitespace-pre">Privada</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[64.5px] left-[552.84px] top-0 w-[171.734px]" data-name="Table Cell">
      <Text15 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[100.828px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-0 whitespace-pre">20</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[64.5px] left-[724.58px] top-0 w-[148.828px]" data-name="Table Cell">
      <Container30 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-green-100 h-[28px] left-[24px] rounded-[3.35544e+07px] top-[18.5px] w-[45.281px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#016630] text-[12px] text-nowrap top-[4px] whitespace-pre">Ativo</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[64.5px] left-[873.41px] top-0 w-[131.234px]" data-name="Table Cell">
      <Text16 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[22.5px] w-[115.109px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#777777] text-[14px] text-nowrap top-0 whitespace-pre">18/02/2024</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[64.5px] left-[1004.64px] top-0 w-[163.109px]" data-name="Table Cell">
      <Container31 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26302300} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon21 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2161_877)" id="Icon">
          <path d={svgPaths.peee1c00} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2161_877">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon22 />
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon23 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[16.5px] w-[157.25px]" data-name="Container">
      <Button20 />
      <Button21 />
      <Button22 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[64.5px] left-[1167.75px] top-0 w-[205.25px]" data-name="Table Cell">
      <Container32 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[64.5px] left-0 top-[260px] w-[1373px]" data-name="Table Row">
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute bg-white h-[324.5px] left-0 top-[40.5px] w-[1373px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[365px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-white h-[436px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[436px] items-start p-px relative w-full">
          <Container7 />
          <Table />
        </div>
      </div>
    </div>
  );
}

function AdminEmpresas() {
  return (
    <div className="h-[568px] relative shrink-0 w-full" data-name="AdminEmpresas">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[568px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container5 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute bg-[#f8f8f8] content-stretch flex flex-col h-[619px] items-start left-0 overflow-clip top-[96px] w-[1423px]" data-name="Main Content">
      <AdminEmpresas />
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1423px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[1423px]">
        <Container4 />
        <MainContent />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="basis-0 grow h-[779px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[779px] items-start relative w-full">
        <AdminHeader />
        <Container34 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f8f8f8] content-stretch flex h-[779px] items-start left-0 top-0 w-[1679px]" data-name="App">
      <AdminSidebar />
      <Container35 />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[24px] left-0 top-[-20000px] w-[20.188px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-1px] whitespace-pre">30</p>
    </div>
  );
}

export default function RastaFlor() {
  return (
    <div className="bg-[#f8f8f8] relative size-full" data-name="Rasta Flor">
      <App />
      <Text17 />
    </div>
  );
}