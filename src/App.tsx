import { useState } from "react";
import {
  Home,
  TrendingUp,
  DollarSign,
  Calendar,
  Vote,
  Bell,
  Search,
  Menu,
  Plus,
  ChevronUp,
  MessageSquare,
  Share2,
  Bookmark,
  MoreHorizontal,
  Award,
} from "lucide-react";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  votes: number;
  comments: number;
  timestamp: string;
  isPinned?: boolean;
};

const ForumTheBug = () => {
  const [activeTab, setActiveTab] = useState("inicio");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", name: "Todos", icon: Home },
    { id: "eventos", name: "Eventos", icon: Calendar },
    { id: "financas", name: "Finanças", icon: DollarSign },
    { id: "propostas", name: "Propostas", icon: Vote },
    { id: "esportes", name: "Esportes", icon: Award },
    { id: "geral", name: "Geral", icon: MessageSquare },
  ];

  const posts: Post[] = [
    {
      id: 1,
      title: "Prestação de Contas - Novembro 2025",
      content:
        "Relatório financeiro completo do mês de novembro com detalhamento de receitas e despesas...",
      author: "Diretoria The Bug",
      category: "financas",
      votes: 45,
      comments: 12,
      timestamp: "2h atrás",
      isPinned: true,
    },
    {
      id: 2,
      title: "Proposta: Novo uniforme para o InterBugs 2026",
      content:
        "Gostaria de propor uma discussão sobre o design do próximo uniforme da atlética...",
      author: "caio_liboreiro",
      category: "propostas",
      votes: 32,
      comments: 24,
      timestamp: "5h atrás",
    },
    {
      id: 3,
      title: "MatchWeek confirmado para Dezembro!",
      content:
        "Pessoal, saiu a confirmação! O MatchWeek acontecerá nos dias 15 e 16 de dezembro...",
      author: "gabriel_macedo",
      category: "eventos",
      votes: 78,
      comments: 45,
      timestamp: "1 dia atrás",
    },
    {
      id: 4,
      title: "Enquete: Horário dos treinos de futsal",
      content:
        "Precisamos definir o melhor horário para os treinos. Votem nas opções abaixo!",
      author: "marcus_pinto",
      category: "esportes",
      votes: 23,
      comments: 8,
      timestamp: "2 dias atrás",
    },
  ];

  const filteredPosts =
    selectedCategory === "todos"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-linear-to-r from-blue-600 to-blue-800 border-b border-blue-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-xl border-2 border-white">
                TB
              </div>
              <div>
                <h1 className="text-2xl font-bold">The Bug Forum</h1>
                <p className="text-blue-200 text-sm">Atlética UFVJM - SI</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center bg-black/30 rounded-lg px-4 py-2 w-80">
                <Search className="w-5 h-5 text-blue-300 mr-2" />
                <input
                  type="text"
                  placeholder="Buscar discussões..."
                  className="bg-transparent border-none outline-none text-white placeholder-blue-300 w-full"
                />
              </div>
              <button className="p-2 hover:bg-blue-700 rounded-lg transition">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-blue-700 rounded-lg transition md:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
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
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      selectedCategory === cat.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <cat.icon className="w-5 h-5" />
                    <span className="font-medium">{cat.name}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <h3 className="font-semibold mb-3 text-blue-400">
                Sobre o Fórum
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Espaço oficial da Atlética The Bug para discussões, propostas,
                votações e transparência administrativa.
              </p>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-4">
            {/* Tabs */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-2 flex gap-2">
              <button
                onClick={() => setActiveTab("inicio")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                  activeTab === "inicio"
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <Home className="w-4 h-4" />
                Início
              </button>
              <button
                onClick={() => setActiveTab("populares")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                  activeTab === "populares"
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                Populares
              </button>
            </div>

            {/* Posts */}
            <div className="space-y-3">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className={`bg-gray-900 rounded-lg border hover:border-blue-600 transition-all ${
                    post.isPinned ? "border-blue-600" : "border-gray-800"
                  }`}
                >
                  <div className="p-4">
                    {post.isPinned && (
                      <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold mb-2">
                        <Award className="w-4 h-4" />
                        FIXADO PELA DIRETORIA
                      </div>
                    )}

                    <div className="flex gap-3">
                      {/* Vote Section */}
                      <div className="flex flex-col items-center gap-1">
                        <button className="p-1 hover:bg-gray-800 rounded transition">
                          <ChevronUp className="w-6 h-6 text-gray-400 hover:text-blue-500" />
                        </button>
                        <span className="font-bold text-sm">{post.votes}</span>
                        <button className="p-1 hover:bg-gray-800 rounded transition">
                          <ChevronUp className="w-6 h-6 text-gray-400 hover:text-red-500 rotate-180" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                            {categories.find((c) => c.id === post.category)
                              ?.name || "Geral"}
                          </span>
                          <span>•</span>
                          <span>
                            Postado por{" "}
                            <span className="text-blue-400">
                              u/{post.author}
                            </span>
                          </span>
                          <span>•</span>
                          <span>{post.timestamp}</span>
                        </div>

                        <h2 className="text-xl font-bold mb-2 hover:text-blue-400 cursor-pointer">
                          {post.title}
                        </h2>

                        <p className="text-gray-400 mb-4 line-clamp-2">
                          {post.content}
                        </p>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition">
                            <MessageSquare className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {post.comments} comentários
                            </span>
                          </button>
                          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition">
                            <Share2 className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              Compartilhar
                            </span>
                          </button>
                          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition">
                            <Bookmark className="w-4 h-4" />
                            <span className="text-sm font-medium">Salvar</span>
                          </button>
                          <button className="ml-auto p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ForumTheBug;
