import svgPaths from "./svg-m5mzwadj71";

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p18406864} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute h-[20px] left-[25px] top-[25px] w-[1286px]" data-name="CardTitle">
      <Icon />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[16px] text-neutral-50 text-nowrap top-0 whitespace-pre">Equipe Envolvida no Período</p>
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[#121714] h-px left-px top-[75px] w-[1334px]" data-name="Primitive.div" />;
}

function HeaderCell() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-0 px-[16px] py-[12px] top-0 w-[218.688px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px]">Nome</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[218.69px] px-[16px] py-[12px] top-0 w-[236.172px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px]">Função</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[454.86px] px-[16px] py-[12px] top-0 w-[424.469px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px]">Total de matrizes cadastradas</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[879.33px] px-[16px] py-[12px] top-0 w-[406.672px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-right">Total de sementes coletadas</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[44.5px] left-0 top-0 w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[44.5px] left-0 top-0 w-[1286px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[218.688px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">Maria Silva</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[49px] left-[218.69px] top-0 w-[236.172px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#9da29f] text-[16px] text-nowrap top-[10.5px] whitespace-pre">Coletora</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[49px] left-[454.86px] top-0 w-[424.469px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">28</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[49px] left-[879.33px] top-0 w-[406.672px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[391.56px] text-[16px] text-neutral-50 text-nowrap text-right top-[10.5px] translate-x-[-100%] whitespace-pre">18.5 kg</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[218.688px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">João Santos</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[49px] left-[218.69px] top-0 w-[236.172px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#9da29f] text-[16px] text-nowrap top-[10.5px] whitespace-pre">Coordenador</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[49px] left-[454.86px] top-0 w-[424.469px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">35</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[49px] left-[879.33px] top-0 w-[406.672px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[391.56px] text-[16px] text-neutral-50 text-nowrap text-right top-[10.5px] translate-x-[-100%] whitespace-pre">24.3 kg</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[49px] left-0 top-[49px] w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[218.688px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">Ana Costa</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[49px] left-[218.69px] top-0 w-[236.172px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#9da29f] text-[16px] text-nowrap top-[10.5px] whitespace-pre">Analista</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[49px] left-[454.86px] top-0 w-[424.469px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">24</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[49px] left-[879.33px] top-0 w-[406.672px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[391.56px] text-[16px] text-neutral-50 text-nowrap text-right top-[10.5px] translate-x-[-100%] whitespace-pre">11.5 kg</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[49px] left-0 top-[98px] w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[147px] left-0 top-[44.5px] w-[1286px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function RelatorioVisualizar() {
  return (
    <div className="absolute h-[192px] left-[25px] overflow-clip top-[124px] w-[1286px]" data-name="RelatorioVisualizar">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#2b3630] h-[341px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#2b3630] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle />
      <PrimitiveDiv />
      <RelatorioVisualizar />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="absolute h-[20px] left-[25px] top-[25px] w-[1286px]" data-name="CardTitle">
      <Icon1 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[16px] text-neutral-50 text-nowrap top-0 whitespace-pre">Propriedades Envolvidas</p>
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="absolute bg-[#121714] h-px left-px top-[75px] w-[1334px]" data-name="Primitive.div" />;
}

function HeaderCell4() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-0 px-[16px] py-[12px] top-0 w-[275.125px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px]">Nome da Propriedade</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[275.13px] px-[16px] py-[12px] top-0 w-[207.938px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px]">Município</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[483.06px] px-[16px] py-[12px] top-0 w-[188.797px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px]">Nº de Coletas</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[671.86px] px-[16px] py-[12px] top-0 w-[169.766px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px]">Nº matrizes</p>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[841.63px] px-[16px] py-[12px] top-0 w-[198.797px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px]">Nº de espécies</p>
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[1040.42px] px-[16px] py-[12px] top-0 w-[245.578px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-right">Total Coletado (kg)</p>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[44.5px] left-0 top-0 w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
      <HeaderCell8 />
      <HeaderCell9 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="absolute h-[44.5px] left-0 top-0 w-[1286px]" data-name="Table Header">
      <TableRow4 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[275.125px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">Fazenda São João</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[49px] left-[275.13px] top-0 w-[207.938px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#9da29f] text-[16px] text-nowrap top-[10.5px] whitespace-pre">Campinas - SP</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[49px] left-[483.06px] top-0 w-[188.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">28</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[49px] left-[671.86px] top-0 w-[169.766px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">42</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[49px] left-[841.63px] top-0 w-[198.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">12</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[49px] left-[1040.42px] top-0 w-[245.578px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[230.47px] text-[16px] text-neutral-50 text-nowrap text-right top-[10.5px] translate-x-[-100%] whitespace-pre">24.5 kg</p>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[275.125px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">Sítio Primavera</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[49px] left-[275.13px] top-0 w-[207.938px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#9da29f] text-[16px] text-nowrap top-[10.5px] whitespace-pre">Jundiaí - SP</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[49px] left-[483.06px] top-0 w-[188.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">19</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[49px] left-[671.86px] top-0 w-[169.766px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">31</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[49px] left-[841.63px] top-0 w-[198.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">8</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[49px] left-[1040.42px] top-0 w-[245.578px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[230.47px] text-[16px] text-neutral-50 text-nowrap text-right top-[10.5px] translate-x-[-100%] whitespace-pre">17.5 kg</p>
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute h-[49px] left-0 top-[49px] w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[275.125px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">Chácara Verde</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[49px] left-[275.13px] top-0 w-[207.938px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#9da29f] text-[16px] text-nowrap top-[10.5px] whitespace-pre">Sorocaba - SP</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[49px] left-[483.06px] top-0 w-[188.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">15</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[49px] left-[671.86px] top-0 w-[169.766px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">18</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[49px] left-[841.63px] top-0 w-[198.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">6</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[49px] left-[1040.42px] top-0 w-[245.578px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[230.47px] text-[16px] text-neutral-50 text-nowrap text-right top-[10.5px] translate-x-[-100%] whitespace-pre">12.3 kg</p>
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute h-[49px] left-0 top-[98px] w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="absolute h-[147px] left-0 top-[44.5px] w-[1286px]" data-name="Table Body">
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
    </div>
  );
}

function RelatorioVisualizar1() {
  return (
    <div className="absolute h-[192px] left-[25px] overflow-clip top-[124px] w-[1286px]" data-name="RelatorioVisualizar">
      <TableHeader1 />
      <TableBody1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#2b3630] h-[341px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#2b3630] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle1 />
      <PrimitiveDiv1 />
      <RelatorioVisualizar1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2138_10935)" id="Icon">
          <path d={svgPaths.p363df2c0} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2138_10935">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="absolute h-[20px] left-[25px] top-[25px] w-[1286px]" data-name="CardTitle">
      <Icon2 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[16px] text-neutral-50 text-nowrap top-0 whitespace-pre">Atividades Realizadas</p>
    </div>
  );
}

function PrimitiveDiv2() {
  return <div className="absolute bg-[#121714] h-px left-px top-[75px] w-[1334px]" data-name="Primitive.div" />;
}

function HeaderCell10() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-0 px-[16px] py-[12px] top-0 w-[375.281px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px]">Tipo de Atividade</p>
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[375.28px] px-[16px] py-[12px] top-0 w-[272.672px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px]">Quantidade</p>
    </div>
  );
}

function HeaderCell12() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[647.95px] px-[16px] py-[12px] top-0 w-[400.375px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px]">Espécies Envolvidas</p>
    </div>
  );
}

function HeaderCell13() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[1048.33px] px-[16px] py-[12px] top-0 w-[237.672px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-right">Total (kg)</p>
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute h-[44.5px] left-0 top-0 w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <HeaderCell10 />
      <HeaderCell11 />
      <HeaderCell12 />
      <HeaderCell13 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="absolute h-[44.5px] left-0 top-0 w-[1286px]" data-name="Table Header">
      <TableRow8 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[375.281px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">Coletas</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[49px] left-[375.28px] top-0 w-[272.672px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">62</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[49px] left-[647.95px] top-0 w-[400.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#9da29f] text-[16px] text-nowrap top-[10.5px] whitespace-pre">18 espécies</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[49px] left-[1048.33px] top-0 w-[237.672px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[222.56px] text-[16px] text-neutral-50 text-nowrap text-right top-[10.5px] translate-x-[-100%] whitespace-pre">54.3 kg</p>
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[375.281px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">Monitoramentos</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[49px] left-[375.28px] top-0 w-[272.672px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">45</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[49px] left-[647.95px] top-0 w-[400.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#9da29f] text-[16px] text-nowrap top-[10.5px] whitespace-pre">23 matrizes</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[49px] left-[1048.33px] top-0 w-[237.672px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[222.27px] text-[16px] text-neutral-50 text-nowrap text-right top-[10.5px] translate-x-[-100%] whitespace-pre">-</p>
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute h-[49px] left-0 top-[49px] w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[375.281px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">Beneficiamento</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[49px] left-[375.28px] top-0 w-[272.672px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">38</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[49px] left-[647.95px] top-0 w-[400.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#9da29f] text-[16px] text-nowrap top-[10.5px] whitespace-pre">15 espécies</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[49px] left-[1048.33px] top-0 w-[237.672px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[222.56px] text-[16px] text-neutral-50 text-nowrap text-right top-[10.5px] translate-x-[-100%] whitespace-pre">42.1 kg</p>
    </div>
  );
}

function TableRow11() {
  return (
    <div className="absolute h-[49px] left-0 top-[98px] w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
    </div>
  );
}

function TableBody2() {
  return (
    <div className="absolute h-[147px] left-0 top-[44.5px] w-[1286px]" data-name="Table Body">
      <TableRow9 />
      <TableRow10 />
      <TableRow11 />
    </div>
  );
}

function RelatorioVisualizar2() {
  return (
    <div className="absolute h-[192px] left-[25px] overflow-clip top-[124px] w-[1286px]" data-name="RelatorioVisualizar">
      <TableHeader2 />
      <TableBody2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#2b3630] h-[341px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#2b3630] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle2 />
      <PrimitiveDiv2 />
      <RelatorioVisualizar2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[278.219px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[278.219px]">
        <Icon3 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[16px] text-neutral-50 text-nowrap top-0 whitespace-pre">Calendário Fenológico das Espécies</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9da29f] text-[14px] text-nowrap whitespace-pre">Floração</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.219px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[76.219px]">
        <Icon4 />
        <Text />
      </div>
    </div>
  );
}

function Icon5() {
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

function Text1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9da29f] text-[14px] text-nowrap whitespace-pre">Frutificação</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-full">
        <Icon5 />
        <Text1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[187.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[20px] items-center relative w-[187.141px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function RelatorioVisualizar3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-[25px] top-[25px] w-[1286px]" data-name="RelatorioVisualizar">
      <CardTitle3 />
      <Container2 />
    </div>
  );
}

function PrimitiveDiv3() {
  return <div className="absolute bg-[#121714] h-px left-px top-[75px] w-[1334px]" data-name="Primitive.div" />;
}

function HeaderCell14() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-0 px-[16px] py-[12px] top-0 w-[192.031px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px]">Espécie</p>
    </div>
  );
}

function HeaderCell15() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[192.03px] px-[16px] py-[12px] top-0 w-[88.297px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-center">Jan</p>
    </div>
  );
}

function HeaderCell16() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[280.33px] px-[16px] py-[12px] top-0 w-[88.859px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-center">Fev</p>
    </div>
  );
}

function HeaderCell17() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[369.19px] px-[16px] py-[12px] top-0 w-[95.484px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-center">Mar</p>
    </div>
  );
}

function HeaderCell18() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[464.67px] px-[16px] py-[12px] top-0 w-[91.563px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-center">Abr</p>
    </div>
  );
}

function HeaderCell19() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[556.23px] px-[16px] py-[12px] top-0 w-[92.891px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-center">Mai</p>
    </div>
  );
}

function HeaderCell20() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[649.13px] px-[16px] py-[12px] top-0 w-[90.063px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-center">Jun</p>
    </div>
  );
}

function HeaderCell21() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[739.19px] px-[16px] py-[12px] top-0 w-[82.719px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-center">Jul</p>
    </div>
  );
}

function HeaderCell22() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[821.91px] px-[16px] py-[12px] top-0 w-[96.406px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-center">Ago</p>
    </div>
  );
}

function HeaderCell23() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[918.31px] px-[16px] py-[12px] top-0 w-[86.281px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-center">Set</p>
    </div>
  );
}

function HeaderCell24() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[1004.59px] px-[16px] py-[12px] top-0 w-[92.281px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-center">Out</p>
    </div>
  );
}

function HeaderCell25() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[1096.88px] px-[16px] py-[12px] top-0 w-[96.641px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-center">Nov</p>
    </div>
  );
}

function HeaderCell26() {
  return (
    <div className="absolute box-border content-stretch flex h-[44.5px] items-start left-[1193.52px] px-[16px] py-[12px] top-0 w-[92.484px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9da29f] text-[14px] text-center">Dez</p>
    </div>
  );
}

function TableRow12() {
  return (
    <div className="absolute h-[44.5px] left-0 top-0 w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <HeaderCell14 />
      <HeaderCell15 />
      <HeaderCell16 />
      <HeaderCell17 />
      <HeaderCell18 />
      <HeaderCell19 />
      <HeaderCell20 />
      <HeaderCell21 />
      <HeaderCell22 />
      <HeaderCell23 />
      <HeaderCell24 />
      <HeaderCell25 />
      <HeaderCell26 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="absolute h-[44.5px] left-0 top-0 w-[1286px]" data-name="Table Header">
      <TableRow12 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[192.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">Andiroba</p>
    </div>
  );
}

function TableCell43() {
  return <div className="absolute h-[49px] left-[192.03px] top-0 w-[88.297px]" data-name="Table Cell" />;
}

function TableCell44() {
  return <div className="absolute h-[49px] left-[280.33px] top-0 w-[88.859px]" data-name="Table Cell" />;
}

function TableCell45() {
  return <div className="absolute h-[49px] left-[369.19px] top-0 w-[95.484px]" data-name="Table Cell" />;
}

function Icon6() {
  return (
    <div className="absolute left-[37.78px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[49px] left-[464.67px] top-0 w-[91.563px]" data-name="Table Cell">
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[38.44px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[49px] left-[556.23px] top-0 w-[92.891px]" data-name="Table Cell">
      <Icon7 />
    </div>
  );
}

function TableCell48() {
  return <div className="absolute h-[49px] left-[649.13px] top-0 w-[90.063px]" data-name="Table Cell" />;
}

function TableCell49() {
  return <div className="absolute h-[49px] left-[739.19px] top-0 w-[82.719px]" data-name="Table Cell" />;
}

function Icon8() {
  return (
    <div className="absolute left-[40.2px] size-[16px] top-[16.5px]" data-name="Icon">
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

function TableCell50() {
  return (
    <div className="absolute h-[49px] left-[821.91px] top-0 w-[96.406px]" data-name="Table Cell">
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[35.14px] size-[16px] top-[16.5px]" data-name="Icon">
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

function TableCell51() {
  return (
    <div className="absolute h-[49px] left-[918.31px] top-0 w-[86.281px]" data-name="Table Cell">
      <Icon9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[38.14px] size-[16px] top-[16.5px]" data-name="Icon">
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

function TableCell52() {
  return (
    <div className="absolute h-[49px] left-[1004.59px] top-0 w-[92.281px]" data-name="Table Cell">
      <Icon10 />
    </div>
  );
}

function TableCell53() {
  return <div className="absolute h-[49px] left-[1096.88px] top-0 w-[96.641px]" data-name="Table Cell" />;
}

function TableCell54() {
  return <div className="absolute h-[49px] left-[1193.52px] top-0 w-[92.484px]" data-name="Table Cell" />;
}

function TableRow13() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[192.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">Jatobá</p>
    </div>
  );
}

function TableCell56() {
  return <div className="absolute h-[49px] left-[192.03px] top-0 w-[88.297px]" data-name="Table Cell" />;
}

function TableCell57() {
  return <div className="absolute h-[49px] left-[280.33px] top-0 w-[88.859px]" data-name="Table Cell" />;
}

function TableCell58() {
  return <div className="absolute h-[49px] left-[369.19px] top-0 w-[95.484px]" data-name="Table Cell" />;
}

function TableCell59() {
  return <div className="absolute h-[49px] left-[464.67px] top-0 w-[91.563px]" data-name="Table Cell" />;
}

function TableCell60() {
  return <div className="absolute h-[49px] left-[556.23px] top-0 w-[92.891px]" data-name="Table Cell" />;
}

function TableCell61() {
  return <div className="absolute h-[49px] left-[649.13px] top-0 w-[90.063px]" data-name="Table Cell" />;
}

function Icon11() {
  return (
    <div className="absolute left-[33.36px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute h-[49px] left-[739.19px] top-0 w-[82.719px]" data-name="Table Cell">
      <Icon11 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[40.2px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute h-[49px] left-[821.91px] top-0 w-[96.406px]" data-name="Table Cell">
      <Icon12 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[35.14px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute h-[49px] left-[918.31px] top-0 w-[86.281px]" data-name="Table Cell">
      <Icon13 />
    </div>
  );
}

function TableCell65() {
  return <div className="absolute h-[49px] left-[1004.59px] top-0 w-[92.281px]" data-name="Table Cell" />;
}

function Icon14() {
  return (
    <div className="absolute left-[40.31px] size-[16px] top-[16.5px]" data-name="Icon">
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

function TableCell66() {
  return (
    <div className="absolute h-[49px] left-[1096.88px] top-0 w-[96.641px]" data-name="Table Cell">
      <Icon14 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[38.23px] size-[16px] top-[16.5px]" data-name="Icon">
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

function TableCell67() {
  return (
    <div className="absolute h-[49px] left-[1193.52px] top-0 w-[92.484px]" data-name="Table Cell">
      <Icon15 />
    </div>
  );
}

function TableRow14() {
  return (
    <div className="absolute h-[49px] left-0 top-[49px] w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell55 />
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
      <TableCell63 />
      <TableCell64 />
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[192.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">Ipê-amarelo</p>
    </div>
  );
}

function TableCell69() {
  return <div className="absolute h-[49px] left-[192.03px] top-0 w-[88.297px]" data-name="Table Cell" />;
}

function TableCell70() {
  return <div className="absolute h-[49px] left-[280.33px] top-0 w-[88.859px]" data-name="Table Cell" />;
}

function TableCell71() {
  return <div className="absolute h-[49px] left-[369.19px] top-0 w-[95.484px]" data-name="Table Cell" />;
}

function TableCell72() {
  return <div className="absolute h-[49px] left-[464.67px] top-0 w-[91.563px]" data-name="Table Cell" />;
}

function TableCell73() {
  return <div className="absolute h-[49px] left-[556.23px] top-0 w-[92.891px]" data-name="Table Cell" />;
}

function Icon16() {
  return (
    <div className="absolute left-[37.03px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableCell74() {
  return (
    <div className="absolute h-[49px] left-[649.13px] top-0 w-[90.063px]" data-name="Table Cell">
      <Icon16 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[33.36px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableCell75() {
  return (
    <div className="absolute h-[49px] left-[739.19px] top-0 w-[82.719px]" data-name="Table Cell">
      <Icon17 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[40.2px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableCell76() {
  return (
    <div className="absolute h-[49px] left-[821.91px] top-0 w-[96.406px]" data-name="Table Cell">
      <Icon18 />
    </div>
  );
}

function TableCell77() {
  return <div className="absolute h-[49px] left-[918.31px] top-0 w-[86.281px]" data-name="Table Cell" />;
}

function Icon19() {
  return (
    <div className="absolute left-[38.14px] size-[16px] top-[16.5px]" data-name="Icon">
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

function TableCell78() {
  return (
    <div className="absolute h-[49px] left-[1004.59px] top-0 w-[92.281px]" data-name="Table Cell">
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[40.31px] size-[16px] top-[16.5px]" data-name="Icon">
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

function TableCell79() {
  return (
    <div className="absolute h-[49px] left-[1096.88px] top-0 w-[96.641px]" data-name="Table Cell">
      <Icon20 />
    </div>
  );
}

function TableCell80() {
  return <div className="absolute h-[49px] left-[1193.52px] top-0 w-[92.484px]" data-name="Table Cell" />;
}

function TableRow15() {
  return (
    <div className="absolute h-[49px] left-0 top-[98px] w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell68 />
      <TableCell69 />
      <TableCell70 />
      <TableCell71 />
      <TableCell72 />
      <TableCell73 />
      <TableCell74 />
      <TableCell75 />
      <TableCell76 />
      <TableCell77 />
      <TableCell78 />
      <TableCell79 />
      <TableCell80 />
    </div>
  );
}

function TableCell81() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[192.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">Cedro</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[36.14px] size-[16px] top-[16.5px]" data-name="Icon">
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

function TableCell82() {
  return (
    <div className="absolute h-[49px] left-[192.03px] top-0 w-[88.297px]" data-name="Table Cell">
      <Icon21 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[36.42px] size-[16px] top-[16.5px]" data-name="Icon">
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

function TableCell83() {
  return (
    <div className="absolute h-[49px] left-[280.33px] top-0 w-[88.859px]" data-name="Table Cell">
      <Icon22 />
    </div>
  );
}

function TableCell84() {
  return <div className="absolute h-[49px] left-[369.19px] top-0 w-[95.484px]" data-name="Table Cell" />;
}

function TableCell85() {
  return <div className="absolute h-[49px] left-[464.67px] top-0 w-[91.563px]" data-name="Table Cell" />;
}

function TableCell86() {
  return <div className="absolute h-[49px] left-[556.23px] top-0 w-[92.891px]" data-name="Table Cell" />;
}

function TableCell87() {
  return <div className="absolute h-[49px] left-[649.13px] top-0 w-[90.063px]" data-name="Table Cell" />;
}

function TableCell88() {
  return <div className="absolute h-[49px] left-[739.19px] top-0 w-[82.719px]" data-name="Table Cell" />;
}

function TableCell89() {
  return <div className="absolute h-[49px] left-[821.91px] top-0 w-[96.406px]" data-name="Table Cell" />;
}

function Icon23() {
  return (
    <div className="absolute left-[35.14px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableCell90() {
  return (
    <div className="absolute h-[49px] left-[918.31px] top-0 w-[86.281px]" data-name="Table Cell">
      <Icon23 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[38.14px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableCell91() {
  return (
    <div className="absolute h-[49px] left-[1004.59px] top-0 w-[92.281px]" data-name="Table Cell">
      <Icon24 />
    </div>
  );
}

function TableCell92() {
  return <div className="absolute h-[49px] left-[1096.88px] top-0 w-[96.641px]" data-name="Table Cell" />;
}

function TableCell93() {
  return <div className="absolute h-[49px] left-[1193.52px] top-0 w-[92.484px]" data-name="Table Cell" />;
}

function TableRow16() {
  return (
    <div className="absolute h-[49px] left-0 top-[147px] w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell81 />
      <TableCell82 />
      <TableCell83 />
      <TableCell84 />
      <TableCell85 />
      <TableCell86 />
      <TableCell87 />
      <TableCell88 />
      <TableCell89 />
      <TableCell90 />
      <TableCell91 />
      <TableCell92 />
      <TableCell93 />
    </div>
  );
}

function TableCell94() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[192.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">Manga</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[36.14px] size-[16px] top-[16.5px]" data-name="Icon">
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

function TableCell95() {
  return (
    <div className="absolute h-[49px] left-[192.03px] top-0 w-[88.297px]" data-name="Table Cell">
      <Icon25 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-[36.42px] size-[16px] top-[16.5px]" data-name="Icon">
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

function TableCell96() {
  return (
    <div className="absolute h-[49px] left-[280.33px] top-0 w-[88.859px]" data-name="Table Cell">
      <Icon26 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-[39.73px] size-[16px] top-[16.5px]" data-name="Icon">
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

function TableCell97() {
  return (
    <div className="absolute h-[49px] left-[369.19px] top-0 w-[95.484px]" data-name="Table Cell">
      <Icon27 />
    </div>
  );
}

function TableCell98() {
  return <div className="absolute h-[49px] left-[464.67px] top-0 w-[91.563px]" data-name="Table Cell" />;
}

function TableCell99() {
  return <div className="absolute h-[49px] left-[556.23px] top-0 w-[92.891px]" data-name="Table Cell" />;
}

function TableCell100() {
  return <div className="absolute h-[49px] left-[649.13px] top-0 w-[90.063px]" data-name="Table Cell" />;
}

function Icon28() {
  return (
    <div className="absolute left-[33.36px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableCell101() {
  return (
    <div className="absolute h-[49px] left-[739.19px] top-0 w-[82.719px]" data-name="Table Cell">
      <Icon28 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-[40.2px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableCell102() {
  return (
    <div className="absolute h-[49px] left-[821.91px] top-0 w-[96.406px]" data-name="Table Cell">
      <Icon29 />
    </div>
  );
}

function TableCell103() {
  return <div className="absolute h-[49px] left-[918.31px] top-0 w-[86.281px]" data-name="Table Cell" />;
}

function TableCell104() {
  return <div className="absolute h-[49px] left-[1004.59px] top-0 w-[92.281px]" data-name="Table Cell" />;
}

function TableCell105() {
  return <div className="absolute h-[49px] left-[1096.88px] top-0 w-[96.641px]" data-name="Table Cell" />;
}

function TableCell106() {
  return <div className="absolute h-[49px] left-[1193.52px] top-0 w-[92.484px]" data-name="Table Cell" />;
}

function TableRow17() {
  return (
    <div className="absolute h-[49px] left-0 top-[196px] w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell94 />
      <TableCell95 />
      <TableCell96 />
      <TableCell97 />
      <TableCell98 />
      <TableCell99 />
      <TableCell100 />
      <TableCell101 />
      <TableCell102 />
      <TableCell103 />
      <TableCell104 />
      <TableCell105 />
      <TableCell106 />
    </div>
  );
}

function TableCell107() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[192.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[16px] text-neutral-50 text-nowrap top-[10.5px] whitespace-pre">Peroba-rosa</p>
    </div>
  );
}

function TableCell108() {
  return <div className="absolute h-[49px] left-[192.03px] top-0 w-[88.297px]" data-name="Table Cell" />;
}

function TableCell109() {
  return <div className="absolute h-[49px] left-[280.33px] top-0 w-[88.859px]" data-name="Table Cell" />;
}

function TableCell110() {
  return <div className="absolute h-[49px] left-[369.19px] top-0 w-[95.484px]" data-name="Table Cell" />;
}

function TableCell111() {
  return <div className="absolute h-[49px] left-[464.67px] top-0 w-[91.563px]" data-name="Table Cell" />;
}

function TableCell112() {
  return <div className="absolute h-[49px] left-[556.23px] top-0 w-[92.891px]" data-name="Table Cell" />;
}

function TableCell113() {
  return <div className="absolute h-[49px] left-[649.13px] top-0 w-[90.063px]" data-name="Table Cell" />;
}

function TableCell114() {
  return <div className="absolute h-[49px] left-[739.19px] top-0 w-[82.719px]" data-name="Table Cell" />;
}

function TableCell115() {
  return <div className="absolute h-[49px] left-[821.91px] top-0 w-[96.406px]" data-name="Table Cell" />;
}

function TableCell116() {
  return <div className="absolute h-[49px] left-[918.31px] top-0 w-[86.281px]" data-name="Table Cell" />;
}

function Icon30() {
  return (
    <div className="absolute left-[38.14px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableCell117() {
  return (
    <div className="absolute h-[49px] left-[1004.59px] top-0 w-[92.281px]" data-name="Table Cell">
      <Icon30 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-[40.31px] size-[16px] top-[16.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26fd6900} id="Vector_2" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5V6" id="Vector_3" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 8H6" id="Vector_4" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11 8H10" id="Vector_5" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11V10" id="Vector_6" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1aba7180} id="Vector_7" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18414c70} id="Vector_8" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb60d80} id="Vector_9" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p7b7000} id="Vector_10" stroke="var(--stroke-0, #FCD34D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TableCell118() {
  return (
    <div className="absolute h-[49px] left-[1096.88px] top-0 w-[96.641px]" data-name="Table Cell">
      <Icon31 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute left-[38.23px] size-[16px] top-[16.5px]" data-name="Icon">
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

function TableCell119() {
  return (
    <div className="absolute h-[49px] left-[1193.52px] top-0 w-[92.484px]" data-name="Table Cell">
      <Icon32 />
    </div>
  );
}

function TableRow18() {
  return (
    <div className="absolute h-[49px] left-0 top-[245px] w-[1286px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#121714] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell107 />
      <TableCell108 />
      <TableCell109 />
      <TableCell110 />
      <TableCell111 />
      <TableCell112 />
      <TableCell113 />
      <TableCell114 />
      <TableCell115 />
      <TableCell116 />
      <TableCell117 />
      <TableCell118 />
      <TableCell119 />
    </div>
  );
}

function TableBody3() {
  return (
    <div className="absolute h-[294px] left-0 top-[44.5px] w-[1286px]" data-name="Table Body">
      <TableRow13 />
      <TableRow14 />
      <TableRow15 />
      <TableRow16 />
      <TableRow17 />
      <TableRow18 />
    </div>
  );
}

function RelatorioVisualizar4() {
  return (
    <div className="absolute h-[339px] left-[25px] overflow-clip top-[124px] w-[1286px]" data-name="RelatorioVisualizar">
      <TableHeader3 />
      <TableBody3 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#2b3630] h-[488px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#2b3630] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <RelatorioVisualizar3 />
      <PrimitiveDiv3 />
      <RelatorioVisualizar4 />
    </div>
  );
}

function RelatorioVisualizar5() {
  return (
    <div className="absolute bg-[#121714] box-border content-stretch flex flex-col gap-[24px] h-[1724px] items-start left-0 pb-0 pt-[109px] px-[32px] top-[-495px] w-[1400px]" data-name="RelatorioVisualizar">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon33 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-50 text-nowrap top-[-2px] whitespace-pre">Relatório da Instituição</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9da29f] text-[14px] text-nowrap whitespace-pre">Análise completa do período selecionado</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[44px] relative shrink-0 w-[307.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[44px] items-center relative w-[307.438px]">
        <Button />
        <Container3 />
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #9DA29F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #9DA29F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #9DA29F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #9DA29F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="h-[20px] relative shrink-0 w-[121px]" data-name="Date Picker">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] w-[121px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[21.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[21.938px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#9da29f] text-[16px] text-nowrap top-[-2px] whitespace-pre">até</p>
      </div>
    </div>
  );
}

function DatePicker1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Date Picker">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] w-full" />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#2b3630] h-[40px] relative rounded-[10px] shrink-0 w-[335.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center px-[16px] py-0 relative w-[335.938px]">
        <Icon34 />
        <DatePicker />
        <Text2 />
        <DatePicker1 />
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0f3d26] h-[36px] relative rounded-[8px] shrink-0 w-[121.984px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[121.984px]">
        <Icon35 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[77px] text-[14px] text-center text-neutral-50 text-nowrap top-[6px] translate-x-[-50%] whitespace-pre">Gerar PDF</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44px] items-center justify-between pl-0 pr-[0.016px] py-0 relative w-full">
          <Container4 />
          <Container5 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function RelatorioVisualizar6() {
  return (
    <div className="absolute bg-[#0f3d26] box-border content-stretch flex flex-col h-[77px] items-start left-0 pb-px pt-[16px] px-[32px] top-[64px] w-[1400px]" data-name="RelatorioVisualizar">
      <div aria-hidden="true" className="absolute border-[#2b3630] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container6 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 grow h-[779px] min-h-px min-w-px relative shrink-0" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[779px] overflow-clip relative rounded-[inherit] w-full">
        <RelatorioVisualizar5 />
        <RelatorioVisualizar6 />
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

function Text3() {
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

function Icon36() {
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

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[77.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[77.109px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[39.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon36 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Icon37() {
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

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.25px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[47px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Propriedades</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon37 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon38() {
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

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.078px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[30.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Espécies</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon38 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Icon39() {
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

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[51.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[51.875px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[26.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Coletas</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon39 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Icon40() {
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

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[117.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[117.969px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[59.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Monitoramentos</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon40 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Icon41() {
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

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[53px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[53px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[26.5px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Rótulos</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon41 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31172880} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[72.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[72.375px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[36.5px] text-[16px] text-center text-neutral-50 text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Relatórios</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#0f3d26] h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon42 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Icon43() {
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

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48.219px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#1a1a1a] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Equipe</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon43 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[255px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-full items-start overflow-clip pb-0 pt-[24px] px-[16px] relative rounded-[inherit] w-[255px]">
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
      </div>
    </div>
  );
}

function Icon44() {
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

function Text12() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#777777] text-[14px] top-[-2px] w-[153px]">Alternar para Módulo de Restauração</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[68px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[68px] items-center px-[12px] py-0 relative w-full">
          <Icon44 />
          <Text12 />
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
        <Button10 />
      </div>
    </div>
  );
}

function Text13() {
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
        <Text13 />
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

function Icon45() {
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

function Button11() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon45 />
      </div>
    </div>
  );
}

function Icon46() {
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

function Button12() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon46 />
      </div>
    </div>
  );
}

function Icon47() {
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

function Button13() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon47 />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[12px] h-[64px] items-center justify-end left-[256px] pb-px pl-0 pr-[24px] pt-0 top-0 w-[1423px]" data-name="TopBar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

// Exportar componentes para uso na aplicação
export { Card, Card1, Card2, Card3, Container6 };

export default function ViniciusRastaFlorColeta() {
  return (
    <div className="bg-white relative size-full" data-name="Vinicius - Rasta Flor | Coleta">
      <App />
      <Text3 />
      <Sidebar />
      <TopBar />
    </div>
  );
}