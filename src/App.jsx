import { useState } from "react";
import { AppShell } from "./components/layout/AppShell";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import ResultsPage from "./pages/ResultsPage";
import ModulePage from "./pages/ModulePage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage("dashboard");
  };

  if (!isLoggedIn) return <LoginPage onLogin={handleLogin} />;

  return (
    <AppShell currentPage={currentPage} onNavigate={setCurrentPage} onLogout={handleLogout}>
      {currentPage === "dashboard" ? (
        <DashboardPage onNavigate={setCurrentPage} />
      ) : currentPage === "results" ? (
        <ResultsPage />
      ) : (
        <ModulePage pageId={currentPage} onNavigate={setCurrentPage} />
      )}
    </AppShell>
  );
}
