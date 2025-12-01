import { useState } from "react";
import { Eye, EyeOff, UserPlus, User, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { register } from "../services/auth";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
    general: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async () => {
    const newErrors = { password: "", confirmPassword: "", general: "" };

    if (formData.password.length < 6) {
      newErrors.password = "A senha deve ter no mínimo 6 caracteres";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem";
    }

    if (!formData.acceptTerms) {
      newErrors.general = "Você deve aceitar os termos de uso";
    }

    setErrors(newErrors);

    if (
      !newErrors.password &&
      !newErrors.confirmPassword &&
      !newErrors.general
    ) {
      try {
        await register(formData);
        navigate("/login");
      }
      catch (error: any) {
      console.log(error);
    }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
            <img
              src="/logo_square.png"
              alt="Logo The Bug"
              className="w-16 h-16 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Junte-se ao The Bug Forum
          </h1>
          <p className="text-blue-300">
            Crie sua conta e participe da comunidade
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Criar Conta</h2>

          {errors.general && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-400 text-sm">
              {errors.general}
            </div>
          )}

          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nome
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder="João"
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Sobrenome
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Silva"
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Nome de Usuário
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                  @
                </span>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  placeholder="joaosilva"
                  className="w-full pl-8 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Este será seu identificador público no fórum
              </p>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  placeholder="seu.email@exemplo.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-12 py-3 bg-gray-800 border ${
                    errors.password ? "border-red-500" : "border-gray-700"
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-400">{errors.password}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Confirmar Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-12 py-3 bg-gray-800 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-700"
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-gray-700 bg-gray-800 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm text-gray-300 group-hover:text-white transition">
                  Eu aceito os{" "}
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Termos de Uso
                  </a>{" "}
                  e a{" "}
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Política de Privacidade
                  </a>
                </span>
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition shadow-lg hover:shadow-blue-500/50"
            >
              <UserPlus className="w-5 h-5" />
              Criar Conta
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-900 text-gray-400">ou</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400">
              Já tem uma conta?{" "}
              <Link
                to="/login"
                className="text-blue-400 hover:text-blue-300 font-semibold transition"
              >
                Faça login
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          © 2025 Atlética The Bug - UFVJM
        </p>
      </div>
    </div>
  );
}
