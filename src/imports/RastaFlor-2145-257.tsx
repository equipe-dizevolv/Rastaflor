import svgPaths from "./svg-b7kzb62mdu";
import rastaFlorLogo from 'figma:asset/9c14cc3ff4bd6d87486f75d6184b5bc3e4d36350.png';

function Login() {
  return (
    <div className="absolute h-[64px] left-[158.25px] rounded-[16px] top-[24px] w-[129.484px]" data-name="Login">
      <img 
        src={rastaFlorLogo} 
        alt="RastaFlor Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute h-[16px] left-[24px] top-[126px] w-[398px]" data-name="CardTitle">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-1px] whitespace-pre">Bem-vindo de volta</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute h-[142px] left-px top-px w-[446px]" data-name="CardHeader">
      <Login />
      <CardTitle />
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">Email</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Digite seu email</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-0 w-[398px]" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">Senha</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[10px] top-0 w-[398px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[12px] pr-[40px] py-[4px] relative rounded-[inherit] w-[398px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre">Digite sua senha</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[370px] size-[16px] top-[10px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[74px] w-[398px]" data-name="Container">
      <PrimitiveLabel1 />
      <Container1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#0f3d26] h-[36px] left-0 rounded-[10px] top-[148px] w-[398px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[199.33px] not-italic text-[14px] text-center text-neutral-50 text-nowrap top-[8px] translate-x-[-50%] whitespace-pre">Entrar</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[20px] left-[129.39px] top-[203px] w-[139.219px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[70px] not-italic text-[#0f3d26] text-[14px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Esqueci minha senha</p>
    </div>
  );
}

function Login1() {
  return (
    <div className="absolute h-[224px] left-[25px] top-[167px] w-[398px]" data-name="Login">
      <Container />
      <Container2 />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] h-[416px] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <CardHeader />
      <Login1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[224.38px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">© 2024 RastaFlor. Todos os direitos reservados.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[460px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[460px] items-start relative w-[448px]">
        <Card />
        <Paragraph />
      </div>
    </div>
  );
}

export default function RastaFlor() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="Rasta Flor" style={{ backgroundImage: "linear-gradient(rgb(15, 61, 38) 0%, rgb(26, 77, 50) 50%, rgb(10, 42, 26) 100%), linear-gradient(90deg, rgb(248, 248, 248) 0%, rgb(248, 248, 248) 100%)" }}>
      <Container3 />
    </div>
  );
}