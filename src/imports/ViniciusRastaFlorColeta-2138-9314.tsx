import svgPaths from "./svg-neoufhhstb";

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1a1a1a] text-[24px] text-nowrap top-[-2px] whitespace-pre">Monitoramentos Fenológicos</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#777777] text-[16px] text-nowrap top-[-2px] whitespace-pre">Acompanhamento do desenvolvimento das matrizes</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[68px] relative shrink-0 w-[370.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[68px] items-start relative w-[370.969px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12824f00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0f3d26] h-[36px] relative rounded-[8px] shrink-0 w-[94.875px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[94.875px]">
        <Icon />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[63.5px] text-[14px] text-center text-neutral-50 text-nowrap top-[6px] translate-x-[-50%] whitespace-pre">Filtros</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #0F3D26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #0F3D26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #0F3D26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[144.953px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0f3d26] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[144.953px]">
        <Icon1 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[88.5px] text-[#0f3d26] text-[14px] text-center text-nowrap top-[6px] translate-x-[-50%] whitespace-pre">Exportar Lista</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-[#0f3d26] grow h-[36px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <Icon2 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[113.5px] text-[14px] text-center text-neutral-50 text-nowrap top-[6px] translate-x-[-50%] whitespace-pre">Novo Monitoramento</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[458.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-start relative w-[458.438px]">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[68px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[16px] relative shrink-0 w-[227.281px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[227.281px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#1a1a1a] text-[16px] top-[-2px] w-[228px]">Monitoramentos Registrados (5)</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12824f00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#0f3d26] h-[36px] relative rounded-[8px] shrink-0 w-[94.875px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[94.875px]">
        <Icon3 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[63.5px] text-[14px] text-center text-neutral-50 text-nowrap top-[6px] translate-x-[-50%] whitespace-pre">Filtros</p>
      </div>
    </div>
  );
}

function GestaoMonitoramentos() {
  return (
    <div className="h-[36px] relative shrink-0 w-[1309px]" data-name="GestaoMonitoramentos">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between relative w-[1309px]">
        <CardTitle />
        <Button3 />
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-0 px-[16px] py-[12px] top-0 w-[173.156px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Propriedade</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[173.16px] px-[16px] py-[12px] top-0 w-[212.203px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Áreas da propriedade</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[385.36px] px-[16px] py-[12px] top-0 w-[267.406px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Matriz cadastrada na propriedade</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[652.77px] px-[16px] py-[12px] top-0 w-[201.031px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Data do monitoramento</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[853.8px] px-[16px] py-[12px] top-0 w-[137.422px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Responsável</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[991.22px] px-[16px] py-[12px] top-0 w-[208.547px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Estágio</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[1199.77px] px-[16px] py-[12px] top-0 w-[109.234px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px] text-right">Ações</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[44.5px] left-0 top-0 w-[1309px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
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
    <div className="absolute h-[44.5px] left-0 top-0 w-[1309px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[173.156px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Fazenda São João</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[57px] left-[173.16px] top-0 w-[212.203px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#777777] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Área A - Mata Ciliar</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[57px] left-[385.36px] top-0 w-[267.406px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">MAT-001 - Ipê-amarelo</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[57px] left-[652.77px] top-0 w-[201.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">30/09/2025</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[57px] left-[853.8px] top-0 w-[137.422px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">João Silva</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-amber-300 h-[22px] left-0 rounded-[8px] top-0 w-[64.109px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[64.109px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0f3d26] text-[12px] text-nowrap whitespace-pre">Floração</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-lime-500 h-[22px] left-[68.11px] rounded-[8px] top-0 w-[81.453px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[81.453px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#121714] text-[12px] text-nowrap whitespace-pre">Fruto Verde</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[22px] left-[16px] top-[17.5px] w-[176.547px]" data-name="Container">
      <Badge />
      <Badge1 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[57px] left-[991.22px] top-0 w-[208.547px]" data-name="Table Cell">
      <Container3 />
    </div>
  );
}

function Icon4() {
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

function Button4() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Icon5() {
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

function Button5() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start justify-end left-[16px] top-[12.5px] w-[77.234px]" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[57px] left-[1199.77px] top-0 w-[109.234px]" data-name="Table Cell">
      <Container4 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[1309px]" data-name="Table Row">
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

function TableCell7() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[173.156px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Sítio Primavera</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[57px] left-[173.16px] top-0 w-[212.203px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#777777] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Área B - Cerradão</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[57px] left-[385.36px] top-0 w-[267.406px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">MAT-002 - Cedro</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[57px] left-[652.77px] top-0 w-[201.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">02/10/2025</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[57px] left-[853.8px] top-0 w-[137.422px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Maria Santos</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-green-600 h-[22px] left-[16px] rounded-[8px] top-[17.5px] w-[93.297px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[93.297px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-neutral-50 text-nowrap whitespace-pre">Fruto Maduro</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[57px] left-[991.22px] top-0 w-[208.547px]" data-name="Table Cell">
      <Badge2 />
    </div>
  );
}

function Icon6() {
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

function Button6() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
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

function Button7() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start justify-end left-[16px] top-[12.5px] w-[77.234px]" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[57px] left-[1199.77px] top-0 w-[109.234px]" data-name="Table Cell">
      <Container5 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[57px] left-0 top-[57px] w-[1309px]" data-name="Table Row">
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

function TableCell14() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[173.156px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Fazenda São João</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[57px] left-[173.16px] top-0 w-[212.203px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#777777] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Área C - Floresta Ripária</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[57px] left-[385.36px] top-0 w-[267.406px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">MAT-003 - Peroba-rosa</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[57px] left-[652.77px] top-0 w-[201.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">04/10/2025</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[57px] left-[853.8px] top-0 w-[137.422px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Pedro Oliveira</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#9da29f] h-[22px] left-[16px] rounded-[8px] top-[17.5px] w-[76.156px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[76.156px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#121714] text-[12px] text-nowrap whitespace-pre">Vegetativo</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[57px] left-[991.22px] top-0 w-[208.547px]" data-name="Table Cell">
      <Badge3 />
    </div>
  );
}

function Icon8() {
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
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Icon9() {
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

function Button9() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start justify-end left-[16px] top-[12.5px] w-[77.234px]" data-name="Container">
      <Button8 />
      <Button9 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[57px] left-[1199.77px] top-0 w-[109.234px]" data-name="Table Cell">
      <Container6 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[57px] left-0 top-[114px] w-[1309px]" data-name="Table Row">
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

function TableCell21() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[173.156px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Chácara Verde</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[57px] left-[173.16px] top-0 w-[212.203px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#777777] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Área A - Mata Atlântica</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[57px] left-[385.36px] top-0 w-[267.406px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">MAT-004 - Pau-marfim</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[57px] left-[652.77px] top-0 w-[201.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">07/10/2025</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[57px] left-[853.8px] top-0 w-[137.422px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Ana Costa</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-amber-300 h-[22px] left-[16px] rounded-[8px] top-[17.5px] w-[64.109px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[64.109px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0f3d26] text-[12px] text-nowrap whitespace-pre">Floração</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[57px] left-[991.22px] top-0 w-[208.547px]" data-name="Table Cell">
      <Badge4 />
    </div>
  );
}

function Icon10() {
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

function Button10() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
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

function Button11() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon11 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start justify-end left-[16px] top-[12.5px] w-[77.234px]" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[57px] left-[1199.77px] top-0 w-[109.234px]" data-name="Table Cell">
      <Container7 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[57px] left-0 top-[171px] w-[1309px]" data-name="Table Row">
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

function TableCell28() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[173.156px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Fazenda Esperança</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[57px] left-[173.16px] top-0 w-[212.203px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#777777] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Área D - Reserva Legal</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[57px] left-[385.36px] top-0 w-[267.406px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">MAT-005 - Jequitibá-rosa</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[57px] left-[652.77px] top-0 w-[201.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">11/10/2025</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[57px] left-[853.8px] top-0 w-[137.422px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">João Silva</p>
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-orange-400 h-[22px] left-0 rounded-[8px] top-0 w-[81.203px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[81.203px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#121714] text-[12px] text-nowrap whitespace-pre">Frutificação</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-lime-500 h-[22px] left-[85.2px] rounded-[8px] top-0 w-[81.453px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[81.453px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#121714] text-[12px] text-nowrap whitespace-pre">Fruto Verde</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[22px] left-[16px] top-[17.5px] w-[176.547px]" data-name="Container">
      <Badge5 />
      <Badge6 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[57px] left-[991.22px] top-0 w-[208.547px]" data-name="Table Cell">
      <Container8 />
    </div>
  );
}

function Icon12() {
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

function Button12() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
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
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon13 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start justify-end left-[16px] top-[12.5px] w-[77.234px]" data-name="Container">
      <Button12 />
      <Button13 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[57px] left-[1199.77px] top-0 w-[109.234px]" data-name="Table Cell">
      <Container9 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[57px] left-0 top-[228px] w-[1309px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
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
    <div className="absolute h-[285px] left-0 top-[44.5px] w-[1309px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function GestaoMonitoramentos1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1309px]" data-name="GestaoMonitoramentos">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[1309px]">
        <TableHeader />
        <TableBody />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[446px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] h-[446px] items-start pl-[25px] pr-px py-[25px] relative w-full">
          <GestaoMonitoramentos />
          <GestaoMonitoramentos1 />
        </div>
      </div>
    </div>
  );
}

function GestaoMonitoramentos2() {
  return (
    <div className="h-[602px] relative shrink-0 w-full" data-name="GestaoMonitoramentos">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[602px] items-start pb-0 pt-[32px] px-[32px] relative w-full">
          <Container2 />
          <Card />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 grow h-[779px] min-h-px min-w-px relative shrink-0" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[779px] items-start overflow-clip pb-0 pt-[64px] px-0 relative rounded-[inherit] w-full">
        <GestaoMonitoramentos2 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f8f8f8] box-border content-stretch flex h-[779px] items-start left-0 pl-[256px] pr-0 py-0 top-0 w-[1679px]" data-name="App">
      <MainContent />
    </div>
  );
}

function Text() {
  return <div className="absolute left-0 opacity-0 size-0 top-0" data-name="Text" />;
}

function Text1() {
  return (
    <div className="absolute h-[18px] left-0 top-[-20000px] w-[12.938px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">18</p>
    </div>
  );
}

function Text2() {
  return <div className="absolute left-0 opacity-0 size-0 top-[779px]" data-name="Text" />;
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">RastaFlor</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Módulo de Coleta</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[89px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[89px] items-start pb-px pt-[24px] px-[24px] relative w-[255px]">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1db6d780} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[77.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[77.109px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[39.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon14 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.25px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[47px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Propriedades</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon15 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p22fbb500} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p40b5600} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.078px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[30.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Espécies</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon16 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1f5efd00} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[51.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[51.875px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[26.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Coletas</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon17 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p23f24400} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[121.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[121.531px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[61.5px] text-[16px] text-center text-neutral-50 text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Monitoramentos</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#0f3d26] h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon18 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2135_7810)" id="Icon">
          <path d={svgPaths.p7c86470} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pefbf980} fill="var(--fill-0, #1A1A1A)" id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2135_7810">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[53px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[53px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[26.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Rótulos</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon19 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31172880} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[69.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[69.891px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[35.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Relatórios</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon20 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Icon21() {
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

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48.219px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Equipe</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon21 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[255px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-full items-start overflow-clip pb-0 pt-[24px] px-[16px] relative rounded-[inherit] w-[255px]">
        <Button14 />
        <Button15 />
        <Button16 />
        <Button17 />
        <Button18 />
        <Button19 />
        <Button20 />
        <Button21 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1e4e8080} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.33333 4.08333H11.6667" id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p3354bf00} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.6667 9.91667H2.33333" id="Vector_4" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#777777] text-[14px] top-[-2px] w-[153px]">Alternar para Módulo de Restauração</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="h-[68px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[68px] items-center px-[12px] py-0 relative w-full">
          <Icon22 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[101px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[101px] items-start pb-0 pt-[17px] px-[16px] relative w-[255px]">
        <Button22 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[13.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[13.734px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1a1a1a] text-[14px] text-nowrap top-[-1px] whitespace-pre">JP</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f0f0f0] relative rounded-[3.35544e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-[32px]">
        <Text12 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[14px]">João Paulo</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[12px]">Gestor Ambiental</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start relative w-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[69px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[69px] items-start pb-0 pt-[17px] px-[16px] relative w-[255px]">
        <Container14 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[779px] items-start left-0 pl-0 pr-px py-0 top-0 w-[256px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container10 />
      <Navigation />
      <Container11 />
      <Container15 />
    </div>
  );
}

function Icon23() {
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

function Button23() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon23 />
      </div>
    </div>
  );
}

function Icon24() {
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

function Button24() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon24 />
      </div>
    </div>
  );
}

function Icon25() {
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

function Button25() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon25 />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[12px] h-[64px] items-center justify-end left-[256px] pb-px pl-0 pr-[24px] pt-0 top-0 w-[1423px]" data-name="TopBar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Button23 />
      <Button24 />
      <Button25 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.5)] h-[779px] left-0 top-0 w-[1679px]" data-name="Primitive.div" />;
}

function PrimitiveH() {
  return (
    <div className="h-[18px] relative shrink-0 w-[439px]" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative w-[439px]">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#1a1a1a] text-[18px] text-nowrap top-[-1px] whitespace-pre">Registrar Novo Monitoramento</p>
      </div>
    </div>
  );
}

function PrimitiveP() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[439px]" data-name="Primitive.p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-start relative w-[439px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Preencha os dados para registrar um novo monitoramento fenológico</p>
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[46px] items-start left-[25px] top-[-38px] w-[439px]" data-name="DialogHeader">
      <PrimitiveH />
      <PrimitiveP />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Identificação</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Informações sobre o local e data do monitoramento</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph4 />
    </div>
  );
}

function ModalNovoMonitoramento() {
  return (
    <div className="absolute h-[14px] left-[185.23px] top-0 w-[6.078px]" data-name="ModalNovoMonitoramento">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-0 text-[#fb2c36] text-[14px] text-nowrap top-[-2px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-0 text-[#1a1a1a] text-[14px] text-nowrap top-[-2px] whitespace-pre">Matriz ou Local Monitorado</p>
      <ModalNovoMonitoramento />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.094px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[112.094px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717182] text-[14px] text-center text-nowrap whitespace-pre">Selecione a matriz</p>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[#f8f8f8] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-full">
          <PrimitiveSpan />
          <Icon26 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
      <PrimitiveButton />
    </div>
  );
}

function ModalNovoMonitoramento1() {
  return (
    <div className="absolute h-[14px] left-[162.52px] top-0 w-[6.078px]" data-name="ModalNovoMonitoramento">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-0 text-[#fb2c36] text-[14px] text-nowrap top-[-2px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-0 text-[#1a1a1a] text-[14px] text-nowrap top-[-2px] whitespace-pre">Data do Monitoramento</p>
      <ModalNovoMonitoramento1 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f8f8f8] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel1 />
      <Input />
    </div>
  );
}

function ModalNovoMonitoramento2() {
  return (
    <div className="absolute h-[14px] left-[86.22px] top-0 w-[6.078px]" data-name="ModalNovoMonitoramento">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-0 text-[#fb2c36] text-[14px] text-nowrap top-[-2px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-0 text-[#1a1a1a] text-[14px] text-nowrap top-[-2px] whitespace-pre">Responsável</p>
      <ModalNovoMonitoramento2 />
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[58.781px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[58.781px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717182] text-[14px] text-center text-nowrap whitespace-pre">Selecione</p>
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[#f8f8f8] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-full">
          <PrimitiveSpan1 />
          <Icon27 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel2 />
      <PrimitiveButton1 />
    </div>
  );
}

function Container20() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[58px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[196px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
      <Container20 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[-2px] whitespace-pre">Observações</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Estágios observados e anotações</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph5 />
    </div>
  );
}

function ModalNovoMonitoramento3() {
  return (
    <div className="absolute h-[14px] left-[157.83px] top-0 w-[6.078px]" data-name="ModalNovoMonitoramento">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-0 text-[#fb2c36] text-[14px] text-nowrap top-[-2px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-0 text-[#1a1a1a] text-[14px] text-nowrap top-[-2px] whitespace-pre">Estágio(s) Observado(s)</p>
      <ModalNovoMonitoramento3 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-[#e0e0e0] h-[22px] left-[17px] rounded-[8px] top-[17px] w-[76.156px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[76.156px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1a1a] text-[12px] text-nowrap whitespace-pre">Vegetativo</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute bg-[#e0e0e0] h-[22px] left-[101.16px] rounded-[8px] top-[17px] w-[64.109px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[64.109px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1a1a] text-[12px] text-nowrap whitespace-pre">Floração</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge9() {
  return (
    <div className="absolute bg-[#e0e0e0] h-[22px] left-[173.27px] rounded-[8px] top-[17px] w-[81.203px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[81.203px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1a1a] text-[12px] text-nowrap whitespace-pre">Frutificação</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge10() {
  return (
    <div className="absolute bg-[#e0e0e0] h-[22px] left-[262.47px] rounded-[8px] top-[17px] w-[81.453px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[81.453px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1a1a] text-[12px] text-nowrap whitespace-pre">Fruto Verde</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge11() {
  return (
    <div className="absolute bg-[#e0e0e0] h-[22px] left-[17px] rounded-[8px] top-[47px] w-[93.297px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[93.297px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1a1a] text-[12px] text-nowrap whitespace-pre">Fruto Maduro</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge12() {
  return (
    <div className="absolute bg-[#e0e0e0] h-[22px] left-[118.3px] rounded-[8px] top-[47px] w-[71.656px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[71.656px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1a1a] text-[12px] text-nowrap whitespace-pre">Dispersão</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f8f8f8] h-[86px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Badge7 />
      <Badge8 />
      <Badge9 />
      <Badge10 />
      <Badge11 />
      <Badge12 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Clique nos estágios para selecionar (permite múltipla seleção)</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[136px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel3 />
      <Container23 />
      <Paragraph6 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">Observações Adicionais</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f8f8f8] h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[100px] items-start px-[12px] py-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Condições climáticas, densidade de flores/frutos, saúde da planta...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[122px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel4 />
      <Textarea />
    </div>
  );
}

function Container26() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-[355px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container22 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Button26() {
  return (
    <div className="basis-0 bg-[#0f3d26] grow h-[36px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-neutral-50 text-nowrap whitespace-pre">Salvar Monitoramento</p>
        </div>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="basis-0 bg-white grow h-[36px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[17px] py-[9px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1a1a1a] text-[14px] text-center text-nowrap whitespace-pre">Cancelar</p>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[53px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button26 />
      <Button27 />
    </div>
  );
}

function ModalNovoMonitoramento4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[652px] items-start left-[25px] top-[24px] w-[439px]" data-name="ModalNovoMonitoramento">
      <Container21 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function DialogContent() {
  return (
    <div className="absolute left-[7px] overflow-clip size-px top-[15px]" data-name="DialogContent">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[19.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Close</p>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="absolute left-[456px] opacity-70 rounded-[2px] size-[16px] top-[-46px]" data-name="Primitive.button">
      <Icon28 />
      <DialogContent />
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="absolute bg-white h-[701.094px] left-[583.5px] rounded-[10px] top-[38.95px] w-[512px]" data-name="Primitive.div">
      <div className="h-[701.094px] overflow-clip relative rounded-[inherit] w-[512px]">
        <DialogHeader />
        <ModalNovoMonitoramento4 />
        <PrimitiveButton2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function ViniciusRastaFlorColeta() {
  return (
    <div className="bg-white relative size-full" data-name="Vinicius - Rasta Flor | Coleta">
      <App />
      <Text />
      <Text1 />
      <Text2 />
      <Sidebar />
      <TopBar />
      <PrimitiveDiv />
      <PrimitiveDiv1 />
    </div>
  );
}