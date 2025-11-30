import { useState } from "react";
import Tabs from "../components/common/Tabs";
import Post from "../components/common/Post/Post";
import type { PostInfo } from "../types/PostInfo";

const ForumTheBug = () => {
  const [activeTab, setActiveTab] = useState("inicio");

  const posts: PostInfo[] = [
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

  return (
    <main className="lg:col-span-9 space-y-4">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="space-y-3">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </main>
  );
};

export default ForumTheBug;
