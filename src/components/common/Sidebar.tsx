import {
  Award,
  Calendar,
  DollarSign,
  Home,
  Plus,
  Vote,
} from "lucide-react";
import { Link } from "react-router";

export default function Sidebar() {
  const categories = [
    { id: "geral", name: "Geral", icon: Home, route: "/" },
    { id: "eventos", name: "Eventos", icon: Calendar, route: "eventos" },
    { id: "financas", name: "Finanças", icon: DollarSign, route: "financas" },
    { id: "enquetes", name: "Enquetes", icon: Vote, route: "enquetes" },
    { id: "esportes", name: "Esportes", icon: Award, route: "esportes" },
  ];

  const selectedCategory = "todos";

  return (
    <aside className="lg:col-span-3 space-y-4">
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition">
          <Plus className="w-5 h-5" />
          Nova Discussão
        </button>
      </div>

      <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h2 className="font-semibold text-lg">Categorias</h2>
        </div>
        <nav className="p-2">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.route}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <cat.icon className="w-5 h-5" />
              <span className="font-medium">{cat.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
        <h3 className="font-semibold mb-3 text-blue-400">Sobre o Fórum</h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Espaço oficial da Atlética The Bug para discussões, propostas,
          votações e transparência administrativa.
        </p>
      </div>
    </aside>
  );
}
