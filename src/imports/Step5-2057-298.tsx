function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-200 text-nowrap">
        <p className="leading-[24px] whitespace-pre">1. Informações do Projeto</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container />
    </div>
  );
}

function Margin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-[8px] py-0 relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">{`--->`}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-200 text-nowrap">
        <p className="leading-[24px] whitespace-pre">2. Financiamento</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-500 text-nowrap">
        <p className="leading-[24px] whitespace-pre">3. Revisão</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Margin />
      <Container3 />
      <Margin />
      <Container5 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-center text-white w-full">
        <p className="leading-[36px]">Financiamento e Fornecedores</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">Investimento</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Selecione o Banco</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d="M7.2 9.6L12 14.4L16.8 9.6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[42px] items-end justify-center left-0 overflow-clip pl-[184.59px] pr-[9px] py-[9px] top-0 w-[217.59px]" data-name="image fill">
      <Image />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[13px] overflow-clip right-[13.41px] top-1/2 translate-y-[-50%]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Texto</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="basis-0 bg-white grow h-[42px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Options">
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <ImageFill />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[2.842e_-14px] items-center relative shrink-0 w-full" data-name="Container">
      <Options />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0f3d26] box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">+ Novo Financiador</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-[8px] pr-0 py-0 relative shrink-0" data-name="Button:margin">
      <Button />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[2.842e_-14px] items-end relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <ButtonMargin />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[408px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Valor Investido (R$)</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[382px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-200 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Ex: 50.000,00</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#2b3630] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start justify-center px-[13px] py-[11px] relative w-full">
          <Container11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[408px]" data-name="Container">
      <Label1 />
      <Input />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[24px] items-end justify-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container12 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0f3d26] box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Adicionar Investimento</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Button1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mr-[-2.842e_-14px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2a7f62] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Banco do Brasil: R$ 50.000,00</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap">
        <p className="leading-[20px] whitespace-pre">×</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mr-[-2.842e_-14px] pl-[8px] pr-0 py-0 relative shrink-0" data-name="Margin">
      <Container16 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-gray-100 box-border content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <Container15 />
      <Margin1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="box-border content-stretch flex flex-wrap gap-0 items-start pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <Background />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container18 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">Fornecedor Principal</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[223px]" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Selecione o Fornecedor</p>
      </div>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="absolute h-[38px] left-0 top-0 w-[214px]" data-name="image fill">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="h-[38px] w-[214px]" />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[173px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[20px] whitespace-pre">{` Selecione o fornecedorr`}</p>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="image">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <Container20 />
      <Image1 />
    </div>
  );
}

function Options1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start p-[9px] relative rounded-[6px] shrink-0" data-name="Options">
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <ImageFill1 />
      <Frame />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[223px]" data-name="Container">
      <Options1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="[text-underline-position:from-font] decoration-solid leading-[24px] underline whitespace-pre">+Adicionar novo fornecedor</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[448px] relative shrink-0 w-[223px]" data-name="Container">
      <Label2 />
      <Container21 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[33px] px-0 relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Heading2 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <HorizontalBorder />
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-gray-200 grow min-h-px min-w-px relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-700 text-nowrap">
            <p className="leading-[24px] whitespace-pre">Voltar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-[#0f3d26] grow min-h-px min-w-px relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
            <p className="leading-[24px] whitespace-pre">Próximo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start pb-0 pt-[16px] px-0 relative w-full">
          <Button2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

export default function Step() {
  return (
    <div className="bg-[#2b3630] relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-full" data-name="step 5">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start max-w-inherit overflow-clip p-[32px] relative size-full">
          <Container6 />
          <Heading />
          <Container23 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}