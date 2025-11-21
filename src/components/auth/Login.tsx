import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import rastaFlorLogo from 'figma:asset/9c14cc3ff4bd6d87486f75d6184b5bc3e4d36350.png';

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simula um delay de autenticação
    setTimeout(() => {
      if (email === 'admin' && password === '1234') {
        onLogin();
      } else {
        setError('Email ou senha incorretos. Tente novamente.');
        setIsLoading(false);
      }
    }, 800);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simula um delay de recuperação de senha
    setTimeout(() => {
      setResetSuccess(true);
      setIsLoading(false);
    }, 800);
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
    setResetSuccess(false);
    setResetEmail('');
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f3d26] via-[#1a4d32] to-[#0a2a1a] p-4">
      <div className="w-full max-w-md">
        {/* Card de Login */}
        <Card className="bg-card/95 backdrop-blur-sm border-border shadow-2xl">
          <CardHeader className="space-y-4">
            {/* Logo e Título */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <img
                  src={rastaFlorLogo}
                  alt="RastaFlor Logo"
                  className="h-16 object-contain rounded-xl"
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <CardTitle className="text-foreground">
                {showForgotPassword ? 'Recuperar Senha' : 'Bem-vindo de volta'}
              </CardTitle>
              {showForgotPassword && (
                <CardDescription className="text-secondary">
                  Digite seu email para receber instruções de recuperação
                </CardDescription>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {!showForgotPassword ? (
              // Formulário de Login
              <>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="text"
                      placeholder="Digite seu email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-input border-border focus:border-primary"
                      disabled={isLoading}
                    />
                  </div>

                  {/* Senha */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-foreground">
                      Senha
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-input border-border focus:border-primary pr-10"
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-foreground transition-colors"
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Mensagem de Erro */}
                  {error && (
                    <Alert variant="destructive" className="bg-destructive/10 border-destructive/50">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  {/* Botão de Login */}
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Entrando...
                      </div>
                    ) : (
                      'Entrar'
                    )}
                  </Button>

                  {/* Link Esqueci minha senha */}
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setShowForgotPassword(true)}
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                      disabled={isLoading}
                    >
                      Esqueci minha senha
                    </button>
                  </div>
                </form>

                {/* Credenciais de Teste */}
              </>
            ) : (
              // Formulário de Recuperação de Senha
              <>
                {!resetSuccess ? (
                  <form onSubmit={handleForgotPassword} className="space-y-4">
                    {/* Email para recuperação */}
                    <div className="space-y-2">
                      <Label htmlFor="reset-email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="reset-email"
                        type="text"
                        placeholder="Digite seu email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        required
                        className="bg-input border-border focus:border-primary"
                        disabled={isLoading}
                      />
                    </div>

                    {/* Mensagem de Erro */}
                    {error && (
                      <Alert variant="destructive" className="bg-destructive/10 border-destructive/50">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    {/* Botão de Enviar */}
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Enviando...
                        </div>
                      ) : (
                        'Enviar instruções'
                      )}
                    </Button>

                    {/* Voltar para login */}
                    <div className="text-center">
                      <button
                        type="button"
                        onClick={handleBackToLogin}
                        className="text-sm text-secondary hover:text-foreground transition-colors"
                        disabled={isLoading}
                      >
                        Voltar para o login
                      </button>
                    </div>
                  </form>
                ) : (
                  // Mensagem de sucesso
                  <div className="space-y-4">
                    <Alert className="bg-primary/10 border-primary/50">
                      <AlertDescription className="text-foreground">
                        Instruções de recuperação de senha foram enviadas para o seu email!
                      </AlertDescription>
                    </Alert>

                    <Button
                      onClick={handleBackToLogin}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Voltar para o login
                    </Button>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-white/50 text-sm mt-6">
          © 2024 RastaFlor. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}