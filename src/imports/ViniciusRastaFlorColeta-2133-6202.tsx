import svgPaths from "./svg-liz96ur42u";

function Heading() {
  return (
    <div className="h-[36.004px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1a1a1a] text-[24px] text-nowrap top-[-2.63px] whitespace-pre">{`Propriedades & Matrizes`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[24.003px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#777777] text-[16px] text-nowrap whitespace-pre">Gestão unificada de propriedades e árvores matrizes</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[68.001px] relative shrink-0 w-[369.666px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.994px] h-[68.001px] items-start relative w-[369.666px]">
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
        <g id="Icon">
          <path d="M3.33076 7.99381H12.6569" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M7.99381 3.33076V12.6569" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0f3d26] h-[35.983px] relative rounded-[8px] shrink-0 w-[198.367px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.983px] relative w-[198.367px]">
        <Icon />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[115.46px] text-[14px] text-center text-neutral-50 text-nowrap top-[5.99px] translate-x-[-50%] whitespace-pre">Adicionar Propriedade</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[68.001px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[68.001px] items-center justify-between relative w-full">
          <Container />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[19.995px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2132_2812)" id="Icon">
          <path d={svgPaths.p2c43f500} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.pf44ec80} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2132_2812">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[19.995px] relative shrink-0 w-[234.114px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.995px] relative w-[234.114px]">
        <Icon1 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[27.99px] text-[#1a1a1a] text-[16px] top-[-1.12px] w-[207px]">Propriedades Cadastradas (5)</p>
      </div>
    </div>
  );
}

function Icon2() {
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

function Button1() {
  return (
    <div className="bg-[#0f3d26] h-[35.983px] relative rounded-[8px] shrink-0 w-[94.79px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.983px] relative w-[94.79px]">
        <Icon2 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[63.46px] text-[14px] text-center text-neutral-50 text-nowrap top-[5.99px] translate-x-[-50%] whitespace-pre">Filtros</p>
      </div>
    </div>
  );
}

function ListaPropriedades() {
  return (
    <div className="h-[35.983px] relative shrink-0 w-[1690.81px]" data-name="ListaPropriedades">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[35.983px] items-center justify-between relative w-[1690.81px]">
        <CardTitle />
        <Button1 />
      </div>
    </div>
  );
}

function Column() {
  return <div className="absolute h-[411.135px] left-0 top-0 w-[304.344px]" data-name="Column" />;
}

function Column1() {
  return <div className="absolute h-[411.135px] left-[304.34px] top-0 w-[253.616px]" data-name="Column" />;
}

function Column2() {
  return <div className="absolute h-[411.135px] left-[557.96px] top-0 w-[169.07px]" data-name="Column" />;
}

function Column3() {
  return <div className="absolute h-[411.135px] left-[727.03px] top-0 w-[304.344px]" data-name="Column" />;
}

function Column4() {
  return <div className="absolute h-[411.135px] left-[1031.37px] top-0 w-[202.889px]" data-name="Column" />;
}

function Column5() {
  return <div className="absolute h-[411.135px] left-[1234.26px] top-0 w-[202.889px]" data-name="Column" />;
}

function Column6() {
  return <div className="absolute h-[411.135px] left-[1437.15px] top-0 w-[253.659px]" data-name="Column" />;
}

function ColumnGroup() {
  return (
    <div className="absolute h-[411.135px] left-0 top-0 w-[1690.81px]" data-name="Column Group">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
      <Column5 />
      <Column6 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[64.593px] left-0 top-0 w-[304.344px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[19.97px] whitespace-pre">Nome da Propriedade</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[64.593px] left-[304.34px] top-0 w-[253.616px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[19.97px] whitespace-pre">Proprietários</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[64.593px] left-[557.96px] top-0 w-[169.07px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[19.97px] whitespace-pre">Nº de áreas</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[64.593px] left-[727.03px] top-0 w-[304.344px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[19.97px] whitespace-pre">Áreas associadas</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[64.593px] left-[1031.37px] top-0 w-[202.889px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[19.97px] whitespace-pre">Extensão da área</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[64.593px] left-[1234.26px] top-0 w-[202.889px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[15.99px] text-[#777777] text-[14px] top-[9.98px] w-[111px]">Árvores matrizes associadas (Nº)</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute h-[64.593px] left-[1437.15px] top-0 w-[253.659px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[237.84px] text-[#777777] text-[14px] text-nowrap text-right top-[19.97px] translate-x-[-100%] whitespace-pre">Ações</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[64.593px] left-0 top-0 w-[1690.81px]" data-name="Table Row">
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
    <div className="absolute h-[64.593px] left-0 top-0 w-[1690.81px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[24.003px] items-start left-[15.99px] overflow-clip top-[12.67px] w-[272.368px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">Fazenda São João</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[19.974px] items-start left-[15.99px] overflow-clip top-[36.67px] w-[272.368px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">São Paulo - SP</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[69.308px] left-0 overflow-clip top-0 w-[304.344px]" data-name="Table Cell">
      <Container2 />
      <Container3 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[69.308px] left-[304.34px] overflow-clip top-0 w-[253.616px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[19.65px] whitespace-pre">João da Silva, Maria Santos</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[69.308px] left-[557.96px] top-0 w-[169.07px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[84.72px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[19.65px] translate-x-[-50%] whitespace-pre">3</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[69.308px] left-[727.03px] overflow-clip top-0 w-[304.344px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[22.67px] whitespace-pre">Área Norte, Área Sul, Área Central</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[69.308px] left-[1031.37px] top-0 w-[202.889px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[19.65px] whitespace-pre">250 ha</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[69.308px] left-[1234.26px] top-0 w-[202.889px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[101.82px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[19.65px] translate-x-[-50%] whitespace-pre">24</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2132_2786)" id="Icon">
          <path d={svgPaths.p23558000} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p29baa700} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2132_2786">
            <rect fill="white" height="15.9876" width="15.9876" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[31.997px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
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

function Button3() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[31.997px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[31.997px] items-start justify-end left-[15.99px] top-[18.65px] w-[221.684px]" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[69.308px] left-[1437.15px] top-0 w-[253.659px]" data-name="Table Cell">
      <Container4 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[69.308px] left-0 top-0 w-[1690.81px]" data-name="Table Row">
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

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[24.003px] items-start left-[15.99px] overflow-clip top-[12.67px] w-[272.368px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">Sítio Primavera</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex h-[19.974px] items-start left-[15.99px] overflow-clip top-[36.67px] w-[272.368px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Campinas - SP</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[69.308px] left-0 overflow-clip top-0 w-[304.344px]" data-name="Table Cell">
      <Container5 />
      <Container6 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[69.308px] left-[304.34px] overflow-clip top-0 w-[253.616px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[19.65px] whitespace-pre">Pedro Oliveira</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[69.308px] left-[557.96px] top-0 w-[169.07px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[84.72px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[19.65px] translate-x-[-50%] whitespace-pre">2</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[69.308px] left-[727.03px] overflow-clip top-0 w-[304.344px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[22.67px] whitespace-pre">Entrada Principal, Área Oeste</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[69.308px] left-[1031.37px] top-0 w-[202.889px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[19.65px] whitespace-pre">80 ha</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[69.308px] left-[1234.26px] top-0 w-[202.889px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[101.82px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[19.65px] translate-x-[-50%] whitespace-pre">15</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2132_2786)" id="Icon">
          <path d={svgPaths.p23558000} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p29baa700} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2132_2786">
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
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
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

function Button5() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[31.997px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[31.997px] items-start justify-end left-[15.99px] top-[18.65px] w-[221.684px]" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[69.308px] left-[1437.15px] top-0 w-[253.659px]" data-name="Table Cell">
      <Container7 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[69.308px] left-0 top-[69.31px] w-[1690.81px]" data-name="Table Row">
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

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[24.003px] items-start left-[15.99px] overflow-clip top-[12.67px] w-[272.368px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">Chácara Verde</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[19.974px] items-start left-[15.99px] overflow-clip top-[36.67px] w-[272.368px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Sorocaba - SP</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[69.308px] left-0 overflow-clip top-0 w-[304.344px]" data-name="Table Cell">
      <Container8 />
      <Container9 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[69.308px] left-[304.34px] overflow-clip top-0 w-[253.616px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[19.65px] whitespace-pre">Ana Costa</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[69.308px] left-[557.96px] top-0 w-[169.07px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[84.72px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[19.65px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[69.308px] left-[727.03px] overflow-clip top-0 w-[304.344px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[22.67px] whitespace-pre">Área Única</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[69.308px] left-[1031.37px] top-0 w-[202.889px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[19.65px] whitespace-pre">45 ha</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[69.308px] left-[1234.26px] top-0 w-[202.889px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[101.63px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[19.65px] translate-x-[-50%] whitespace-pre">8</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2132_2775)" id="Icon">
          <path d={svgPaths.p3d77b880} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p29baa700} id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2132_2775">
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
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2132_2779)" id="Icon">
          <path d="M6.66151 7.32768V11.3246" id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M9.32611 7.32768V11.3246" id="Vector_2" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p7898770} id="Vector_3" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M1.99845 3.99693H13.9892" id="Vector_4" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p3a908c80} id="Vector_5" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_2132_2779">
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
        <Icon8 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[31.997px] items-start justify-end left-[15.99px] top-[18.65px] w-[221.684px]" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[69.308px] left-[1437.15px] top-0 w-[253.659px]" data-name="Table Cell">
      <Container10 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[69.308px] left-0 top-[138.62px] w-[1690.81px]" data-name="Table Row">
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

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[24.003px] items-start left-[15.99px] overflow-clip top-[12.67px] w-[272.368px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">Fazenda Esperança</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex h-[19.974px] items-start left-[15.99px] overflow-clip top-[36.67px] w-[272.368px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Jundiaí - SP</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[69.308px] left-0 overflow-clip top-0 w-[304.344px]" data-name="Table Cell">
      <Container11 />
      <Container12 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[69.308px] left-[304.34px] overflow-clip top-0 w-[253.616px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[19.65px] whitespace-pre">Carlos Ferreira, Beatriz Lima</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[69.308px] left-[557.96px] top-0 w-[169.07px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[84.72px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[19.65px] translate-x-[-50%] whitespace-pre">4</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[69.308px] left-[727.03px] overflow-clip top-0 w-[304.344px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[15.99px] text-[#777777] text-[14px] top-[22.67px] w-[297px]">Área Leste, Área Central, Área Oeste, Área Norte</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[69.308px] left-[1031.37px] top-0 w-[202.889px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[19.65px] whitespace-pre">320 ha</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[69.308px] left-[1234.26px] top-0 w-[202.889px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[101.82px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[19.65px] translate-x-[-50%] whitespace-pre">32</p>
    </div>
  );
}

function Icon9() {
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

function Button8() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[31.997px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Icon10() {
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

function Button9() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[31.997px]">
        <Icon10 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[31.997px] items-start justify-end left-[15.99px] top-[18.65px] w-[221.684px]" data-name="Container">
      <Button8 />
      <Button9 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[69.308px] left-[1437.15px] top-0 w-[253.659px]" data-name="Table Cell">
      <Container13 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[69.308px] left-0 top-[207.92px] w-[1690.81px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1.372px] border-solid inset-0 pointer-events-none" />
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

function Container14() {
  return (
    <div className="absolute content-stretch flex h-[24.003px] items-start left-[15.99px] overflow-clip top-[12.67px] w-[272.368px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1a1a] text-[16px]">Sítio Boa Vista</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[19.974px] items-start left-[15.99px] overflow-clip top-[36.67px] w-[272.368px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px]">Atibaia - SP</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[69.308px] left-0 overflow-clip top-0 w-[304.344px]" data-name="Table Cell">
      <Container14 />
      <Container15 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[69.308px] left-[304.34px] overflow-clip top-0 w-[253.616px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[19.65px] whitespace-pre">Fernanda Alves</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[69.308px] left-[557.96px] top-0 w-[169.07px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[84.72px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[19.65px] translate-x-[-50%] whitespace-pre">2</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[69.308px] left-[727.03px] overflow-clip top-0 w-[304.344px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[15.99px] text-[#777777] text-[14px] text-nowrap top-[22.67px] whitespace-pre">Área Sul, Área Baixada</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[69.308px] left-[1031.37px] top-0 w-[202.889px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.99px] text-[#1a1a1a] text-[16px] text-nowrap top-[19.65px] whitespace-pre">120 ha</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[69.308px] left-[1234.26px] top-0 w-[202.889px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[101.82px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[19.65px] translate-x-[-50%] whitespace-pre">12</p>
    </div>
  );
}

function Icon11() {
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

function Button10() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[31.997px]">
        <Icon11 />
      </div>
    </div>
  );
}

function Icon12() {
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

function Button11() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.022px] py-0 relative size-[31.997px]">
        <Icon12 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[31.997px] items-start justify-end left-[15.99px] top-[18.65px] w-[221.684px]" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[69.308px] left-[1437.15px] top-0 w-[253.659px]" data-name="Table Cell">
      <Container16 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[69.308px] left-0 top-[277.23px] w-[1690.81px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1.372px] border-solid inset-0 pointer-events-none" />
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
    <div className="absolute h-[346.541px] left-0 top-[64.59px] w-[1690.81px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function ListaPropriedades1() {
  return (
    <div className="h-[411.821px] relative shrink-0 w-[1690.81px]" data-name="ListaPropriedades">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[411.821px] overflow-clip relative rounded-[inherit] w-[1690.81px]">
        <ColumnGroup />
        <TableHeader />
        <TableBody />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[528.47px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[29.961px] h-[528.47px] items-start pb-[1.372px] pl-[25.353px] pr-[1.372px] pt-[25.353px] relative w-full">
          <ListaPropriedades />
          <ListaPropriedades1 />
        </div>
      </div>
    </div>
  );
}

function ListaPropriedades2() {
  return (
    <div className="h-[684.446px] relative shrink-0 w-full" data-name="ListaPropriedades">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[23.981px] h-[684.446px] items-start pb-0 pt-[31.997px] px-[31.997px] relative w-full">
          <Container1 />
          <Card />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 grow h-[851.759px] min-h-px min-w-px relative shrink-0" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[851.759px] items-start overflow-clip pb-0 pt-[63.993px] px-0 relative rounded-[inherit] w-full">
        <ListaPropriedades2 />
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
  return <div className="absolute left-0 opacity-0 size-0 top-0" data-name="Text" />;
}

function Text1() {
  return (
    <div className="absolute h-[18.002px] left-0 top-[-20000px] w-[12.944px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-neutral-950 text-nowrap top-[-0.63px] whitespace-pre">18</p>
    </div>
  );
}

function Text2() {
  return <div className="absolute left-0 opacity-0 size-0 top-[851.76px]" data-name="Text" />;
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

function Container17() {
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

function Text3() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[77.088px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[77.088px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[23.98px] w-[222.648px]" data-name="Button">
      <Icon13 />
      <Text3 />
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

function Text4() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[95.926px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[95.926px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-neutral-50 text-nowrap whitespace-pre">Propriedades</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[#0f3d26] box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[75.95px] w-[222.648px]" data-name="Button">
      <Icon14 />
      <Text4 />
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

function Text5() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[59.064px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[59.064px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Espécies</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[127.92px] w-[222.648px]" data-name="Button">
      <Icon15 />
      <Text5 />
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

function Text6() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[51.863px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[51.863px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Coletas</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[179.89px] w-[222.648px]" data-name="Button">
      <Icon16 />
      <Text6 />
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

function Text7() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[117.914px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[117.914px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Monitoramentos</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[231.86px] w-[222.648px]" data-name="Button">
      <Icon17 />
      <Text7 />
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

function Text8() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[52.978px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[52.978px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Rótulos</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[283.83px] w-[222.648px]" data-name="Button">
      <Icon18 />
      <Text8 />
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

function Text9() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[69.865px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[69.865px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Relatórios</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[335.8px] w-[222.648px]" data-name="Button">
      <Icon19 />
      <Text9 />
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

function Text10() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-[48.199px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.003px] items-start relative w-[48.199px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">Equipe</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[43.977px] items-center left-[15.99px] pl-[11.98px] pr-0 py-0 rounded-[14px] top-[387.77px] w-[222.648px]" data-name="Button">
      <Icon20 />
      <Text10 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[591.735px] left-0 overflow-clip top-[89.35px] w-[254.623px]" data-name="Navigation">
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
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

function Text11() {
  return (
    <div className="basis-0 grow h-[39.99px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.99px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#777777] text-[14px] top-[-2px] w-[153px]">Alternar para Módulo de Restauração</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="h-[67.98px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[11.98px] h-[67.98px] items-center px-[11.98px] py-0 relative w-full">
          <Icon21 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[101.326px] items-start left-0 pb-0 pt-[17.359px] px-[15.988px] top-[681.08px] w-[254.623px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button20 />
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

function Container19() {
  return (
    <div className="bg-[#f0f0f0] relative rounded-[4.6023e+07px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.997px]">
        <Text12 />
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

function Container20() {
  return (
    <div className="basis-0 grow h-[36.004px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36.004px] relative w-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[11.98px] h-[36.004px] items-center relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[69.351px] items-start left-0 pb-0 pt-[17.359px] px-[15.988px] top-[782.41px] w-[254.623px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.372px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container21 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white h-[851.759px] left-0 top-0 w-[255.995px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_1.372px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container17 />
      <Navigation />
      <Container18 />
      <Container22 />
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

function Button21() {
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

function Button22() {
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

function Button23() {
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
      <Button21 />
      <Button22 />
      <Button23 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.5)] h-[851.759px] left-0 top-0 w-[2061.5px]" data-name="Primitive.div" />;
}

function Icon25() {
  return (
    <div className="absolute left-0 size-[19.995px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2133_5431)" id="Icon">
          <path d={svgPaths.p2c43f500} id="Vector" stroke="var(--stroke-0, #0F3D26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
          <path d={svgPaths.pf44ec80} id="Vector_2" stroke="var(--stroke-0, #0F3D26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
        </g>
        <defs>
          <clipPath id="clip0_2133_5431">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrimitiveH() {
  return (
    <div className="h-[19.995px] relative shrink-0 w-[461.284px]" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.995px] relative w-[461.284px]">
        <Icon25 />
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[18px] left-[27.99px] text-[18px] text-neutral-50 text-nowrap top-[0.24px] whitespace-pre">Editar Propriedade</p>
      </div>
    </div>
  );
}

function PrimitiveP() {
  return (
    <div className="h-[19.974px] relative shrink-0 w-[461.284px]" data-name="Primitive.p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.974px] items-start relative w-[461.284px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px]">Edite as informações da propriedade usando a navegação lateral</p>
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7.994px] h-[89.304px] items-start left-[1.37px] pb-[1.372px] pl-[23.981px] pr-0 pt-[23.981px] top-[1.37px] w-[509.247px]" data-name="DialogHeader">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1.372px] border-solid inset-0 pointer-events-none" />
      <PrimitiveH />
      <PrimitiveP />
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute h-[39.948px] left-[15.99px] rounded-[10px] top-0 w-[186.644px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[11.98px] text-[#9da29f] text-[14px] text-nowrap top-[7.99px] whitespace-pre">Dados Gerais</p>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute bg-[#0f3d26] h-[39.948px] left-[15.99px] rounded-[10px] top-[45.93px] w-[186.644px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[11.98px] text-[14px] text-neutral-50 text-nowrap top-[7.99px] whitespace-pre">Proprietário(s)</p>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute h-[39.948px] left-[15.99px] rounded-[10px] top-[91.85px] w-[186.644px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[11.98px] text-[#9da29f] text-[14px] text-nowrap top-[7.99px] whitespace-pre">Lista de Locais</p>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute h-[39.948px] left-[15.99px] rounded-[10px] top-[137.78px] w-[186.644px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[11.98px] text-[#9da29f] text-[14px] text-nowrap top-[7.99px] whitespace-pre">Documentos</p>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute h-[39.948px] left-[15.99px] rounded-[10px] top-[183.71px] w-[186.644px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[11.98px] text-[#9da29f] text-[14px] text-nowrap top-[7.99px] whitespace-pre">QR Code</p>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="h-[223.655px] relative shrink-0 w-full" data-name="Navigation">
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#1f2923] h-[425.108px] relative shrink-0 w-[219.991px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_1.372px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[425.108px] items-start pb-0 pl-0 pr-[1.372px] pt-[11.98px] relative w-[219.991px]">
        <Navigation1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[55.978px] left-[7.99px] top-0 w-[101.541px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-neutral-50 top-[-1.63px] w-[102px]">Proprietários Associados</p>
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-[11.98px] size-[15.988px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pafe7640} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p6eb7580} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute bg-[#0f3d26] h-[35.983px] left-[109.53px] rounded-[8px] top-[9.99px] w-[176.228px]" data-name="Button">
      <Icon26 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[103.96px] text-[12px] text-center text-neutral-50 text-nowrap top-[8.35px] translate-x-[-50%] whitespace-pre">Adicionar Proprietário</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[55.978px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Button29 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[14.187px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p58c6280} id="Vector" stroke="var(--stroke-0, #0F3D26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18228" />
          <path d={svgPaths.pe23b780} id="Vector_2" stroke="var(--stroke-0, #0F3D26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18228" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[43.977px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-justify text-neutral-50 top-[3.36px] w-[68px]">João da Silva</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[42.884px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14.286px] left-0 text-[#9da29f] text-[10px] top-[-2px] w-[62px]">CPF: XXX.XXX.XXX-XX</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[86.86px] relative shrink-0 w-[67.229px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[86.86px] items-start relative w-[67.229px]">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex gap-[11.98px] h-[86.86px] items-center left-[15.99px] top-[15.99px] w-[93.397px]" data-name="Container">
      <Icon27 />
      <Container27 />
    </div>
  );
}

function Button30() {
  return (
    <div className="h-[31.997px] relative rounded-[8px] shrink-0 w-[60.822px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[31.997px] items-center justify-center px-[12px] py-0 relative w-[60.822px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9da29f] text-[14px] text-center text-nowrap whitespace-pre">Editar</p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="h-[31.997px] relative rounded-[8px] shrink-0 w-[80.088px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[31.997px] items-center justify-center px-[12px] py-0 relative w-[80.088px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9da29f] text-[14px] text-center text-nowrap whitespace-pre">Remover</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[31.997px] items-start left-[109.38px] top-[43.42px] w-[148.904px]" data-name="Container">
      <Button30 />
      <Button31 />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#121714] h-[118.836px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[14.187px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p31e93180} id="Vector" stroke="var(--stroke-0, #0F3D26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18228" />
          <path d={svgPaths.p2037af00} id="Vector_2" stroke="var(--stroke-0, #0F3D26)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18228" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[43.977px] left-0 top-0 w-[67.229px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-justify text-neutral-50 top-[3.36px] w-[36px]">Maria Santos</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[42.884px] left-0 top-[43.98px] w-[67.229px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14.286px] left-0 text-[#9da29f] text-[10px] top-[-2px] w-[62px]">CPF: XXX.XXX.XXX-XX</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[86.86px] relative shrink-0 w-[67.229px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[86.86px] relative w-[67.229px]">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[11.98px] h-[86.86px] items-center left-[15.99px] top-[15.99px] w-[93.397px]" data-name="Container">
      <Icon28 />
      <Container33 />
    </div>
  );
}

function Button32() {
  return (
    <div className="h-[31.997px] relative rounded-[8px] shrink-0 w-[60.822px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[31.997px] items-center justify-center px-[12px] py-0 relative w-[60.822px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9da29f] text-[14px] text-center text-nowrap whitespace-pre">Editar</p>
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="h-[31.997px] relative rounded-[8px] shrink-0 w-[80.088px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[31.997px] items-center justify-center px-[12px] py-0 relative w-[80.088px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9da29f] text-[14px] text-center text-nowrap whitespace-pre">Remover</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[31.997px] items-start left-[109.38px] top-[43.42px] w-[148.904px]" data-name="Container">
      <Button32 />
      <Button33 />
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#121714] h-[118.836px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[253.659px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[15.988px] h-[253.659px] items-start pl-[15.988px] pr-0 py-0 relative w-full">
          <Container30 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[325.625px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[15.988px] h-[325.625px] items-start px-[7.994px] py-0 relative w-full">
          <Container24 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="basis-0 bg-[#2b3630] grow h-[425.108px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[425.108px] items-start pb-0 pt-[31.975px] px-[23.981px] relative w-full">
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function ModalEditarPropriedade() {
  return (
    <div className="absolute content-stretch flex h-[425.108px] items-start left-[1.37px] overflow-clip top-[90.68px] w-[509.247px]" data-name="ModalEditarPropriedade">
      <Container23 />
      <Container39 />
    </div>
  );
}

function Button34() {
  return (
    <div className="bg-white h-[35.983px] relative rounded-[8px] shrink-0 w-[89.025px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#121714] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[35.983px] items-center justify-center px-[17.372px] py-[9.372px] relative w-[89.025px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9da29f] text-[14px] text-center text-nowrap whitespace-pre">Cancelar</p>
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="bg-[#0f3d26] h-[35.983px] relative rounded-[8px] shrink-0 w-[140.074px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[35.983px] items-center justify-center px-[16px] py-[8px] relative w-[140.074px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-neutral-50 text-nowrap whitespace-pre">Salvar Alterações</p>
      </div>
    </div>
  );
}

function ModalEditarPropriedade1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.98px] h-[69.33px] items-start justify-end left-[1.37px] pb-0 pl-0 pr-[23.981px] pt-[17.36px] top-[515.78px] w-[509.247px]" data-name="ModalEditarPropriedade">
      <div aria-hidden="true" className="absolute border-[#121714] border-[1.372px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button34 />
      <Button35 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-0 size-[15.988px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p283f2a80} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p3701ca80} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function DialogContent() {
  return (
    <div className="absolute content-stretch flex items-start left-[7.01px] overflow-clip size-[0.986px] top-[15px]" data-name="DialogContent">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-neutral-50 text-nowrap whitespace-pre">Close</p>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute left-[478.64px] opacity-70 rounded-[2px] size-[15.988px] top-[17.36px]" data-name="Primitive.button">
      <Icon29 />
      <DialogContent />
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="absolute bg-[#2b3630] h-[586.484px] left-[774.76px] rounded-[10px] top-[132.64px] w-[511.99px]" data-name="Primitive.div">
      <div className="h-[586.484px] overflow-clip relative rounded-[inherit] w-[511.99px]">
        <DialogHeader />
        <ModalEditarPropriedade />
        <ModalEditarPropriedade1 />
        <PrimitiveButton />
      </div>
      <div aria-hidden="true" className="absolute border-[#121714] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
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