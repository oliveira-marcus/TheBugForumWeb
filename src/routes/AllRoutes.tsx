import Home from "./Home.tsx";
import FeedLayout from "../layouts/FeedLayout.tsx";
import Sports from "./Sports.tsx";
import Events from "./Events.tsx";
import Polls from "./Polls.tsx";
import Finances from "./Finances.tsx";
import PostPage from "./PostPage.tsx";
import Login from "./Login.tsx";
import Register from "./Register.tsx";
import CreatePoll from "./CreatePoll.tsx";
import Submit from "./Submit.tsx";
import { Route, Routes, Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext.tsx";

export default function AllRoutes() {
  const { token } = useAuth();

  return (
    <Routes>
      {!token ? (
        <>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      ) : (
        <Route element={<FeedLayout />}>
          <Route index element={<Home />} />
          <Route path="posts/criar" element={<Submit />} />
          <Route path="enquetes" element={<Polls />} />
          <Route path="enquetes/criar" element={<CreatePoll />} />
          <Route path="financas" element={<Finances />} />
          <Route path="esportes" element={<Sports />} />
          <Route path="eventos" element={<Events />} />
          <Route path=":postId" element={<PostPage />} />
        </Route>
      )}
    </Routes>
  );
}

