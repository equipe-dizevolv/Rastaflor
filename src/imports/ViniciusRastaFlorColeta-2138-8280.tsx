import svgPaths from "./svg-zpdnfwbpt3";

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1a1a1a] text-[24px] text-nowrap top-[-2px] whitespace-pre">Gestão de Rótulos</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#777777] text-[16px] text-nowrap top-[-2px] whitespace-pre">Criação e gerenciamento de rótulos para lotes de sementes</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[68px] relative shrink-0 w-[419.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[68px] items-start relative w-[419.047px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2138_8297)" id="Icon">
          <path d={svgPaths.p3397ec80} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4adfe2c} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p27a74a00} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2138_8297">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-white grow h-[36px] min-h-px min-w-px opacity-50 relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0f3d26] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <Icon />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[126.5px] text-[14px] text-center text-neutral-50 top-[6px] translate-x-[-50%] w-[163px]">Imprimir Selecionados (0)</p>
      </div>
    </div>
  );
}

function Icon1() {
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

function Button1() {
  return (
    <div className="bg-[#0f3d26] h-[36px] relative rounded-[8px] shrink-0 w-[131.828px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[131.828px]">
        <Icon1 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[82.5px] text-[14px] text-center text-neutral-50 text-nowrap top-[6px] translate-x-[-50%] whitespace-pre">Criar Rótulo</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[364.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-start relative w-[364.672px]">
        <Button />
        <Button1 />
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
    <div className="h-[16px] relative shrink-0 w-[167.156px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[167.156px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#1a1a1a] text-[16px] top-[-2px] w-[168px]">Rótulos Cadastrados (4)</p>
      </div>
    </div>
  );
}

function Icon2() {
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

function Button2() {
  return (
    <div className="bg-[#0f3d26] h-[36px] relative rounded-[8px] shrink-0 w-[94.875px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[94.875px]">
        <Icon2 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[63.5px] text-[14px] text-center text-neutral-50 text-nowrap top-[6px] translate-x-[-50%] whitespace-pre">Filtros</p>
      </div>
    </div>
  );
}

function GestaoRotulos() {
  return (
    <div className="h-[36px] relative shrink-0 w-[1309px]" data-name="GestaoRotulos">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between relative w-[1309px]">
        <CardTitle />
        <Button2 />
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute bg-[#f3f3f5] left-[16px] rounded-[4px] size-[16px] top-[15px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[48.5px] left-0 top-0 w-[48px]" data-name="Header Cell">
      <PrimitiveButton />
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[48.5px] left-[48px] top-0 w-[156.938px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[16px] text-[#777777] text-[14px] text-nowrap top-[12px] whitespace-pre">Lote de Sementes</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[48.5px] left-[204.94px] top-0 w-[134.438px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[16px] text-[#777777] text-[14px] text-nowrap top-[12px] whitespace-pre">Nome Popular</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[48.5px] left-[339.38px] top-0 w-[184.141px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[16px] text-[#777777] text-[14px] text-nowrap top-[12px] whitespace-pre">Nome do Comprador</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[48.5px] left-[523.52px] top-0 w-[248.797px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[16px] text-[#777777] text-[14px] text-nowrap top-[12px] whitespace-pre">Nome Científico</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[48.5px] left-[772.31px] top-0 w-[136.281px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[16px] text-[#777777] text-[14px] text-nowrap top-[12px] whitespace-pre">Data da Coleta</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute h-[48.5px] left-[908.59px] top-0 w-[205.359px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[16px] text-[#777777] text-[14px] text-nowrap top-[12px] whitespace-pre">Peso na embalagem (kg)</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute h-[48.5px] left-[1113.95px] top-0 w-[195.047px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[179.19px] text-[#777777] text-[14px] text-nowrap text-right top-[12px] translate-x-[-100%] whitespace-pre">Ações</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[48.5px] left-0 top-0 w-[1309px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[48.5px] left-0 top-0 w-[1309px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="absolute bg-[#f3f3f5] left-[16px] rounded-[4px] size-[16px] top-[19.5px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[48px]" data-name="Table Cell">
      <PrimitiveButton1 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[57px] left-[48px] top-0 w-[156.938px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">LT-2025-001</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[57px] left-[204.94px] top-0 w-[134.438px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Ipê-amarelo</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[57px] left-[339.38px] top-0 w-[184.141px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#777777] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Viveiro Flora Nativa</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[57px] left-[523.52px] top-0 w-[248.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Handroanthus chrysotrichus</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[57px] left-[772.31px] top-0 w-[136.281px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">14/09/2025</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[57px] left-[908.59px] top-0 w-[205.359px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] top-[14.5px] w-[43px]">2.5 kg</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2138_8292)" id="Icon">
          <path d={svgPaths.p3397ec80} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4adfe2c} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p27a74a00} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2138_8292">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
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
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ca41d89} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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

function Icon6() {
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

function Button6() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start justify-end left-[16px] top-[12.5px] w-[163.047px]" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[57px] left-[1113.95px] top-0 w-[195.047px]" data-name="Table Cell">
      <Container3 />
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
      <TableCell7 />
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="absolute bg-[#f3f3f5] left-[16px] rounded-[4px] size-[16px] top-[19.5px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[48px]" data-name="Table Cell">
      <PrimitiveButton2 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[57px] left-[48px] top-0 w-[156.938px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">LT-2025-002</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[57px] left-[204.94px] top-0 w-[134.438px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Cedro</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[57px] left-[339.38px] top-0 w-[184.141px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#777777] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Prefeitura Municipal</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[57px] left-[523.52px] top-0 w-[248.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Cedrela fissilis</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[57px] left-[772.31px] top-0 w-[136.281px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">19/09/2025</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[57px] left-[908.59px] top-0 w-[205.359px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] top-[14.5px] w-[43px]">1.8 kg</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2138_8292)" id="Icon">
          <path d={svgPaths.p3397ec80} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4adfe2c} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p27a74a00} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2138_8292">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
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
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ca41d89} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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

function Icon10() {
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
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon10 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start justify-end left-[16px] top-[12.5px] w-[163.047px]" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[57px] left-[1113.95px] top-0 w-[195.047px]" data-name="Table Cell">
      <Container4 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[57px] left-0 top-[57px] w-[1309px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="absolute bg-[#f3f3f5] left-[16px] rounded-[4px] size-[16px] top-[19.5px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[48px]" data-name="Table Cell">
      <PrimitiveButton3 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[57px] left-[48px] top-0 w-[156.938px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">LT-2025-003</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[57px] left-[204.94px] top-0 w-[134.438px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Peroba-rosa</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[57px] left-[339.38px] top-0 w-[184.141px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#777777] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Instituto Refloresta</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[57px] left-[523.52px] top-0 w-[248.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Aspidosperma polyneuron</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[57px] left-[772.31px] top-0 w-[136.281px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">04/10/2025</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[57px] left-[908.59px] top-0 w-[205.359px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] top-[14.5px] w-[43px]">3.2 kg</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2138_8292)" id="Icon">
          <path d={svgPaths.p3397ec80} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4adfe2c} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p27a74a00} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2138_8292">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
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
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ca41d89} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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

function Button14() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon14 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start justify-end left-[16px] top-[12.5px] w-[163.047px]" data-name="Container">
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[57px] left-[1113.95px] top-0 w-[195.047px]" data-name="Table Cell">
      <Container5 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[57px] left-0 top-[114px] w-[1309px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="absolute bg-[#f3f3f5] left-[16px] rounded-[4px] size-[16px] top-[19.5px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[48px]" data-name="Table Cell">
      <PrimitiveButton4 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[57px] left-[48px] top-0 w-[156.938px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">LT-2025-004</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[57px] left-[204.94px] top-0 w-[134.438px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Pau-marfim</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[57px] left-[339.38px] top-0 w-[184.141px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#777777] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Cooperativa Verde</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[57px] left-[523.52px] top-0 w-[248.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">Balfourodendron riedelianum</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[57px] left-[772.31px] top-0 w-[136.281px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] text-nowrap top-[14.5px] whitespace-pre">09/10/2025</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[57px] left-[908.59px] top-0 w-[205.359px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#1a1a1a] text-[16px] top-[14.5px] w-[43px]">1.5 kg</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
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
        <g clipPath="url(#clip0_2138_8292)" id="Icon">
          <path d={svgPaths.p3397ec80} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4adfe2c} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p27a74a00} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2138_8292">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
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
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26302300} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon17 />
      </div>
    </div>
  );
}

function Icon18() {
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

function Button18() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon18 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start justify-end left-[16px] top-[12.5px] w-[163.047px]" data-name="Container">
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[57px] left-[1113.95px] top-0 w-[195.047px]" data-name="Table Cell">
      <Container6 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[57px] left-0 top-[171px] w-[1309px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[228px] left-0 top-[48.5px] w-[1309px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
    </div>
  );
}

function GestaoRotulos1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1309px]" data-name="GestaoRotulos">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[1309px]">
        <TableHeader />
        <TableBody />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[393px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] h-[393px] items-start pl-[25px] pr-px py-[25px] relative w-full">
          <GestaoRotulos />
          <GestaoRotulos1 />
        </div>
      </div>
    </div>
  );
}

function GestaoRotulos2() {
  return (
    <div className="h-[549px] relative shrink-0 w-full" data-name="GestaoRotulos">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[549px] items-start pb-0 pt-[32px] px-[32px] relative w-full">
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
        <GestaoRotulos2 />
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
  return (
    <div className="absolute h-[18px] left-0 top-[-20000px] w-[12.938px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">18</p>
    </div>
  );
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

function Container7() {
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

function Icon19() {
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

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[77.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[77.109px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[39.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Dashboard</p>
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
          <Text1 />
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
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.25px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[47px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Propriedades</p>
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
          <Text2 />
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
          <path d={svgPaths.p22fbb500} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p40b5600} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.078px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[30.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Espécies</p>
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
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Icon22() {
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

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[51.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[51.875px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[26.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Coletas</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon22 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p23f24400} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[117.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[117.969px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[59.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Monitoramentos</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon23 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2138_8285)" id="Icon">
          <path d={svgPaths.p7c86470} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pefbf980} fill="var(--fill-0, #FAFAFA)" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2138_8285">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[54.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[54.844px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[27.5px] text-[16px] text-center text-neutral-50 text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Rótulos</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-[#0f3d26] h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon24 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Icon25() {
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

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[69.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[69.891px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[35.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Relatórios</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon25 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Icon26() {
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

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48.219px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Equipe</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon26 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[255px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-full items-start overflow-clip pb-0 pt-[24px] px-[16px] relative rounded-[inherit] w-[255px]">
        <Button19 />
        <Button20 />
        <Button21 />
        <Button22 />
        <Button23 />
        <Button24 />
        <Button25 />
        <Button26 />
      </div>
    </div>
  );
}

function Icon27() {
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

function Text9() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#777777] text-[14px] top-[-2px] w-[153px]">Alternar para Módulo de Restauração</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="h-[68px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[68px] items-center px-[12px] py-0 relative w-full">
          <Icon27 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[101px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[101px] items-start pb-0 pt-[17px] px-[16px] relative w-[255px]">
        <Button27 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[13.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[13.734px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1a1a1a] text-[14px] text-nowrap top-[-1px] whitespace-pre">JP</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#f0f0f0] relative rounded-[3.35544e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-[32px]">
        <Text10 />
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

function Container10() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start relative w-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[69px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[69px] items-start pb-0 pt-[17px] px-[16px] relative w-[255px]">
        <Container11 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[779px] items-start left-0 pl-0 pr-px py-0 top-0 w-[256px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container7 />
      <Navigation />
      <Container8 />
      <Container12 />
    </div>
  );
}

function Icon28() {
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

function Button28() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon28 />
      </div>
    </div>
  );
}

function Icon29() {
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

function Button29() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon29 />
      </div>
    </div>
  );
}

function Icon30() {
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

function Button30() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon30 />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[12px] h-[64px] items-center justify-end left-[256px] pb-px pl-0 pr-[24px] pt-0 top-0 w-[1423px]" data-name="TopBar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Button28 />
      <Button29 />
      <Button30 />
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