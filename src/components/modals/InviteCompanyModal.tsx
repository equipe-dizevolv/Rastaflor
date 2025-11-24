import { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface InviteCompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CompanyFormData) => void;
}

export interface CompanyFormData {
  emailAdmin: string;
  endereco: string;
  cidade: string;
  razaoSocial: string;
  cnpj: string;
  tipoEmpresa: string;
  modulosAcesso: string;
  contato: string;
  estado: string;
  logo: File | null;
}

export function InviteCompanyModal({ isOpen, onClose, onSubmit }: InviteCompanyModalProps) {
  const [formData, setFormData] = useState<CompanyFormData>({
    emailAdmin: '',
    endereco: '',
    cidade: '',
    razaoSocial: '',
    cnpj: '',
    tipoEmpresa: '',
    modulosAcesso: '',
    contato: '',
    estado: '',
    logo: null,
  });

  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({
      emailAdmin: '',
      endereco: '',
      cidade: '',
      razaoSocial: '',
      cnpj: '',
      tipoEmpresa: '',
      modulosAcesso: '',
      contato: '',
      estado: '',
      logo: null,
    });
    setLogoPreview(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, logo: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-[12px] shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E0E0E0]">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">Convidar usuário e criar nova empresa</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-[#777777] hover:text-[#1A1A1A] transition-colors p-1 rounded-lg hover:bg-[#F5F5F5]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Coluna Esquerda */}
              <div className="space-y-4">
                {/* E-mail do Administrador */}
                <div className="space-y-2">
                  <Label htmlFor="emailAdmin" className="text-sm font-medium text-[#1A1A1A]">
                    E-mail do Administrador *
                  </Label>
                  <Input
                    id="emailAdmin"
                    type="email"
                    required
                    value={formData.emailAdmin}
                    onChange={(e) => setFormData({ ...formData, emailAdmin: e.target.value })}
                    placeholder="admin@empresa.com.br"
                    className="rounded-[12px] border-[#E0E0E0]"
                  />
                </div>

                {/* Endereço da Empresa */}
                <div className="space-y-2">
                  <Label htmlFor="endereco" className="text-sm font-medium text-[#1A1A1A]">
                    Endereço da Empresa *
                  </Label>
                  <Input
                    id="endereco"
                    type="text"
                    required
                    value={formData.endereco}
                    onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                    placeholder="Rua, número, bairro"
                    className="rounded-[12px] border-[#E0E0E0]"
                  />
                </div>

                {/* Cidade da Empresa */}
                <div className="space-y-2">
                  <Label htmlFor="cidade" className="text-sm font-medium text-[#1A1A1A]">
                    Cidade da Empresa *
                  </Label>
                  <Input
                    id="cidade"
                    type="text"
                    required
                    value={formData.cidade}
                    onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                    placeholder="Cidade"
                    className="rounded-[12px] border-[#E0E0E0]"
                  />
                </div>

                {/* Razão Social */}
                <div className="space-y-2">
                  <Label htmlFor="razaoSocial" className="text-sm font-medium text-[#1A1A1A]">
                    Razão Social *
                  </Label>
                  <Input
                    id="razaoSocial"
                    type="text"
                    required
                    value={formData.razaoSocial}
                    onChange={(e) => setFormData({ ...formData, razaoSocial: e.target.value })}
                    placeholder="Nome da empresa"
                    className="rounded-[12px] border-[#E0E0E0]"
                  />
                </div>

                {/* CNPJ */}
                <div className="space-y-2">
                  <Label htmlFor="cnpj" className="text-sm font-medium text-[#1A1A1A]">
                    CNPJ *
                  </Label>
                  <Input
                    id="cnpj"
                    type="text"
                    required
                    value={formData.cnpj}
                    onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                    placeholder="00.000.000/0000-00"
                    className="rounded-[12px] border-[#E0E0E0]"
                  />
                </div>

                {/* Tipo de Empresa */}
                <div className="space-y-2">
                  <Label htmlFor="tipoEmpresa" className="text-sm font-medium text-[#1A1A1A]">
                    Tipo de Empresa *
                  </Label>
                  <Select
                    value={formData.tipoEmpresa}
                    onValueChange={(value) => setFormData({ ...formData, tipoEmpresa: value })}
                  >
                    <SelectTrigger className="rounded-[12px] border-[#E0E0E0]">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="privada">Privada</SelectItem>
                      <SelectItem value="ong">ONG</SelectItem>
                      <SelectItem value="cooperativa">Cooperativa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Coluna Direita */}
              <div className="space-y-4">
                {/* Módulo de Acesso */}
                <div className="space-y-2">
                  <Label htmlFor="modulosAcesso" className="text-sm font-medium text-[#1A1A1A]">
                    Módulo que a Empresa terá acesso *
                  </Label>
                  <Select
                    value={formData.modulosAcesso}
                    onValueChange={(value) => setFormData({ ...formData, modulosAcesso: value })}
                  >
                    <SelectTrigger className="rounded-[12px] border-[#E0E0E0]">
                      <SelectValue placeholder="Selecione o módulo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="coleta">Coleta</SelectItem>
                      <SelectItem value="restauracao">Restauração</SelectItem>
                      <SelectItem value="ambos">Ambos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Contato */}
                <div className="space-y-2">
                  <Label htmlFor="contato" className="text-sm font-medium text-[#1A1A1A]">
                    Contato da Empresa *
                  </Label>
                  <Input
                    id="contato"
                    type="tel"
                    required
                    value={formData.contato}
                    onChange={(e) => setFormData({ ...formData, contato: e.target.value })}
                    placeholder="(00) 00000-0000"
                    className="rounded-[12px] border-[#E0E0E0]"
                  />
                </div>

                {/* Estado da Empresa */}
                <div className="space-y-2">
                  <Label htmlFor="estado" className="text-sm font-medium text-[#1A1A1A]">
                    Estado da Empresa *
                  </Label>
                  <Select
                    value={formData.estado}
                    onValueChange={(value) => setFormData({ ...formData, estado: value })}
                  >
                    <SelectTrigger className="rounded-[12px] border-[#E0E0E0]">
                      <SelectValue placeholder="Selecione o estado" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[200px]">
                      <SelectItem value="AC">Acre</SelectItem>
                      <SelectItem value="AL">Alagoas</SelectItem>
                      <SelectItem value="AP">Amapá</SelectItem>
                      <SelectItem value="AM">Amazonas</SelectItem>
                      <SelectItem value="BA">Bahia</SelectItem>
                      <SelectItem value="CE">Ceará</SelectItem>
                      <SelectItem value="DF">Distrito Federal</SelectItem>
                      <SelectItem value="ES">Espírito Santo</SelectItem>
                      <SelectItem value="GO">Goiás</SelectItem>
                      <SelectItem value="MA">Maranhão</SelectItem>
                      <SelectItem value="MT">Mato Grosso</SelectItem>
                      <SelectItem value="MS">Mato Grosso do Sul</SelectItem>
                      <SelectItem value="MG">Minas Gerais</SelectItem>
                      <SelectItem value="PA">Pará</SelectItem>
                      <SelectItem value="PB">Paraíba</SelectItem>
                      <SelectItem value="PR">Paraná</SelectItem>
                      <SelectItem value="PE">Pernambuco</SelectItem>
                      <SelectItem value="PI">Piauí</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="RN">Rio Grande do Norte</SelectItem>
                      <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                      <SelectItem value="RO">Rondônia</SelectItem>
                      <SelectItem value="RR">Roraima</SelectItem>
                      <SelectItem value="SC">Santa Catarina</SelectItem>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="SE">Sergipe</SelectItem>
                      <SelectItem value="TO">Tocantins</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Logo Upload */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-[#1A1A1A]">
                    Logo da Empresa
                  </Label>
                  <div className="border-2 border-dashed border-[#E0E0E0] rounded-[12px] p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <input
                      type="file"
                      id="logo"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="logo" className="cursor-pointer">
                      {logoPreview ? (
                        <div className="space-y-2">
                          <img
                            src={logoPreview}
                            alt="Logo preview"
                            className="w-32 h-32 object-contain mx-auto rounded-lg"
                          />
                          <p className="text-sm text-[#777777]">Clique para alterar</p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <Upload className="w-12 h-12 mx-auto text-[#999999]" />
                          <div>
                            <p className="text-sm text-[#1A1A1A] font-medium">
                              Clique aqui ou arraste
                            </p>
                            <p className="text-xs text-[#777777] mt-1">
                              PNG, JPG ou SVG (máx. 2MB)
                            </p>
                          </div>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#E0E0E0] bg-white">
            <Button
              type="submit"
              className="rounded-[12px] px-6 py-2"
              style={{ backgroundColor: '#0F3D26', color: 'white' }}
            >
              Criar Empresa
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}