function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-200 text-nowrap">
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-400 text-nowrap">
        <p className="leading-[24px] whitespace-pre">{`--->`}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-500 text-nowrap">
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
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white w-full">
        <p className="leading-[32px]">Informações Essenciais do Projeto</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Nome do Projeto *</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[382px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-500 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Nome do projeto</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#2b3630] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[11px] relative w-full">
          <Container7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Tempo de execução em meses *</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[382px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-500 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Tempo de execução em meses *</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#2b3630] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[11px] relative w-full">
          <Container8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Meta de restauração (em hectares) *</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[382px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-500 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Meta de restauração (em hectares) *</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#2b3630] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start px-[13px] py-[11px] relative w-full">
          <Container9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Etapa inicial do projeto *</p>
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

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[13px] overflow-clip right-[13.41px] top-1/2 translate-y-[-50%]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[20px] whitespace-pre">Selecione uma etapa</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="basis-0 bg-white grow h-[42px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Options">
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <ImageFill />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[2.842e_-14px] items-center relative shrink-0 w-full" data-name="Container">
      <Options />
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-gray-200 grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-700 text-nowrap">
            <p className="leading-[20px] whitespace-pre">Cancelar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[#0f3d26] grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[20px] whitespace-pre">Próximo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="box-border content-stretch flex gap-[24px] items-start pb-0 pt-[24px] px-0 relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Form">
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container12 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#2b3630] relative rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Background+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-[48px] pt-[32px] px-[32px] relative w-full">
          <Container6 />
          <Heading />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default function Step() {
  return (
    <div className="bg-[#2b3630] content-stretch flex flex-col items-start relative size-full" data-name="step 4">
      <BackgroundShadow />
    </div>
  );
}