import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthPage from "../pages/AuthPage/AuthPage";
import GamePage from "../pages/GamePage/GamePage";

const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/*" element={status === "authenticated" ? <GamePage /> : <AuthPage />} />
    </Routes>
  )
}

export default AppRouter